using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Text;
using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
  [Route("microsoft-academic/[controller]")]
  public class AcademicQueryController : Controller
  {

    /* -------------------------------------- HTTP Requests -------------------------------------- */

    private string interpretUrl = "https://westus.api.cognitive.microsoft.com/academic/v1.0/interpret?";

    [HttpGet]
    public string Get([FromQuery] string query)
    {
      HttpWebRequest request = (HttpWebRequest)
            WebRequest.Create("http://sms-om.com/smspro/sendsms.php?user=HatemSalem");


      HttpWebResponse response = (HttpWebResponse)
          request.GetResponse();


      Stream resStream = response.GetResponseStream();

      return "{ \"color\": \"red\", \"size\": \"big\" }";
    }
  }
}
