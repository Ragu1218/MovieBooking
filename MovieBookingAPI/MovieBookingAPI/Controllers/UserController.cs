using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MovieBookingAPI.Modals;
using MovieBookingAPI.Services;
namespace MovieBookingAPI.Controllers
{
	[ApiController]
	[Route("User")]
    [EnableCors("Policy")]

    public class UserController:ControllerBase
	{
		private readonly IUser userServices;

		public UserController(IUser _user) 
		{
            userServices = _user;
		}

		[HttpPost("/SignUp")]
		public IActionResult signUp([FromBody]User user)
		{
            userServices.addUser(user);
			return Ok("Added");
		}

		//[HttpPost("/UserLogin")]
		//public IActionResult login([FromBody] User user)
		//{
		//	try
		//	{
		//		if (!userServices.verifyUser(user)) return NotFound("Incorrect login credentials");
		//		return Ok("Logged in");
		//	}
		//	catch
		//	{
		//		return StatusCode(500);
		//	}
		//}

        //private User GetCurrentUser()
        //{
        //    var identity = HttpContext.User.Identity as ClaimsIdentity;

        //    if (identity != null)
        //    {
        //        var userClaims = identity.Claims;

        //        return new User
        //        {
        //            userName = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
        //            role = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value
        //        };
        //    }
        //    return null;
        //}
    }
}