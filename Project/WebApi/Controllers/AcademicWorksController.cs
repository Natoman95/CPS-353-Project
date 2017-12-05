using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebApi.Models;
using System;
using System.Diagnostics;

namespace WebApi.Controllers
{
  [Route("microsoft-academic/[controller]")]
  public class AcademicWorksController : Controller
  {
    List<ApiAcademicWork> dummyWorks = new List<ApiAcademicWork>()
    {
      new ApiAcademicWork("The Trinity", "1966", "Karl Rahner", 7777),
      new ApiAcademicWork("Harry Potter", "2005", "J.K. Rowling", 6666),
      new ApiAcademicWork("Where's Waldo", "2005", "Martin Handford", 5555),
      new ApiAcademicWork("The Gospel of John", "30", "The Apostle John", 4444),
      new ApiAcademicWork("The Book of Eli", "2050", "Eli", 3333),
      new ApiAcademicWork("Summa Theologica", "1200", "Thomas Aquinas", 2222)
    };

    /* -------------------------------------- HTTP Requests -------------------------------------- */

    // Search among Academic works stored on the server by any attribute on the ApiAcademicWork object
    [HttpGet]
    public List<ApiAcademicWork> Get([FromQuery] string attribute, string value)
    {
      if (attribute == "authorId")
      {
        List<ApiAcademicWork> foundWorks = new List<ApiAcademicWork>();
        foundWorks.Add(findWorkByAuthorId(value));
        return foundWorks;
      }
      else
      {
        return findWorksByAttribute(attribute, value);
      }
    }

    /* -------------------------------------- Helper Methods -------------------------------------- */

    // Finds works based on an attribute on the ApiAcademicWork object
    // "attribute" specifies the name of the attribute on the ApiAcademicWork object
    // "value" specifies the value of the attribute to search for among the existing objects
    public List<ApiAcademicWork> findWorksByAttribute(string attribute, string value)
    {
      List<ApiAcademicWork> foundWorks = new List<ApiAcademicWork>();

      // The caller of the get method may not correctly specify the property name
      if (HasProperty(new ApiAcademicWork(), attribute))
      {
        foreach (ApiAcademicWork work in dummyWorks)
        {
          // If the object has the specified property, then get its value
          string propValue = GetPropertyValue(work, attribute);
          if (propValue == value)
          {
            foundWorks.Add(work);
          }
        }
      }
      return foundWorks;
    }

    // Finds a work based on the authorId attribute
    public ApiAcademicWork findWorkByAuthorId(string idString)
    {
      ApiAcademicWork foundWork = null;
      try
      {
        long id = Convert.ToInt64(idString);

        foreach (ApiAcademicWork work in dummyWorks)
        {
          if (work.authorId == id)
          {
            foundWork = work;
          }
        }
      }
      // In case the given Id wasn't properly formatted and couldn't be converted to a long
      catch (Exception e)
      {
        Debug.WriteLine(e);
      }
      return foundWork;
    }

    // Take a generic object and a property name and see if the object has the property
    private bool HasProperty(object objectToCheck, string propertyName)
    {
      return objectToCheck.GetType().GetProperty(propertyName) != null;
    }

    // Take a generic object and a property name and return the value of that property
    private string GetPropertyValue(object objectToGet, string propertyName)
    {
      string value = null;
      try
      {
        value = (string)objectToGet.GetType().GetProperty(propertyName).GetValue(objectToGet);
      }
      catch (Exception e)
      {
        Debug.WriteLine(e);
      }
      return value;
    }
  }
}
