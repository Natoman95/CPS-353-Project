using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  public class DatabaseService
  {
    private static DatabaseService theInstance = null;

    private static long currentUserId = 1;

    private static long currentDepartmentId = 1;
    private static List<User> users = new List<User>()
    {
      new Student("BMarl", "password123", "bob.marley@gordon.edu", "Bob", "Marley"),
      new Scholar("Bloggo_doggo", "yoyo@97", "joe.bloggs@gordon.edu", "Joe", "Bloggs"),
      new Institution("GoCo", "livesworthleading1889", "gordon@gordon.edu", "Gordon College")
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

    public long CurrentUserId
    {
      get
      {
        return currentUserId;
      }
      set
      {
        currentUserId = value;
      }
    }

    public long CurrentDepartmentId
    {
      get
      {
        return currentDepartmentId;
      }
      set
      {
        currentDepartmentId = value;
      }
    }

    public List<User> Users
    {
      get
      {
        return users;
      }
      set
      {
        users = value;
      }
    }
  }
}