using WebApi.Models;
using System.Collections.Generic;
using System;

namespace WebApi.Services
{
  // Performs actions having to do with topics such as searching
  // Topics are not created or deleted through this service
  // This service does generate unique ids
  public class TopicService
  {
    private static TopicService theInstance = null;

    private TopicService() { }

    public static TopicService Instance
    {
      get
      {
        if (theInstance == null)
        {
          theInstance = new TopicService();
        }
        return theInstance;
      }
    }

    // Gets the current user id from the Database and indexes it by 1
    public long GenerateId()
    {
      long id = DatabaseService.Instance.CurrentTopicId;
      DatabaseService.Instance.CurrentTopicId = DatabaseService.Instance.CurrentTopicId + 1;
      return id;
    }

    public List<Topic> SearchRootTopicsByTitle(string query)
    {
      List<Topic> matchingTopics = new List<Topic>();

      // Create list of institutions
      List<Institution> institutions = new List<Institution>();
      foreach (User user in DatabaseService.Instance.Users)
      {
        if (user.GetType() == typeof(Institution))
        {
          institutions.Add((Institution)user);
        }
      }

      // Create a list of departments
      List<Department> departments = new List<Department>();
      foreach (Institution inst in institutions)
      {
        departments.AddRange(inst.Departments);
      }

      // Create a list of root topics
      List<Topic> rootTopics = new List<Topic>();
      foreach (Department dept in departments)
      {
        rootTopics.AddRange(dept.Topics);
      }

      // Search the root topics for name matches
      foreach (Topic topic in rootTopics)
      {
        bool titleContainsQuery = topic.Title.IndexOf(query, StringComparison.OrdinalIgnoreCase) >= 0;
        if (titleContainsQuery)
        {
          matchingTopics.Add(topic);
        }
      }

      return matchingTopics;
    }
  }
}