using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webAPI.Models;
using webAPI.repository.interfaces;

namespace webAPI.Controllers
{
    [EnableCors("AllowOrigin")]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProducts _product;
        public ProductController(IProducts product)
        {
            _product = product;
        }

        [HttpGet("GetProducts")]
        public NtResponse<List<Product>> GetProducts()
        {
            NtResponse<List<Product>> ntResponse = new NtResponse<List<Product>>();
            try
            {
                List<Product> items = _product.GetProducts();
                Logger.Log(items.ToString());
                ntResponse.ResponseCode = 5555;
                ntResponse.Success = true;
                ntResponse.Results = items;
                ntResponse.Message = "Products fetched sucessfully.";
                return ntResponse;
            }
            catch (Exception ex)
            {
                ntResponse.ResponseCode = 2222;
                ntResponse.Success = false;
                ntResponse.Message = ex.ToString();
                Logger.Log("Exception  : " + ex.ToString());
                return ntResponse;

            }
        }
    }
}
