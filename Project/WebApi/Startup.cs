using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Web.Http.Cors;
using WebApi.Services;
using WebApi.Models;

namespace WebApi
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;

      // Initialize Database service to have dummy data for the website to use

      // Ids that index with the creation of any department or user
      DatabaseService.Instance.CurrentDepartmentId = 1;
      DatabaseService.Instance.CurrentUserId = 1;

      // Users to log in with and manipulate
      Student student1 = new Student("BMarl", "password123", "bob.marley@gordon.edu", "Bob", "Marley");
      Scholar scholar1 = new Scholar("Bloggo_doggo", "yoyo@97", "joe.bloggs@gordon.edu", "Joe", "Bloggs");
      Institution inst1 = new Institution("GoCo", "livesworthleading1889", "gordon@gordon.edu", "Gordon College");

      // Add some departments to the institution
      inst1.AddDepartment(new Department("Biology", inst1));
      inst1.AddDepartment(new Department("History", inst1));
      inst1.AddDepartment(new Department("Philosophy", inst1));

      DatabaseService.Instance.Users.Add(student1);
      DatabaseService.Instance.Users.Add(scholar1);
      DatabaseService.Instance.Users.Add(inst1);
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc()
        // These options allow JSON objects that are self-referential to be serialized
        .AddJsonOptions(
          options => options.SerializerSettings.ReferenceLoopHandling =
          Newtonsoft.Json.ReferenceLoopHandling.Serialize
        )
        .AddJsonOptions(
          options => options.SerializerSettings.PreserveReferencesHandling =
            Newtonsoft.Json.PreserveReferencesHandling.Objects
        );
      services.AddCors();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors(
               options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
           );

      app.UseMvc();
    }
  }
}
