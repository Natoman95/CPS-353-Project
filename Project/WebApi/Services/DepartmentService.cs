using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  public class DepartmentService
  {
    private static DepartmentService theInstance = null;

    private DepartmentService() { }

    public static DepartmentService Instance
    {
      get
      {
        if (theInstance == null)
        {
          theInstance = new DepartmentService();
        }
        return theInstance;
      }
    }

    public long GenerateId()
    {
      long id = DatabaseService.Instance.CurrentDepartmentId;
      DatabaseService.Instance.CurrentDepartmentId = DatabaseService.Instance.CurrentDepartmentId + 1;
      return id;
    }

    public Department FindDepartmentByTitle(Institution inst, string title)
    {
      Department foundDep = null;

      foreach (Department dep in inst.Departments)
      {
        if (dep.Title == title)
        {
          foundDep = dep;
        }
      }

      return foundDep;
    }
  }
}