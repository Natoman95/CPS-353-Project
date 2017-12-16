using System.Collections.Generic;
using WebApi.Services;

namespace WebApi.Models
{
  // A wiki topic that belongs to a department - may also be a subtopic of another topic
  public class Topic
  {
    public long Id { get; set; }

    public bool IsRootTopic { get; set; }

    public Topic SuperTopic { get; set; }

    public string Title { get; set; }

    public string Body { get; set; }

    public Department Department { get; set; }

    private List<Topic> subTopics = new List<Topic>();

    public Topic(string title, string body, Department department, bool isRootTopic, Topic superTopic)
    {
      this.Title = title;
      this.Body = body;
      this.Department = department;
      this.IsRootTopic = isRootTopic;
      this.SuperTopic = superTopic;
      this.Id = TopicService.Instance.GenerateId();
    }

    public List<Topic> GetSubTopics()
    {
      return subTopics;
    }

    public Topic GetSubTopic(long id)
    {
      Topic foundSubTopic = null;

      foreach (Topic subTopic in subTopics)
      {
        if (subTopic.Id == id)
        {
          foundSubTopic = subTopic;
          break;
        }
      }

      return foundSubTopic;
    }

    public void AddSubTopic(Topic subTopic)
    {
      subTopics.Add(subTopic);
    }

    public bool RemoveTopic(long id)
    {
      Topic subTopicToRemove = null;
      bool success = false;

      foreach (Topic subTopic in subTopics)
      {
        if (subTopic.Id == id)
        {
          subTopicToRemove = subTopic;
          break;
        }
      }
      if (subTopicToRemove != null)
      {
        subTopics.Remove(subTopicToRemove);
        success = true;
      }

      return success;
    }
  }
}