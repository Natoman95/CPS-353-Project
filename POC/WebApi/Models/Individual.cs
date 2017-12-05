namespace WebApi.Models
{
  public abstract class Individual : User
  {
    public string FirstName { get; set; }

    public string LastName { get; set; }
    public Individual(string userName, string password, string email, string firstName, string lastName) : base(userName, password, email)
    {
      this.FirstName = firstName;
      this.LastName = lastName;
    }
  }
}