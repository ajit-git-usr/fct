using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class User
    {
        public string name { get; set; }
        public string password { get; set; }
        public int id { get; set; }
        public string tokenId { get; set; }
        public string email { get; set; }
    }
}
