using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using webAPI.Models;
using webAPI.repository.interfaces;

namespace webAPI.Controllers
{
    [EnableCors("AllowOrigin")] // need to add in every controller
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private IHostingEnvironment _env;
        NtResponse<List<User>> ntResponseObj;
        private readonly IUser _user;
        public LoginController(IHostingEnvironment env, IUser userObj)
        {
            _env = env;
            _user = userObj;
            ntResponseObj = new NtResponse<List<User>>();
            ntResponseObj.ResponseCode = 1111;
            ntResponseObj.Success = false;
            ntResponseObj.Message = "";

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="usrObj"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("Login")]
        public NtResponse<List<User>> Login([FromBody]User usrObj)
        {
            NtResponse<List<User>> ntResponse = new NtResponse<List<User>>();

            List<User> userData = _user.GetUserByEmail(usrObj.email);

            if (userData[0].email == usrObj.email && userData[0].password ==  usrObj.password)
            {
                var claimData = new[] { new Claim(ClaimTypes.Name, usrObj.email) };
                SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("92006b1f-5f1a-4fcd-95a7-be2882f803b0"));
                SigningCredentials signInCred = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
                JwtSecurityToken secureToken = new JwtSecurityToken(
                    issuer: "127.0.0.1:5253",
                    audience: "127.0.0.1:5253",
                    expires: DateTime.Now.AddHours(24),
                    claims: claimData,
                    signingCredentials: signInCred
                    );
                try
                {

                    var authToken = new JwtSecurityTokenHandler().WriteToken(secureToken);
                    ntResponseObj.ResponseCode = 5555;
                    ntResponseObj.Success = true;
                    ntResponseObj.Message = "Logged in succesfully.";
                    List<User> lstLogin = new List<User>();
                    User usr = new User();
                    lstLogin.Add(usr);
                    usr.tokenId = authToken;
                    ntResponseObj.Results = lstLogin;
                    //  string json = JsonConvert.SerializeObject(ntResponseObj);
                    //Logger.Log(ntResponseObj.Message);
                    //write string to file
                  //  var webRoot = _env.WebRootPath;
                  //  System.IO.File.WriteAllText(System.IO.Path.Combine(webRoot, "data/token.text"), authToken);
                    return ntResponseObj;
                }
                catch (Exception ex)
                {
                    //Console.WriteLine(ex);
                    Logger.Log("Exception in Login() : " + ex.ToString());
                    return ntResponseObj;
                }
            }
            else
            {
                ntResponseObj.ResponseCode = 2222;
                ntResponseObj.Success = true;
                ntResponseObj.Message = "Invalid credentials.";
                return ntResponseObj;

            }
        }
    }
        
}