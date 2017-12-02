using System.Collections.Generic;

namespace WebApi.Models
{
  public class Topic
  {
    public long Id { get; set; }

    private List<Topic> subTopics = new List<Topic>();

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