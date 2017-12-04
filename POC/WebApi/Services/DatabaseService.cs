using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  public class DatabaseService
  {
    private static DatabaseService theInstance = null;

    private static long currentId = 00000001;

    private static List<User> users = new List<User>()
    {
      new Student("password123", "bob.marley@gordon.edu"),
      new Scholar("yoyo@97", "joe.bloggs@gordon.edu"),
      new Institution("livesworthleading1889", "gordon@gordon.edu"),
    };

    private DatabaseService() { }

    public static DatabaseService Instance
    {
      get
      {
        if (theInstance == null)
        {
          theInstance = new DatabaseService();
        }
        return theInstance;
      }
    }

    public long CurrentId
    {
      get
      {
        long id = DatabaseService.currentId;
        long currentId = DatabaseService.currentId + 1;
        return id;
      }
    }

    public void AddUser(User user)
    {
      users.Add(user);
    }

    public bool RemoveUser(long id)
    {
      User userToRemove = null;
      bool success = false;

      foreach (User user in users)
      {
        if (user.Id == id)
        {
          userToRemove = user;
          success = true;
        }
      }
      if (userToRemove != null)
      {
        users.Remove(userToRemove);
      }

      return success;
    }
  }
}