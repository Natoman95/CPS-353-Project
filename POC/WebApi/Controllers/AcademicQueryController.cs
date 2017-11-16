using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Text;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApi.Controllers
{
  [Route("microsoft-academic/[controller]")]
  public class AcademicQueryController : Controller
  {
    private string interpretUrl = "https://westus.api.cognitive.microsoft.com/academic/v1.0/interpret";
    private string evaluateUrl = "https://westus.api.cognitive.microsoft.com/academic/v1.0/evaluate";
    private ApiModel apiModel = new ApiModel();

    /* -------------------------------------- HTTP Requests -------------------------------------- */

    [HttpGet]
    public List<ResponseAcademicWork> Get([FromQuery] string query)
    {
      // Interpret the user's query in a variety of ways
      List<string> queryInterpretations = getQueryInterpretations(query);
      // Take those interpretations and get information on the related scholarly works
      List<dynamic> interpretationEvaluations = getInterpretationEvaluations(queryInterpretations);
      // Convert the resulting data into useful objects
      List<ResponseAcademicWork> works = createWorkObjects(interpretationEvaluations);

      return works;
    }

    /* -------------------------------------- Helper Methods -------------------------------------- */

    private List<string> getQueryInterpretations(string query)
    {
      // Perform a web request to interpret the user's query
      WebRequest request = WebRequest.Create(interpretUrl + "?query=" + query + "&count=10" + "&complete=1" + "&subscription-key=" + apiModel.getMicrosoftKey());
      request.Method = "GET";

      WebResponse response = request.GetResponse();
      StreamReader reader = new StreamReader(response.GetResponseStream());
      string responseFromServer = reader.ReadToEnd();
      reader.Close();
      response.Close();

      // Deserialize JSON
      dynamic responseJson = JsonConvert.DeserializeObject(responseFromServer);

      List<string> interpretations = new List<string>();

      // Add the returned interpretations to a list
      foreach (dynamic interpretation in responseJson.interpretations)
      {
        interpretations.Add((string)interpretation.rules[0].output.value);
      }

      return interpretations;
    }

    private List<dynamic> getInterpretationEvaluations(List<string> queryInterpretations)
    {
      List<dynamic> evaluations = new List<dynamic>();

      // Perform a series of web requests based on the interpretations of the user query to get data on
      // scholarly works
      foreach (string interpretation in queryInterpretations)
      {
        WebRequest request = WebRequest.Create(evaluateUrl + "?count=1" + "&expr=" + interpretation + "&attributes=" + "Ti,Y,CC,AA.AuN,AA.AuId" + "&subscription-key=" + apiModel.getMicrosoftKey());
        request.Method = "GET";

        WebResponse response = request.GetResponse();
        StreamReader reader = new StreamReader(response.GetResponseStream());
        string responseFromServer = reader.ReadToEnd();
        reader.Close();
        response.Close();

        // Add JSON objects to a list
        dynamic responseJson = JsonConvert.DeserializeObject(responseFromServer);
        evaluations.Add(responseJson);
      }

      return evaluations;
    }

    private List<ResponseAcademicWork> createWorkObjects(List<dynamic> interpretationEvaluations)
    {
      List<ResponseAcademicWork> worksList = new List<ResponseAcademicWork>();

      // convert returned data on scholarly works into more useful objects
      foreach (dynamic evaluation in interpretationEvaluations)
      {
        // extract data
        string title = (string)evaluation.entities[0].Ti;
        string year = (string)evaluation.entities[0].Y;
        string author = (string)evaluation.entities[0].AA[0].AuN;
        long authorId = (long)evaluation.entities[0].AA[0].AuId;

        // add object to a list
        ResponseAcademicWork respWork = new ResponseAcademicWork(title, year, author, authorId);
        worksList.Add(respWork);
      }

      return worksList;
    }
  }
}
