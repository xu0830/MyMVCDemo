using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadError.Test
{
    public class ExceptionSource
    {
        public static void ThrowException()
        {
            throw new Exception();
        }
    }
}
