using System.Collections.Generic;
using WebApi.Services;

namespace WebApi.Models
{
  public abstract class User
  {
    public string UserName { get; set; }
    public string Password { get; set; }

    public string Email { get; set; }

    public long Id { get; set; }

    private List<Department> departments = new List<Department>();

    public User(string userName, string password, string email)
    {
      this.UserName = userName;
      this.Password = password;
      this.Email = email;
      this.Departments = new List<Department>();
      this.Id = UserService.Instance.GenerateId();
    }

    public List<Department> Departments
    {
      get
      {
        return departments;
      }
      set
      {
        departments = value;
      }
    }

    public Department FindDepartment(long id)
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
      Department departToRemove = FindDepartment(id);
      bool success = false;

      if (departToRemove != null)
      {
        departments.Remove(departToRemove);
        success = true;
      }

      return success;
    }
  }
}