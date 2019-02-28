using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyMVCDemo.Models
{
    public class WebConst
    {
        static WebConst()
        {
            cookieContainer = new List<RestResponseCookie>();
        }

        public static IList<RestResponseCookie> cookieContainer;
        public static string Points;
    }
}