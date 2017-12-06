using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using WebApi.Models;
using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApi.Controllers
{
  [Route("[controller]")]
  public class UserController : Controller
  {
    /* -------------------------------------- HTTP Requests -------------------------------------- */
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

    [HttpPost]
    public void Post([FromBody] JObject body)
    {
      long id = Convert.ToInt64((string)body.SelectToken("id"));
      string institution = (string)body.SelectToken("institution");
      string title = (string)body.SelectToken("title");

      User user = null;
      if (id >= 1)
      {
        user = UserService.Instance.FindUserById(id);
      }

      Institution institutionObj = null;
      if (user != null)
      {
        institutionObj = UserService.Instance.FindInstitutionByTitle(institution);
      }

      Department department = null;
      if (institutionObj != null)
      {
        department = DepartmentService.Instance.FindDepartmentByTitle(institutionObj, title);
      }

      if (department != null)
      {
        user.AddDepartment(department);
      }
    }
  }
}