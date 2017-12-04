namespace WebApi.Models
{
  public class Student : User
  {
    public Student(string password, string email) : base(password, email) { }
  }
}