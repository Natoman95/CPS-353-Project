using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  public class DatabaseService
  {
    private static DatabaseService theInstance = null;

    private DatabaseService()
    {
      CurrentId = 00000001;
      Users = new List<User>()
      {
        new Student("BMarl", "password123", "bob.marley@gordon.edu"),
        new Scholar("Bloggo_doggo", "yoyo@97", "joe.bloggs@gordon.edu"),
        new Institution("GoCo", "livesworthleading1889", "gordon@gordon.edu"),
      };
    }

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

    public long CurrentId { get; set; }

    public List<User> Users { get; set; }
  }
}