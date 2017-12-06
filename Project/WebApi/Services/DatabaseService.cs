using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
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