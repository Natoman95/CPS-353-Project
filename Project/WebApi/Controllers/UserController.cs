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

    // Updates a user
    [HttpPut]
    public void Put([FromBody] JObject body)
    {
      // For finding the user to update
      long id = Convert.ToInt64((string)body.SelectToken("id"));

      // Find user
      User user = null;
      if (id >= 1)
      {
        user = UserService.Instance.FindUserById(id);
      }

      // Update the user's data, including names if an individual
      if (user != null)
      {
        string userName = (string)body.SelectToken("userName");
        string email = (string)body.SelectToken("email");

        if (userName != null)
        {
          user.UserName = userName;
        }
        if (email != null)
        {
          user.Email = email;
        }

        if (user is Individual)
        {
          Individual individual = (Individual)user;

          string firstName = (string)body.SelectToken("firstName");
          string lastName = (string)body.SelectToken("lastName");

          if (firstName != null)
          {
            individual.FirstName = firstName;
          }
          if (lastName != null)
          {
            individual.LastName = lastName;
          }
        }
      }
    }

    // Adds a department to a user's list of departments
    // Creates a new user
    [HttpPost]
    public User Post([FromBody] JObject body)
    {
      // To determine if the post is adding a department or creating a user
      string institution = (string)body.SelectToken("institution");

      User user = null;
      if (institution != null)
      {
        // For finding the user to update
        long id = Convert.ToInt64((string)body.SelectToken("id"));

        // For finding the institution and department to add
        string title = (string)body.SelectToken("title");
        user = addDepartmentToUser(id, institution, title);
      }
      else
      {
        // Get data required to make a new user
        string firstName = (string)body.SelectToken("firstName");
        string lastName = (string)body.SelectToken("lastName");
        string title = (string)body.SelectToken("title");
        string userName = (string)body.SelectToken("userName");
        string password = (string)body.SelectToken("password");
        string email = (string)body.SelectToken("email");
        string userType = (string)body.SelectToken("userType");

        user = createUser(firstName, lastName, title, userName, password, email, userType);
      }

      return user;
    }

    /* -------------------------------------- Helper Functions -------------------------------------- */

    // Adds an institution's department to a user
    private User addDepartmentToUser(long id, string institution, string title)
    {
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

      return user;
    }

    // Creates a new user
    private User createUser(string firstName, string lastName, string title, string userName,
                            string password, string email, string userType)
    {
      User user = null;

      switch (userType)
      {
        case "student":
          Student student = new Student(firstName, lastName, userName, password, email);
          user = student;
          UserService.Instance.AddUser(student);
          break;

        case "scholar":
          Scholar scholar = new Scholar(firstName, lastName, userName, password, email);
          user = scholar;
          UserService.Instance.AddUser(scholar);
          break;

        case "institution":
          Institution institution = new Institution(title, userName, password, email);
          user = institution;
          UserService.Instance.AddUser(institution);
          break;
      }

      return user;
    }
  }
}