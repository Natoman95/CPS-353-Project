using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using WebApi.Models;

namespace WebApi.Controllers
{
  [Route("[controller]")]
  public class AuthController : Controller
  {
    /* -------------------------------------- HTTP Requests -------------------------------------- */
    [HttpGet]
    public bool Get([FromQuery] string userName, string password)
    {
      bool authSuccess = false;

      User user = UserService.Instance.FindUserByUserName(userName);
      if (user.Password == password)
      {
        authSuccess = true;
      }

      return authSuccess;
    }
  }
}