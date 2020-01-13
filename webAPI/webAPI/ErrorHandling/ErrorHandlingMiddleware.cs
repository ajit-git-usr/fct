using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using webAPI.Controllers;

namespace webAPI.ErrorHandling
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate next;
        private static IHostingEnvironment _env;
        static string fileName ;
        public ErrorHandlingMiddleware(RequestDelegate next, IHostingEnvironment env)
        {
            _env = env;
            this.next = next;
        }

        private async Task<string> FormatRequest(HttpRequest request)
        {
            var body = request.Body;
            // request.EnableRe
          var  injectedRequestStream = new MemoryStream();
            ///  var buffer = new byte[Convert.ToInt32(request.ContentLength)];
            //  await request.Body.ReadAsync(buffer, 0, buffer.Length);
            //   var bodyAsText = Encoding.UTF8.GetString(buffer) ;

            var requestLog =
    $"REQUEST HttpMethod: {request.Method}, Path: {request.Path}";

            using (var bodyReader = new StreamReader(request.Body))
            {
                var bodyAsText = bodyReader.ReadToEnd();
                if (string.IsNullOrWhiteSpace(bodyAsText) == false)
                {
                    requestLog += $", Body : {bodyAsText}";
                }
                var bytesToWrite = Encoding.UTF8.GetBytes(bodyAsText);
                injectedRequestStream.Write(bytesToWrite, 0, bytesToWrite.Length);
                injectedRequestStream.Seek(0, SeekOrigin.Begin);
                request.Body = injectedRequestStream;
            }
            return requestLog;
           // if (string.IsNullOrWhiteSpace(bodyAsText))
           //   {
           //       bodyAsText = "";
           //     }
           //  request.Body = body;
            // return $"{request.Scheme} {request.Host}{request.Path} {request.QueryString} {bodyAsText}";
        }

        private async Task<string> FormatResponse(HttpResponse response)
        {
            var text = "";

              response.Body.Seek(0, SeekOrigin.Begin);
             text =   await new StreamReader(response.Body).ReadToEndAsync();
               response.Body.Seek(0, SeekOrigin.Begin);

            return $"Response {text}";
        }

        public async Task Invoke(HttpContext context /* other dependencies */)
        {
           // TextWriter txtWr;
            try
            {
                var webRoot = _env.ContentRootPath;
                fileName = "log_";

                var path = HelperController.GetPath(webRoot, fileName + DateTime.Now.ToString("yyyyMMdd_hhmmss") + ".txt", "logs/");
       
                    File.AppendAllText(path, "--------------------------Request--------------------\n");
                    File.AppendAllText(path, await FormatRequest(context.Request));



                var originalBodyStream = context.Response.Body;
                using (var responseBody = new MemoryStream())
                {
                    context.Response.Body = responseBody;

                    await next(context);

                    File.AppendAllText(path, "--------------------------Response--------------------\n");
                    System.IO.File.AppendAllText(path, await FormatResponse(context.Response));
                    await responseBody.CopyToAsync(originalBodyStream);
                }
             

            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception ex)
        {

            var webRoot = _env.ContentRootPath;
            fileName = "error_";
             var path = HelperController.GetPath(webRoot, fileName + DateTime.Now.ToString("yyyyMMdd_hhmmss") + ".txt", "logs/");
            TextWriter txtWr = new StreamWriter(path, true);
            txtWr.WriteLine(JsonConvert.SerializeObject(ex).ToString());
            txtWr.Flush();
            txtWr.Close();
            return context.Response.WriteAsync(ex.Message);
        }
    }

}
