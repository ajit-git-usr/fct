using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace webAPI
{
    public static class Logger
    {
        public static bool Log(string msg)
        {
            string filePath = "C:\\temp";
            try
            {
                DirectoryInfo dInfo = new DirectoryInfo(filePath);
                if (!dInfo.Exists)
                    dInfo.Create();

                string name = "AIG_WebAPI_Log_";
                int day = DateTime.Now.Day;
                int month = DateTime.Now.Month;

                name += day <= 9 ? "0" + day.ToString() : day.ToString();
                name += month <= 9 ? "0" + month.ToString() : month.ToString();
                name += DateTime.Now.Year.ToString() + ".txt";

                if (filePath.EndsWith("\\"))
                    filePath += name;
                else
                    filePath += "\\" + name;

                //Format datetime.
                string errorDateTime = DateTime.Now.ToString("yyyy.MM.dd") + " @ " + DateTime.Now.ToString("HH:mm:ss");
                var fileInfo = new FileInfo(filePath);
                using (var streamWriter = File.AppendText(filePath))
                {
                    streamWriter.WriteLineAsync(errorDateTime + " : " + msg);
                }
            }catch(Exception)
            {  }
            return true;
        }
    }
}
