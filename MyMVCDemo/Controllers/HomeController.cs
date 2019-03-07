﻿using System;
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

            var client = new RestClient("https://kyfw.12306.cn/otn/leftTicket/queryX?leftTicketDTO.train_date=2019-03-03&leftTicketDTO.from_station=PEQ&leftTicketDTO.to_station=IOQ&purpose_codes=ADULT");
            var request = new RestRequest(Method.GET);
            request.AddHeader("Postman-Token", "fbcf73a7-c5b5-459c-8a1c-c324b4400e40");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            IRestResponse response = client.Execute(request);

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
            StringBuilder sb_2 = new StringBuilder();

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
            var loginAnswer = answer.Replace(",", "%2C");
            var client_2 = new RestClient("https://kyfw.12306.cn/passport/web/login");
            var request_2 = new RestRequest(Method.POST);
            request_2.AddHeader("cache-control", "no-cache");
            //  request_2.AddHeader("Host", "kyfw.12306.cn");
            //  request_2.AddHeader("Origin", "https://kyfw.12306.cn");
            //  request_2.AddHeader("referer", "https://kyfw.12306.cn/otn/resources/login.html");
            request_2.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            //  request_2.AddHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36");
            request_2.AddParameter("application/x-www-form-urlencoded", "username=13428108149&password=xucanjie88&answer="+ loginAnswer + "&appid=otn&undefined=", ParameterType.RequestBody);

            if (WebConst.cookieContainer.Count > 0)
            {
                foreach (var cookie in WebConst.cookieContainer)
                {
                    request_2.AddParameter(cookie.Name, cookie.Value, ParameterType.Cookie);
                }
            }

            IRestResponse response_2 = client_2.Execute(request_2);


			/*
			cookie
				JSESSIONID=D77475C9D9DAF9C4E8E608946F3382D3;
				tk=aCG3oDfoFGXjQwkUZavSkd62S20Myi-8s4cdUZyI_yUlm1210;
				_jc_save_wfdc_flag=dc; 
				_jc_save_fromStation=%u6DF1%u5733%u5317%2CIOQ;
				_jc_save_toStation=%u666E%u5B81%2CPEQ; 
				RAIL_EXPIRATION=1552149503783;
				RAIL_DEVICEID=KZq3-zlAIAndGmzfOvghxAoGVjNH1WU3W4_v5b8SK_e2iB3yoVEj1hVGgECc7kovHnA6g4lly7OJJUrUtKWD6ZcNtX5XDGWG_As-doG05v845_tQZtT31_9edWErGowQhY-yEiv0OHg0RkONwIeM7tkeCmoisodf; 
				_jc_save_toDate=2019-03-06; 
				_jc_save_fromDate=2019-04-01;
				route=495c805987d0f5c8c84b14f60212447d;
				BIGipServerotn=720372234.64545.0000;
				BIGipServerpool_passport=401408522.50215.0000
				
				If-Modified-Since: 0
			*/
			var client_3 = new RestClient("https://kyfw.12306.cn/passport/web/auth/uamtk");
            var request_3 = new RestRequest(Method.POST);
            request_3.AddHeader("cache-control", "no-cache");
            request_3.AddParameter("application/x-www-form-urlencoded", "appid=otn", ParameterType.RequestBody);

            if (response_2.Cookies.Count > 0)
            {
                foreach (var item in response_2.Cookies)
                {
                    request_3.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }

            IRestResponse response_3 = client_3.Execute(request_3);

            ResponseModel responseModel = JsonConvert.DeserializeObject<ResponseModel>(response_3.Content);


            var client_4 = new RestClient("https://kyfw.12306.cn/otn/uamauthclient");
            var request_4 = new RestRequest(Method.POST);
            request_4.AddHeader("cache-control", "no-cache");
            request_4.AddParameter("application/x-www-form-urlencoded", "tk="+ responseModel.Newapptk, ParameterType.RequestBody);

            IRestResponse response_4 = client_4.Execute(request_4);


            var client_5 = new RestClient("https://kyfw.12306.cn/otn/login/checkUser");
            var request_5 = new RestRequest(Method.POST);
            request_5.AddHeader("cache-control", "no-cache");

            if (response_4.Cookies.Count > 0)
            {
                foreach (var item in response_4.Cookies)
                {
                    request_5.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }

            IRestResponse response_5 = client_5.Execute(request_5);

            var client_6 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/getPassengerDTOs");
            var request_6 = new RestRequest(Method.POST);
            request_6.AddHeader("cache-control", "no-cache");

            if (response_4.Cookies.Count > 0)
            {
                foreach (var item in response_4.Cookies)
                {
                    request_6.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }

            IRestResponse response_6 = client_6.Execute(request_6);


            return Json(new
            {
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

    public class ResponseModel
    {
        public string Result_message { get; set; }
        public string Result_code { get; set; }
        public string Apptk { get; set; }
        public string Newapptk { get; set; }
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