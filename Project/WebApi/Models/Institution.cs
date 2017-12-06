namespace WebApi.Models
{
  // A user that is an institution like a college
  public class Institution : User
  {
    public string Title { get; set; }

    public Institution(string userName, string password, string email, string title) : base(userName, password, email)
    {
      this.Title = title;
    }
  }
}