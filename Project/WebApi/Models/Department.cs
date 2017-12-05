using System.Collections.Generic;

namespace WebApi.Models
{
  public class Department
  {
    public string Title { get; set; }

    public long Id { get; set; }

    private List<Topic> topics = new List<Topic>();

    public List<Topic> GetTopics()
    {
      return topics;
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