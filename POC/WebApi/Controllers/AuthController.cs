using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
  [Route("[controller]")]
  public class AuthController : Controller
  {
    /* -------------------------------------- HTTP Requests -------------------------------------- */
    [HttpGet]
    public bool Get([FromQuery] string userName, string password)
    {

    }
  }
}