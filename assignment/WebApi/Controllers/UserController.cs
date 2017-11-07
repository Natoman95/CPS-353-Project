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
    public static List<IUser> USERS = new List<IUser>
    {
      new IUser(123, "alice", "alice", "Alice", "Wonder", "alice.wonder@gordon.edu"),
      new IUser(234, "bob", "bob", "Bob", "Marley", "bob.marley@gordon.edu"),
      new IUser(345, "charly", "charly", "Charly", "Garcia", "charly.garcia@gordon.edu"),
      new IUser(456, "jannunzi", "jannunzi", "Jose", "Annunzi", "jose.annunzi@gordon.edu")
    };

    public const string SUCCESS = "success";
    public const string FAILURE = "failure";

    /* -------------------------------------- HTTP Requests -------------------------------------- */

    // GET api/user
    // GET api/user/?username=username
    // GET api/user/?username=username&password=password
    [HttpGet]
    public List<IUser> Get([FromQuery]string username, [FromQuery]string password)
    {
      List<IUser> foundUsers = new List<IUser>();
      // no username or password
      if (username == null)
      {
        foundUsers = USERS;
      }
      // username but no password
      else if (username != null && password == null)
      {
        IUser user = FindUserByUsername(username);
        if (user != null)
        {
          foundUsers.Add(user);
        }
        return foundUsers;
      }
      // username and password
      else if (username != null && password != null)
      {
        IUser user = FindUserByCredentials(username, password);
        if (user != null)
        {
          foundUsers.Add(user);
        }
        return foundUsers;
      }
      return foundUsers;
    }

    // GET api/user/{id}
    [HttpGet("{id}")]
    public IUser Get(int id)
    {
      return FindUserById(id);
    }

    // POST api/user
    [HttpPost]
    public IUser Post([FromBody]IUser user)
    {
      IUser userWithId = null;
      if (user != null)
      {
        // This user will not come in with id information. This needs to be added
        userWithId = new IUser(user);
        USERS.Add(userWithId);
      }
      return userWithId;
    }

    // PUT api/user/{id}
    [HttpPut("{id}")]
    public string Put([FromBody]IUser user, int id)
    {
      string response = FAILURE;
      if (user != null)
      {
        if (DeleteUserById(id))
        {
          USERS.Add(user);
          response = SUCCESS;
        }
      }
      return response;
    }

    // DELETE api/user/{id}
    [HttpDelete("{id}")]
    public string Put(int id)
    {
      string response = FAILURE;
      if (DeleteUserById(id))
      {
        response = SUCCESS;
      }
      return response;
    }

    /* -------------------------------------- Helper Methods -------------------------------------- */

    // Deletes user that matches id
    public bool DeleteUserById(int id)
    {
      IUser userToDelete = null;
      bool success = false;
      foreach (IUser user in USERS)
      {
        if (user.Id == id)
        {
          userToDelete = user;
          break;
        }
      }
      if (userToDelete != null)
      {
        USERS.Remove(userToDelete);
        success = true;
      }
      return success;
    }

    // Returns user that matches id
    public IUser FindUserById(int id)
    {
      foreach (IUser user in USERS)
      {
        if (user.Id == id)
        {
          return user;
        }
      }
      return null;
    }

    // Returns user that matches username
    public IUser FindUserByUsername(string userName)
    {
      foreach (IUser user in USERS)
      {
        if (user.UserName == userName)
        {
          return user;
        }
      }
      return null;
    }

    // Returns user that matches username and password
    public IUser FindUserByCredentials(string userName, string password)
    {
      foreach (IUser user in USERS)
      {
        if (user.UserName == userName && user.Password == password)
        {
          return user;
        }
      }
      return null;
    }
  }
}
