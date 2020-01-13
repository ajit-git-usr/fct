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
    public class ProductDetails : IProducts
    {
        private readonly IDbConnection _dbConnection;

        public ProductDetails(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

  
        public List<Product> GetProducts()
        {
            string sQuery = "select id, name, price from products";
            List<Product> userData = (List<Product>)_dbConnection.Query<Product>(sQuery).ToList();
            return userData;
        }
    }
}
