namespace WebApi.Models
{
  public class Scholar : User
  {
    public Scholar(string password, string email) : base(password, email) { }
  }
}