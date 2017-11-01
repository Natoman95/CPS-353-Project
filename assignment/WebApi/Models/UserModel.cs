using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
  public class IUser
  {
    public IUser()
    {
      this.Id = GenerateId();
    }

    public IUser(string UserName, string Password)
    {
      this.Id = GenerateId();
      this.UserName = UserName;
      this.Password = Password;
    }

    public IUser(int Id, string UserName, string Password, string FirstName, string LastName, string Email)
    {
      this.Id = Id;
      this.UserName = UserName;
      this.Password = Password;
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.Email = Email;
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