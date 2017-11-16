namespace WebApi.Models
{
  public class ResponseAcademicWork
  {
    public string title { get; set; }
    public string year { get; set; }
    public string author { get; set; }
    public long authorId { get; set; }

    public ResponseAcademicWork(string title, string year, string author, long authorId)
    {
      this.title = title;
      this.year = year;
      this.author = author;
      this.authorId = authorId;
    }
  }
}