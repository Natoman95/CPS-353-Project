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
    public User Get([FromQuery] string userName, string password)
    {
      User user = UserService.Instance.FindUserByUserName(userName);
      if (user != null && user.Password == password)
      {
        return user;
      }
      return null;
    }
  }
}