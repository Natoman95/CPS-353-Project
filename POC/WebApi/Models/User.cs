using System.Collections.Generic;
using WebApi.Services;

namespace WebApi.Models
{
  public abstract class User
  {
    public string Password { get; set; }

    public string Email { get; set; }

    public long Id { get; set; }

    private List<Department> departments = new List<Department>();

    public User(string password, string email)
    {
      this.Password = password;
      this.Email = email;
      this.Id = UserService.GetInstance().GenerateId();
    }

    public List<Department> GetDepartments()
    {
      return departments;
    }

    public Department GetDepartment(long id)
    {
      Department foundDepartment = null;

      foreach (Department department in departments)
      {
        if (department.Id == id)
        {
          foundDepartment = department;
          break;
        }
      }

      return foundDepartment;
    }

    public void AddDepartment(Department department)
    {
      departments.Add(department);
    }

    public bool RemoveDepartment(long id)
    {
      Department departToRemove = null;
      bool success = false;

      foreach (Department department in departments)
      {
        if (department.Id == id)
        {
          departToRemove = department;
          break;
        }
      }
      if (departToRemove != null)
      {
        departments.Remove(departToRemove);
        success = true;
      }

      return success;
    }
  }
}