using WebApi.Models;
using System.Collections.Generic;

namespace WebApi.Services
{
  // Contains functions that have to do with getting, creating departments
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

    // Gets the current department id from the Database and indexes it by 1
    public long GenerateId()
    {
      long id = DatabaseService.Instance.CurrentDepartmentId;
      DatabaseService.Instance.CurrentDepartmentId = DatabaseService.Instance.CurrentDepartmentId + 1;
      return id;
    }

    // From within an institution object, find a particular department
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