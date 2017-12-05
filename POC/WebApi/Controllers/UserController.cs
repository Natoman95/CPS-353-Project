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
      long idLong = Convert.ToInt64(id);
      User user = UserService.Instance.FindUserById(idLong);

      return user;
    }
  }
}