namespace WebApi.Models
{
  public class Institution : User
  {
    public Institution(string userName, string password, string email) : base(userName, password, email) { }
  }
}