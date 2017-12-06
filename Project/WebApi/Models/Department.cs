using System.Collections.Generic;
using WebApi.Services;

namespace WebApi.Models
{
  // A department for an institution (biology, chemistry, etc.)
  public class Department
  {
    public string Title { get; set; }

    // The institution the department belongs to
    public Institution Institution { get; set; }

    public long Id { get; set; }

    // Wiki topics that fall within the department's perview
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