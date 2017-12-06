namespace WebApi.Models
{
  // A user that is a student
  public class Student : Individual
  {
    public Student(string userName, string password, string email, string firstName, string lastName) : base(userName, password, email, firstName, lastName) { }
  }
}