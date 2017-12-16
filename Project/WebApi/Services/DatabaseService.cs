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
      DatabaseService.Instance.CurrentTopicId = 1;

      // Users to log in with and manipulate
      Student bobMarley = new Student("BMarl", "password123", "bob.marley@gordon.edu", "Bob", "Marley");
      Scholar joeBloggs = new Scholar("Bloggo_doggo", "yoyo@97", "joe.bloggs@gordon.edu", "Joe", "Bloggs");
      Institution gordon = new Institution("GoCo", "livesworthleading1889", "gordon@gordon.edu", "Gordon College");
      Institution oxford = new Institution("OxUn", "dominusillumintiamea", "oxford@ox.ac.uk", "Oxford University");

      // Add some departments to Gordon
      Department bioGordon = new Department("Biology", gordon);
      Department histGordon = new Department("History", gordon);
      Department philGordon = new Department("Philosophy", gordon);

      gordon.AddDepartment(bioGordon);
      gordon.AddDepartment(histGordon);
      gordon.AddDepartment(philGordon);

      // Add some wiki topics to the departments
      Topic zooologyGordon = new Topic("Zoology", "The study of animals, including classification, physiology, development, and behavior", bioGordon, true, null);
      Topic botanyGordon = new Topic("Botany", "The study of plants", bioGordon, true, null);
      Topic microbiologyGordon = new Topic("Microbiology", "The study of microscopic organisms", bioGordon, true, null);

      bioGordon.AddTopic(zooologyGordon);
      bioGordon.AddTopic(botanyGordon);
      bioGordon.AddTopic(microbiologyGordon);
      // Add wiki subtopics
      zooologyGordon.AddSubTopic(new Topic("Mammology", "The study of mammals", bioGordon, false, zooologyGordon));
      zooologyGordon.AddSubTopic(new Topic("Ethology", "The study of animal behavior", bioGordon, false, zooologyGordon));
      zooologyGordon.AddSubTopic(new Topic("Ichthyology", "The study of fish", bioGordon, false, zooologyGordon));

      // Add some departments to Oxford
      Department bioOxford = new Department("Biology", oxford);
      Department histOxford = new Department("History", oxford);
      Department philOxford = new Department("Philosophy", oxford);

      oxford.AddDepartment(bioOxford);
      oxford.AddDepartment(histOxford);
      oxford.AddDepartment(philOxford);

      // Add some wiki topics to the departments
      Topic epistemologyOxford = new Topic("Epistemology", "The study of knowledge", philOxford, true, null);
      Topic metaphysicsOxford = new Topic("Metaphysics", "The study of being", philOxford, true, null);
      Topic philTheoOxford = new Topic("Philosophical Theology", "The philosophical study of theological topics", philOxford, true, null);

      philOxford.AddTopic(epistemologyOxford);
      philOxford.AddTopic(metaphysicsOxford);
      philOxford.AddTopic(philTheoOxford);
      // Add wiki subtopics
      philTheoOxford.AddSubTopic(new Topic("Faith", "The study of religious belief", philOxford, false, philTheoOxford));
      philTheoOxford.AddSubTopic(new Topic("The Trinity", "The study of the Christian Doctrine of the Trinity", philOxford, false, philTheoOxford));
      philTheoOxford.AddSubTopic(new Topic("The Incarnation", "The study of the Christian Doctrine of God made man", philOxford, false, philTheoOxford));

      DatabaseService.Instance.Users.Add(bobMarley);
      DatabaseService.Instance.Users.Add(joeBloggs);
      DatabaseService.Instance.Users.Add(gordon);
      DatabaseService.Instance.Users.Add(oxford);
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

    public long CurrentTopicId
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