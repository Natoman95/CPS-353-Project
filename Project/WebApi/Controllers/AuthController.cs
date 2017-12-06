using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using WebApi.Models;

namespace WebApi.Controllers
{
  // Contains endpoints that deal with user authentication
  [Route("[controller]")]
  public class AuthController : Controller
  {
    /* -------------------------------------- HTTP Requests -------------------------------------- */

    // Returns a user if the given userName and password combination are found
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