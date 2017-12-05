using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  public class UserService
  {
    private static UserService theInstance = null;

    private UserService() { }

    public static UserService Instance
    {
      get
      {
        if (theInstance == null)
        {
          theInstance = new UserService();
        }
        return theInstance;
      }
    }

    public long GenerateId()
    {
      long id = DatabaseService.Instance.CurrentId;
      DatabaseService.Instance.CurrentId = DatabaseService.Instance.CurrentId + 1;
      return id;
    }

    public void AddUser(User user)
    {
      DatabaseService.Instance.Users.Add(user);
    }

    public bool RemoveUser(long id)
    {
      User userToRemove = FindUserById(id);
      bool success = false;

      if (userToRemove != null)
      {
        DatabaseService.Instance.Users.Remove(userToRemove);
        success = true;
      }

      return success;
    }

    public User FindUserById(long id)
    {
      User foundUser = null;

      foreach (User user in DatabaseService.Instance.Users)
      {
        if (user.Id == id)
        {
          foundUser = user;
        }
      }

      return foundUser;
    }

    public User FindUserByUserName(string userName)
    {
      User foundUser = null;

      foreach (User user in DatabaseService.Instance.Users)
      {
        if (user.UserName == userName)
        {
          foundUser = user;
        }
      }

      return foundUser;
    }
  }
}