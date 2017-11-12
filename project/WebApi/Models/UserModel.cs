using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Reflection;

namespace WebApi.Models
{
  public class IUser
  {
    // Create a new user with only an id
    public IUser()
    {
      this.Id = GenerateId();
    }

    // Create a new user with only a username and password - generate id
    public IUser(string UserName, string Password)
    {
      this.Id = GenerateId();
      this.UserName = UserName;
      this.Password = Password;
    }

    // Create a new user by passing in all user attributes including id
    public IUser(int Id, string UserName, string Password, string FirstName, string LastName, string Email)
    {
      this.Id = Id;
      this.UserName = UserName;
      this.Password = Password;
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.Email = Email;
    }

    // Create a new user from a user object - add an id
    public IUser(IUser user)
    {
      if (user.Id == 0)
      {
        this.Id = GenerateId();
      }
      // I understand this can be done generically so we wouldn't have to update this constructor
      // every time we add an attribute to this class. But that would be a lot of extra work
      this.UserName = user.UserName;
      this.Password = user.Password;
      this.FirstName = user.FirstName;
      this.LastName = user.LastName;
      this.Email = user.Email;
    }

    private int GenerateId()
    {
      // Generate a number between 0 and 999
      return new Random().Next(0, 999);
    }

    public int Id { get; set; }
    public string UserName { get; set; }
    public string Password { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
  }
}