using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
//using System.Security.Claims.ClaimTypes;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MovieBookingAPI.Modals;
using MovieBookingAPI.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MovieBookingAPI.Controllers
{
    [ApiController]
    [Route("Login")]
    [EnableCors("Policy")]
    public class LoginController : Controller
    {
        private IConfiguration config;
        private IUser user;

        public LoginController(IConfiguration _config,IUser _user)
        {
            config = _config;
            user = _user;
        }

        //[AllowAnonymous]
        [HttpPost]
        public ActionResult Login([FromBody]UserLogin userLogin)
        {
            var user = Authenticate(userLogin);
            if (user != null)
            {
                var token = Generate(user);
                return Ok(token);
            }
            return NotFound("User not Found");
        }

        private string Generate(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            //Console.WriteLine(user.role);
            //Console.WriteLine(user.role);
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.userName),
                new Claim(ClaimTypes.Role, user.role.ToString())
            };

            var token = new JwtSecurityToken(config["Jwt:Issuer"],
              config["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddMinutes(15),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private User Authenticate(UserLogin userLogin)
        {
            var currentUser = user.findByName(userLogin.userName);
            if (currentUser != null && currentUser.password == userLogin.password) return currentUser;
            return null;
        }
    }
}

