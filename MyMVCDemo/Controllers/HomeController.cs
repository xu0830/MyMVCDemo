using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using MyMVCDemo.Models;
using Newtonsoft.Json;
using RestSharp;
using ThreadError.Test;

namespace MyMVCDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(int traderId = 90)
        {
            //string AccountMoneyAsset = HttpHelper.SendPostRequest("http://localhost:6340/Handlers/Default/Personal/SecurityHandler.ashx/?method=ModifyUserPasswordApi", "LoginName=" + "2017011700" + "&newPwd=" + "123qwe", new CookieContainer(), HttpHelper.header);

            //string AccountMoneyAsset = HttpHelper.SendPostRequest("http://localhost:6340/Handlers/Default/Personal/SecurityHandler.ashx/?method=AdminModifyPasswordApi", "LoginName=" + "testName2" + "&newPwd=" + "123qwe", new CookieContainer(), HttpHelper.header);

            //CookieContainer cookie = HttpHelper.GetCookie("http://localhost:6340/Handlers/Default/Common/IdentityHandler.ashx/?method=Login", "name=xuesheng&isSave=false&pwd=" + JhEncrypt.EncryptString("111111"), HttpHelper.header);

            //string AccountMoneyAsset = HttpHelper.SendPostRequest("http://localhost:6340/Handlers/Default/AssetsQueryHandler.ashx/?method=GetAccountsSummaryConditional", "TraderID=" + 42 + "&MatchID=" + 18, cookie, HttpHelper.header);
            //ViewBag.Data = AccountMoneyAsset;
            //string data = HttpHelper.SendPostRequest("http://120.77.254.201:8085/Handlers/Default/User/UserManageHandler.ashx/?method=RegisterStudent", "LoginName=testName6&Password=123456&UserType=5", new CookieContainer(), HttpHelper.header);
            //ViewBag.Data = data;

            //string data = HttpHelper.SendPostRequest("http://120.77.254.201:8085/Handlers/Default/BankFinanceHandler.ashx/?method=GetBankFundsWithInitFundsConditional", "TraderID=" + traderId, new CookieContainer(), HttpHelper.header);
            //ViewBag.Data = data;

            return View();
        }

        public ActionResult GetImage()
        {
            var client = new RestClient("https://kyfw.12306.cn/passport/captcha/captcha-image64");
            var request = new RestRequest(Method.POST);
            request.AddHeader("Postman-Token", "328540e8-54d7-4061-9e1b-ec284dbd0352");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            IRestResponse response = client.Execute(request);

            CaptchaImage captchaImage = JsonConvert.DeserializeObject<CaptchaImage>(response.Content);

            WebConst.cookieContainer = response.Cookies;

            StringBuilder sb = new StringBuilder();

            sb.Append("data:image/jpg;base64,");

            sb.Append(captchaImage.Image);

            return Json(new {
                imgUrl = sb.ToString(),
                cookie = WebConst.cookieContainer
            });
        }
        

        public ActionResult CheckPoint(List<int> points)
        {
            StringBuilder sb = new StringBuilder();

            foreach (var point in points)
            {
                sb.Append(point + ",");
            }

            string answer = sb.ToString(0, sb.Length - 1);

            WebConst.Points = answer;

            var client = new RestClient("https://kyfw.12306.cn/passport/captcha/captcha-check?answer=" + answer + "&rand=sjran&login_site=E");
            var request = new RestRequest(Method.POST);
            request.AddHeader("Postman-Token", "2ff56327-d255-43da-8712-81a4dcdb5882");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");

            if (WebConst.cookieContainer.Count > 0)
            {
                foreach (var cookie in WebConst.cookieContainer)
                {
                    request.AddParameter(cookie.Name, cookie.Value, ParameterType.Cookie);
                }
            }

            IRestResponse response = client.Execute(request);

            var client_2 = new RestClient("https://kyfw.12306.cn/passport/web/login");
            var request_2 = new RestRequest(Method.POST);
            request.AddHeader("Postman-Token", "dfac308a-6a39-49a6-ad5d-4f85df9bf88d");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Content-Type", "application/json");
            request.AddParameter("undefined", "{\n\t\"username\":\"13428108149\",\n\t\"password\":\"xucanjie8888\",\n\t\"appid\":\"otn\",\n\t\"answer\":\"" + answer + "\"\n}", ParameterType.RequestBody);

            IRestResponse response_2 = client.Execute(request);

            return Json(new {
                Msg = response_2.Content
            });
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            //  登录状态
            CookieContainer cookie = HttpHelper.GetCookie("http://120.77.254.201:8085/Handlers/Default/Common/IdentityHandler.ashx/?method=Login", "name=2017011700&isSave=false&pwd=" + JhEncrypt.EncryptString("123qwe"), HttpHelper.header);

            //  获取参加中的大赛
            string data = HttpHelper.SendPostRequest("http://120.77.254.201:8085/Handlers/Default/Match/MatchQueryHandler.ashx/?method=GetMatchesGoingIn", "", cookie, HttpHelper.header);
            VEJsonModel<VEMatchModel> matchJsonModel = JsonConvert.DeserializeObject<VEJsonModel<VEMatchModel>>(data);


            List<VEMatchModel> VEMatches = matchJsonModel.rows;

            string createUserData = "";
            string AccountMoneyAsset = "";
            string BankAccountInfo = "";
            string spotFundsData = "";
            List<MatchInfoOutput> matchInfoOutputs = new List<MatchInfoOutput>();
            foreach (var item in VEMatches)
            {
                var matchId = item.MatchID;

                var traderId = item.TraderID;
                
                createUserData = HttpHelper.SendPostRequest("http://120.77.254.201:8085/Handlers/Default/User/UserManageHandler.ashx/?method=CreateUser", "matchID=" + item.MatchID + "&traderID=" + item.TraderID, cookie, HttpHelper.header);

                //  证券资产详情
                AccountMoneyAsset = HttpHelper.SendPostRequest("http://120.77.254.201:8085/Handlers/Default/AssetsQueryHandler.ashx/?method=GetAccountsSummaryConditional", "TraderID=" + traderId + "&MatchID=" + matchId, cookie, HttpHelper.header);

                spotFundsData = HttpHelper.SendPostRequest("http://120.77.254.201:8085/Handlers/Default/BankFinanceHandler.ashx/?method=GetSpotFundsConditional", "TraderID=" + traderId, new CookieContainer(), HttpHelper.header);

                //  银行账户详情
                BankAccountInfo = HttpHelper.SendPostRequest("http://120.77.254.201:8085/Handlers/Default/BankFinanceHandler.ashx/?method=GetBankFundsWithInitFundsConditional", "TraderID=" + traderId, new CookieContainer(), HttpHelper.header);

                VEJsonModel<SpotFundModel> spotFundModel = new VEJsonModel<SpotFundModel>();
                spotFundModel = JsonConvert.DeserializeObject<VEJsonModel<SpotFundModel>>(spotFundsData);

                VEJsonModel<AccountAssetModel> accountAssetModel = new VEJsonModel<AccountAssetModel>();
                accountAssetModel = JsonConvert.DeserializeObject<VEJsonModel<AccountAssetModel>>(AccountMoneyAsset);

                VEJsonModel<BankAccountModel> bankAccountModel = new VEJsonModel<BankAccountModel>();
                bankAccountModel = JsonConvert.DeserializeObject<VEJsonModel<BankAccountModel>>(BankAccountInfo);

                matchInfoOutputs.Add(new MatchInfoOutput
                {
                    MatchName = item.MatchName,
                    TotalAsset = accountAssetModel.rows[0].TotalAssets,
                    HoldMarketValue = accountAssetModel.rows[0].HoldMarketValue,
                    totalProfitAndLoss = accountAssetModel.rows[0].TotalProfitAndLoss,
                    FreeFund = spotFundModel.rows[0].FreeFund,
                    CurrentValue = bankAccountModel.rows[0].CurrentValue
                });
            }

            ViewBag.msg = AccountMoneyAsset;

            ViewBag.matchInfoOutputList = matchInfoOutputs;
            return View();
        }
        
        public JsonResult DataApi()
        {
            return Json(new {
                msg = "success"
            }, JsonRequestBehavior.AllowGet);
        }
    }

    public class VEJsonModel<T>
    {
        public int total { get; set; }
        public List<T> rows { get; set; }
    }

    public class VEMatchModel
    {
        public int MatchID{ get;  set; }
        public string MatchName { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public int TraderID { get; set; }
        public int TraderCount { get; set; }
        public int CurrentState { get; set; }
        public bool IsForex { get; set; }
        public string MatchType { get; set; }
        public string QuoteCenterName { get; set; }
        public string Command { get; set; }
        public string IsLogin { get; set; }
    }

    public class AccountAssetModel
    {
        public int AccountTypeID { get; set; }
        public string AccuntTypeName { get; set; }
        public string CurrencyName { get; set; }
        public decimal TotalAssets { get; set; }
        public decimal AssetsRatio { get; set; }
        public decimal MinMatchAssetsRatio { get; set; }
        public decimal MaxMatchAssetsRatio { get; set; }
        public decimal HoldMarketValue { get; set; }
        public decimal HoldRatio { get; set; }
        public decimal MinMatchHoldRatio { get; set; }
        public decimal MaxMatchHoldRatio { get; set; }
        public decimal TradeFee { get; set; }
        public decimal TotalProfitAndLoss { get; set; }
    }

    public class MatchInfoOutput
    {
        public string MatchName { get; set; }
        public decimal TotalAsset { get; set; }
        public decimal HoldMarketValue { get; set; }
        public decimal totalProfitAndLoss { get; set; }
        public decimal FreeFund { get; set; }
        public decimal CurrentValue { get; set; }
    }

    public class SpotFundModel
    {
        public string AccountName { get; set; }
        public string Currency { get; set; }
        public decimal FreeFund { get; set; }
        public decimal LockFund { get; set; }
    }

    public class BankAccountModel
    {
        public int Currency { get; set; }
        public decimal InitValue { get; set; }
        public decimal CurrentValue { get; set; }
    }

    public class JhEncrypt
    {
        /**************************************************字符串加密算法**************************************************/
        /// <summary>
        /// 字符串加密算法
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string EncryptString(string str)
        {
            if (string.IsNullOrEmpty(str))
            {
                return string.Empty;
            }
            char[] Base64Code = new char[]{'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','+','/','='};
            byte empty = (byte)0;
            System.Collections.ArrayList byteMessage = new System.Collections.ArrayList(System.Text.Encoding.Default.GetBytes(str));
            System.Text.StringBuilder outmessage;
            int messageLen = byteMessage.Count;
            int page = messageLen / 3;
            int use = 0;
            if ((use = messageLen % 3) > 0)
            {
                for (int i = 0; i < 3 - use; i++)
                    byteMessage.Add(empty);
                page++;
            }
            outmessage = new System.Text.StringBuilder(page * 4);
            for (int i = 0; i < page; i++)
            {
                byte[] instr = new byte[3];
                instr[0] = (byte)byteMessage[i * 3];
                instr[1] = (byte)byteMessage[i * 3 + 1];
                instr[2] = (byte)byteMessage[i * 3 + 2];
                int[] outstr = new int[4];
                outstr[0] = instr[0] >> 2;

                outstr[1] = ((instr[0] & 0x03) << 4) ^ (instr[1] >> 4);
                if (!instr[1].Equals(empty))
                    outstr[2] = ((instr[1] & 0x0f) << 2) ^ (instr[2] >> 6);
                else
                    outstr[2] = 64;
                if (!instr[2].Equals(empty))
                    outstr[3] = (instr[2] & 0x3f);
                else
                    outstr[3] = 64;
                outmessage.Append(Base64Code[outstr[0]]);
                outmessage.Append(Base64Code[outstr[1]]);
                outmessage.Append(Base64Code[outstr[2]]);
                outmessage.Append(Base64Code[outstr[3]]);
            }
            return outmessage.ToString();
        }
        /**************************************************字符串解密算法**************************************************/
        /// <summary>
        /// 字符串解密算法
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string DecryptString(string str)
        {
            if (string.IsNullOrEmpty(str))
            {
                return string.Empty;
            }
            if ((str.Length % 4) != 0)
            {
                throw new ArgumentException("不是正确的BASE64编码，请检查。", "str");
            }
            if (!System.Text.RegularExpressions.Regex.IsMatch(str, "^[A-Z0-9/+=]*$", System.Text.RegularExpressions.RegexOptions.IgnoreCase))
            {
                throw new ArgumentException("包含不正确的BASE64编码，请检查。", "str");
            }
            string Base64Code = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
            int page = str.Length / 4;
            System.Collections.ArrayList outMessage = new System.Collections.ArrayList(page * 3);
            char[] message = str.ToCharArray();
            for (int i = 0; i < page; i++)
            {
                byte[] instr = new byte[4];
                instr[0] = (byte)Base64Code.IndexOf(message[i * 4]);
                instr[1] = (byte)Base64Code.IndexOf(message[i * 4 + 1]);
                instr[2] = (byte)Base64Code.IndexOf(message[i * 4 + 2]);
                instr[3] = (byte)Base64Code.IndexOf(message[i * 4 + 3]);
                byte[] outstr = new byte[3];
                outstr[0] = (byte)((instr[0] << 2) ^ ((instr[1] & 0x30) >> 4));
                if (instr[2] != 64)
                {
                    outstr[1] = (byte)((instr[1] << 4) ^ ((instr[2] & 0x3c) >> 2));
                }
                else
                {
                    outstr[2] = 0;
                }
                if (instr[3] != 64)
                {
                    outstr[2] = (byte)((instr[2] << 6) ^ instr[3]);
                }
                else
                {
                    outstr[2] = 0;
                }
                outMessage.Add(outstr[0]);
                if (outstr[1] != 0)
                    outMessage.Add(outstr[1]);
                if (outstr[2] != 0)
                    outMessage.Add(outstr[2]);
            }
            byte[] outbyte = (byte[])outMessage.ToArray(Type.GetType("System.Byte"));
            return System.Text.Encoding.Default.GetString(outbyte);

        }

        /// <summary>
        /// Hex字节转换到字符串
        /// </summary>
        public static string HexBytesToString(byte[] input)
        {
            StringBuilder hexString = new StringBuilder(64);

            for (int i = 0; i < input.Length; i++)
            {
                hexString.Append(String.Format("{0:X2}", input[i]));
            }
            return hexString.ToString();
        }
        /// <summary>
        /// 字符串转化为Hex字节
        /// </summary>
        public static byte[] StringToHexBytes(string hex)
        {
            if (hex.Length == 0)
            {
                return new byte[] { 0 };
            }

            if (hex.Length % 2 == 1)
            {
                hex = "0" + hex;
            }

            byte[] result = new byte[hex.Length / 2];

            for (int i = 0; i < hex.Length / 2; i++)
            {
                result[i] = byte.Parse(hex.Substring(2 * i, 2), System.Globalization.NumberStyles.AllowHexSpecifier);
            }

            return result;
        }
    }

    public class RestHelper
    {
        public static IRestResponse SendGetRequest(string url, IList<RestResponseCookie> cookiesContainer, string data)
        {
            var client = new RestClient(url);
            var request = new RestRequest(Method.GET);

            request.AddHeader("Accept", "*/*");
            request.AddHeader("Accept-Encoding", "gzip, deflate, br");
            request.AddHeader("Accept-Language", "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2");
            request.AddHeader("Host", "kyfw.12306.cn");
            request.AddHeader("Referer", "https://kyfw.12306.cn/otn/resources/login.html");
            request.AddHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");
            if (cookiesContainer!= null && cookiesContainer.Count > 0)
            {
                foreach (var cookieItem in cookiesContainer)
                {
                    request.AddParameter(cookieItem.Name, cookieItem.Value, ParameterType.Cookie);
                }
            }
            request.AddParameter("undefined", data, ParameterType.RequestBody);


            return client.Execute(request);
        }

        public static IRestResponse SendPostRequest(string url, IList<RestResponseCookie> cookiesContanier, string data)
        {
            var client = new RestClient(url);
            var request = new RestRequest(Method.POST);

            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");


            if (cookiesContanier != null && cookiesContanier.Count > 0)
            {
                foreach (var cookieItem in cookiesContanier)
                {
                    request.AddParameter(cookieItem.Name, cookieItem.Value, ParameterType.Cookie);
                }
            }
            
            request.AddParameter("undefined", data, ParameterType.RequestBody);

            return client.Execute(request);

        }

    }



    public class CaptchaImage
    {
        public string Result_message { get; set; }
        public string Result_code { get; set; }
        public string Image { get; set; }
    }

}