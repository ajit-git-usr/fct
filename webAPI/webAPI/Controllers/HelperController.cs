using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace webAPI.Controllers
{
    public static class HelperController 
    {
        public static string GetPath(string webRoot, string fileName, string folder)
        {
            // var webRoot = _env.ContentRootPath;
            string path = Path.Combine(webRoot, folder);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            return path + fileName;
        }

        public static Boolean DeleteFile(string webRoot, string fileName, string folder)
        {
            // var webRoot = _env.ContentRootPath;
            string path = Path.Combine(webRoot, folder);
            if (System.IO.File.Exists(path+ fileName))
            {
                System.IO.File.Delete(path + fileName);
                return true;
            }
            return false;
        }


    }
}
