using System.Collections.Generic;
using WebApi.Services;

namespace WebApi.Models
{
  public class Department
  {
    public string Title { get; set; }

    public Institution Institution { get; set; }

    public long Id { get; set; }

    private List<Topic> topics = new List<Topic>();

    public Department(string title, Institution institution)
    {
      this.Title = title;
      this.Institution = institution;
      this.Id = DepartmentService.Instance.GenerateId();
    }

    public List<Topic> Topics
    {
      get
      {
        return topics;
      }
    }

    public Topic FindTopic(long id)
    {
      Topic foundTopic = null;

      foreach (Topic topic in topics)
      {
        if (topic.Id == id)
        {
          foundTopic = topic;
          break;
        }
      }

      return foundTopic;
    }

    public void AddTopic(Topic topic)
    {
      topics.Add(topic);
    }

    public bool RemoveTopic(long id)
    {
      Topic topicToRemove = FindTopic(id);
      bool success = false;

      if (topicToRemove != null)
      {
        topics.Remove(topicToRemove);
        success = true;
      }

      return success;
    }
  }
}