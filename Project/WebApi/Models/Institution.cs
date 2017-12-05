namespace WebApi.Models
{
  public class Institution : User
  {
    string Title { get; set; }

    public Institution(string userName, string password, string email, string title) : base(userName, password, email)
    {
      this.Title = title
    }
  }
}