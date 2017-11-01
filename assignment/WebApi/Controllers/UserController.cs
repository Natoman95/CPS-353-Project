using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
  [Route("api/[controller]")]
  public class UserController : Controller
  {
    List<IUser> USERS = new List<IUser>
    {
      new IUser(123, "alice", "alice", "Alice", "Wonder", "alice.wonder@gordon.edu"),
      new IUser(234, "bob", "bob", "Bob", "Marley", "bob.marley@gordon.edu"),
      new IUser(345, "charly", "charly", "Charly", "Garcia", "charly.garcia@gordon.edu"),
      new IUser(456, "jannunzi", "jannunzi", "Jose", "Annunzi", "jose.annunzi@gordon.edu")
    };

    // GET api/user
    [HttpGet]
    public List<IUser> Get()
    {
      return USERS;
    }

    // POST api/user
    [HttpPost]
    public string Post([FromBody]IUser user)
    {
      if (user != null)
      {
        USERS.Add(user);
        return "success";
      }
      else
      {
        return "failure";
      }
    }

    // GET api/user/?username=username
    // Returns user that matches username
    [HttpGet]
    public IUser FindUserByUsername(string username)
    {
      IUser user = null;
      if (username != null)
      {
        for (int i = 0; i <= USERS.Count; i++)
        {
          if (USERS[i].UserName == username)
          {
            user = USERS[i];
          }
        }
      }
      return user;
    }

    // // GET api/values/5
    // [HttpGet("{id}")]
    // public string Get(int id)
    // {
    //     return "value";
    // }

    // // POST api/values
    // [HttpPost]
    // public void Post([FromBody]string value)
    // {
    // }

    // // PUT api/values/5
    // [HttpPut("{id}")]
    // public void Put(int id, [FromBody]string value)
    // {
    // }

    // // DELETE api/values/5
    // [HttpDelete("{id}")]
    // public void Delete(int id)
    // {
    // }
  }
}
