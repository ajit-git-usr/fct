using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI.Models
{
    public class NtResponse<T>
    {
        public int ResponseCode { get; set; }
        public Boolean Success { get; set; }
        public string Message { get; set; }
        public T Results  { get; set; }
    }
}
