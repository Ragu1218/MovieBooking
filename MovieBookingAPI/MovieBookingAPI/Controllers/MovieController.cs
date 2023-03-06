using System;
using Microsoft.AspNetCore.Authorization;
using MovieBookingAPI.Modals;
using MovieBookingAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Cors;

namespace MovieBookingAPI.Controllers
{
	[ApiController]
	[Route("Movie")]
    [EnableCors("Policy")]

    public class MovieController:ControllerBase
	{
		private readonly IMovie movie;

		public MovieController(IMovie _movie)
		{
			movie = _movie;
		}

		[HttpGet("GetAllMovies")]
        //[Authorize(Roles = "Administrator")]
		public ActionResult<List<Movie>> getAllMovies()
		{
			try
			{
                if (movie.getMovies().Capacity==0) return NotFound("Movies Currently Unavailable");
                return Ok(movie.getMovies());
            }
			catch(Exception ex) 
			{
				Console.WriteLine(ex.Message);
				return StatusCode(500);
			}
		}
		[HttpGet("GetMovieByName/{movieName}")]
		public ActionResult<Movie> getMovie(string movieName)
		{
			try
			{
                if (!movie.containsMovie(movieName)) return NotFound("Enter a existing movie name");
                //         var m = movie.getMovie(movieName);
                //if (m == null)
                //	return NotFound();
                return Ok(movie.getMovie(movieName));
            }
			catch
			{
				return StatusCode(500);
			}

		}


		[Authorize]
		[HttpPost("AddNewMovie")]
        [Authorize(Roles = "Administrator")]
		public IActionResult post([FromBody]Movie film)
		{
            if (movie.containsMovie(film.Name)) return BadRequest("Already existing movie");
            movie.addMovie(film);
			return Ok("Movie Successfully added");
		}


		[HttpPut("UpdateMovie")]
        [Authorize(Roles = "Administrator")]
		public IActionResult put([FromBody]Movie film)
		{
			try
			{
                if (!movie.containsMovieById(film.Id)) return NotFound("Enter a existing movie");
                movie.updateMovie(film);
                return Ok("Updated Successfully");
            }
			catch
			{
                return StatusCode(500);
            }
            
		}

		[HttpDelete("DeleteMovie/{id}")]
        [Authorize(Roles = "Administrator")]
		public IActionResult delete(string id)
		{
			try
			{
				if (!movie.containsMovieById(id)) return NotFound("Enter a correct existing name"); 
					movie.deleteMovie(id);
                return Ok("Movie deleted successfully");
            }
			catch
			{
				return StatusCode(500);
			}
        }

		private User GetCurrentUser()
		{
			var identity = HttpContext.User.Identity as ClaimsIdentity;

			if (identity != null)
			{
				var userClaims = identity.Claims;
				return new User
				{
					userName = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
					role = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value
				};
			}
			return null;
		}
	}
}

