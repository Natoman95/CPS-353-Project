using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  public class UserService
  {
    private static UserService theInstance = null;

    private DatabaseService DBService = null;

    private UserService()
    {
      DBService = DatabaseService.Instance;
    }

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

    public void AddUser(User user)
    {
      DBService.AddUser(user);
    }

    public bool RemoveUser(long id)
    {
      return DBService.RemoveUser(id);
    }

    public long GenerateId()
    {
      return DBService.CurrentId;
    }
  }
}