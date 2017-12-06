using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using WebApi.Models;
using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApi.Controllers
{
  // Contains endpoints that deal with user retrieval, creation, deletion, updating
  [Route("[controller]")]
  public class UserController : Controller
  {
    /* -------------------------------------- HTTP Requests -------------------------------------- */

    // Finds a user based on the user's id
    [HttpGet]
    public User Get([FromQuery] string id)
    {
      User user = null;
      if (id != null)
      {
        long idLong = Convert.ToInt64(id);
        user = UserService.Instance.FindUserById(idLong);
      }

      return user;
    }

    // Adds a department to a user's list of departments
    [HttpPost]
    public void Post([FromBody] JObject body)
    {
      // For finding the user to update
      long id = Convert.ToInt64((string)body.SelectToken("id"));

      // For finding the institution and department to add
      string institution = (string)body.SelectToken("institution");
      string title = (string)body.SelectToken("title");

      // Find user
      User user = null;
      if (id >= 1)
      {
        user = UserService.Instance.FindUserById(id);
      }

      // Find institution
      Institution institutionObj = null;
      if (user != null)
      {
        institutionObj = UserService.Instance.FindInstitutionByTitle(institution);
      }

      // Find department within that institution
      Department department = null;
      if (institutionObj != null)
      {
        department = DepartmentService.Instance.FindDepartmentByTitle(institutionObj, title);
      }

      // If the department is there, then add it to the user who wants it
      if (department != null)
      {
        user.AddDepartment(department);
      }
    }
  }
}