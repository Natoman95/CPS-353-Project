namespace WebApi.Models
{
  public class Scholar : Individual
  {
    public Scholar(string userName, string password, string email, string firstName, string lastName) : base(userName, password, email, firstName, lastName) { }
  }
}