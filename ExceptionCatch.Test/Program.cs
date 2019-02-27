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
            try
            {
                ExceptionSource.ThrowException();
            }
            catch (Exception ex)
            {
                Console.WriteLine("catch exception");
            }
        }
    }
}
