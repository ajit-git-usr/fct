using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using webAPI.Models;
using Dapper;


using System.Threading.Tasks;
using webAPI.repository.interfaces;

namespace webAPI.repository
{
    public class UserDetails: IUser
    {
        private readonly IDbConnection _dbConnection;

        public UserDetails(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public List<User> GetUserByEmail(string email)
        {
            string sQuery = "select id, name, password, email from customers where email =" + email.ToString();
            List<User> userData = (List<User>)_dbConnection.Query<User>(sQuery).ToList();
            return userData;
        }
    }
}
