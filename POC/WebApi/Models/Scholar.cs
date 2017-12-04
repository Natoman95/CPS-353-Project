namespace WebApi.Models
{
  public class Scholar : User
  {
    public Scholar(string userName, string password, string email) : base(userName, password, email) { }
  }
}