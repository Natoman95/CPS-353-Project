namespace WebApi.Models
{
  public class Student : User
  {
    public Student(string userName, string password, string email) : base(userName, password, email) { }
  }
}