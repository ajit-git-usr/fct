using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webAPI.Models;

namespace webAPI.repository.interfaces
{
   public interface IProducts
    {
         List<Product> GetProducts();
    }
}
