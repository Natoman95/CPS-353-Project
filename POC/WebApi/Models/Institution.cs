namespace WebApi.Models
{
  public class Institution : User
  {
    public Institution(string password, string email) : base(password, email) { }
  }
}