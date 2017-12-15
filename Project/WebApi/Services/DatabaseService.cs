using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  // Imitates a database - stores a global list of users and the current ids for users and departments
  // Ids are always generated based on these numbers so that they are guaranteed to be unique
  public class DatabaseService
  {
    private static DatabaseService theInstance = null;

    private static long currentUserId;

    private static long currentDepartmentId;
    private static List<User> users = new List<User>();

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

    // Initialize Database service to have dummy data for the website to use
    public void InitializeDatabase()
    {
      // Ids that index with the creation of any department or user
      DatabaseService.Instance.CurrentDepartmentId = 1;
      DatabaseService.Instance.CurrentUserId = 1;

      // Users to log in with and manipulate
      Student student1 = new Student("BMarl", "password123", "bob.marley@gordon.edu", "Bob", "Marley");
      Scholar scholar1 = new Scholar("Bloggo_doggo", "yoyo@97", "joe.bloggs@gordon.edu", "Joe", "Bloggs");
      Institution inst1 = new Institution("GoCo", "livesworthleading1889", "gordon@gordon.edu", "Gordon College");

      // Add some departments to the institution
      inst1.AddDepartment(new Department("Biology", inst1));
      inst1.AddDepartment(new Department("History", inst1));
      inst1.AddDepartment(new Department("Philosophy", inst1));

      DatabaseService.Instance.Users.Add(student1);
      DatabaseService.Instance.Users.Add(scholar1);
      DatabaseService.Instance.Users.Add(inst1);
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