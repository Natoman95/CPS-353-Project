namespace WebApi.Models
{
  // This class has the prefix "Api" because it simply is a container for data returned about
  // academic works from Microsoft's API.
  public class ApiAcademicWork
  {
    public string title { get; set; }
    public string year { get; set; }
    public string author { get; set; }
    public long authorId { get; set; }

    public ApiAcademicWork(string title, string year, string author, long authorId)
    {
      this.title = title;
      this.year = year;
      this.author = author;
      this.authorId = authorId;
    }

    public ApiAcademicWork()
    {

    }
  }
}