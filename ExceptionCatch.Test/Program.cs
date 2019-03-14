using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadError.Test;

namespace ExceptionCatch.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            String content = "'{content}};\n";
            Console.WriteLine(content.Substring(content.IndexOf("'")+1, content.LastIndexOf("}")-content.IndexOf("'")));
        }
    }
}
