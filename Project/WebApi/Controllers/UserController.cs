using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using WebApi.Models;
using System;

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

    [HttpPut]
    public User Put([FromQuery] string id, string institution, string title)
    {
      User user = null;
      if (id != null)
      {
        long idLong = Convert.ToInt64(id);
        user = UserService.Instance.FindUserById(idLong);
      }

      Institution institutionObj = null;
      if (user != null)
      {
        // Find institution by title
      }

      Department department = null;
      if (institutionObj != null)
      {
        // Find department within institution by title
      }

      if (department != null)
      {
        user.AddDepartment(department);
      }

      return user;
    }
  }
}