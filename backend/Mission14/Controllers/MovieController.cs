using Microsoft.AspNetCore.Mvc;
using Mission14.Models;
using System.Collections.Generic;
using System.Linq;

namespace Mission14.Controllers
{
    [ApiController]
    // remember the brackets around the controller lol
    [Route("[controller]")]
    public class MovieController : Controller
    {

        private JoelHiltonMovieCollectionContext context;
        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movies> Get()
        {
            var x = context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();

            return x;
        }

    }
}
