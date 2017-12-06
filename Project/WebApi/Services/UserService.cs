using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  // Performs actions having to do with users, such as creation, deletion, accessing
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

    // Gets the current user id from the Database and indexes it by 1
    public long GenerateId()
    {
      long id = DatabaseService.Instance.CurrentUserId;
      DatabaseService.Instance.CurrentUserId = DatabaseService.Instance.CurrentUserId + 1;
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

    // Since the database has just one list of all users, institutions have to be
    // filtered out from the rest
    public Institution FindInstitutionByTitle(string title)
    {
      Institution foundInst = null;

      foreach (User user in DatabaseService.Instance.Users)
      {
        if (user.GetType() == typeof(Institution))
        {
          Institution inst = (Institution)user;
          if (inst.Title == title)
          {
            foundInst = inst;
          }
        }
      }

      return foundInst;
    }
  }
}