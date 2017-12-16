using Microsoft.AspNetCore.Mvc;
using WebApi.Services;
using WebApi.Models;
using System;
using System.Collections.Generic;

namespace WebApi.Controllers
{
  // Contains endpoints that deal with user retrieval, creation, deletion, updating
  [Route("[controller]")]
  public class TopicController : Controller
  {
    /* -------------------------------------- HTTP Requests -------------------------------------- */

    // Return a list of topics whose titles contain the query
    [HttpGet]
    public List<Topic> Get([FromQuery] string query)
    {
      return TopicService.Instance.SearchRootTopicsByTitle(query);
    }
  }
}