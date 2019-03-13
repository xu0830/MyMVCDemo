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

        /// <summary>
        /// 获取验证码图片
        /// </summary>
        /// <returns></returns>
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

            #region 验证码校验
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
            #endregion

            #region 登录接口
            var loginAnswer = answer.Replace(",", "%2C");
            var client_2 = new RestClient("https://kyfw.12306.cn/passport/web/login");
            var request_2 = new RestRequest(Method.POST);
            request_2.AddHeader("cache-control", "no-cache");
            //  request_2.AddHeader("Host", "kyfw.12306.cn");
            //  request_2.AddHeader("Origin", "https://kyfw.12306.cn");
            //  request_2.AddHeader("referer", "https://kyfw.12306.cn/otn/resources/login.html");
            request_2.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            //  request_2.AddHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36");
            request_2.AddParameter("application/x-www-form-urlencoded", "username=13428108149&password=xucanjie88&answer=" + loginAnswer + "&appid=otn&undefined=", ParameterType.RequestBody);

            if (WebConst.cookieContainer.Count > 0)
            {
                foreach (var cookie in WebConst.cookieContainer)
                {
                    request_2.AddParameter(cookie.Name, cookie.Value, ParameterType.Cookie);
                }
            }

            IRestResponse response_2 = client_2.Execute(request_2);
            #endregion

            #region 获取标识登录状态的cookie
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
            request_4.AddParameter("application/x-www-form-urlencoded", "tk=" + responseModel.Newapptk, ParameterType.RequestBody);

            IRestResponse response_4 = client_4.Execute(request_4);
            #endregion

            #region 校验登陆状态
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
            #endregion

            #region queryX
            var client_8 = new RestClient("https://kyfw.12306.cn/otn/leftTicket/queryX?leftTicketDTO.train_date=2019-04-08&leftTicketDTO.from_station=IOQ&leftTicketDTO.to_station=PEQ&purpose_codes=ADULT");
            var request_8 = new RestRequest(Method.GET);
            request_8.AddHeader("cache-control", "no-cache");
            request_8.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            IRestResponse response_8 = client_8.Execute(request_8);

            TicketsResponse ticketsResponse = JsonConvert.DeserializeObject<TicketsResponse>(response_8.Content);

            List<Ticket> tickets = new List<Ticket>();
            foreach (var item in ticketsResponse.Data.Result)
            {
                var props = item.Split('|');
                Ticket ticket = new Ticket()
                {
                    SecretStr = props[0],
                    ButtonTextInfo = props[1],
                    Train_no = props[2],
                    Station_train_code = props[3],
                    Start_station_telecode = props[4],
                    End_station_telecode = props[5],
                    From_station_telecode = props[6],
                    To_station_telecode = props[7],
                    Start_time = props[8],
                    Arrive_time = props[9],
                    Lishi = props[10],
                    CanWebBuy = props[11],
                    Yp_info = props[12],
                    Start_train_data = props[13],
                    Train_seat_feature = props[14],
                    Location_code = props[15],
                    From_station_no = props[16],
                    To_station_no = props[17],
                    Is_support_card = props[18],
                    Controlled_train_flag = props[19],
                    Gg_num = props[20],
                    Gr_num = props[21],
                    Qt_num = props[22],
                    Rw_num = props[23],
                    Rz_num = props[24],
                    Tz_num = props[25],
                    Wz_num = props[26],
                    Yb_num = props[27],
                    Yw_num = props[28],
                    Yz_num = props[29],
                    Ze_num = props[30],
                    Zy_num = props[31],
                    Swz_num = props[32],
                    Srrb_num = props[33],
                    Yp_ex = props[34],
                    Seat_types = props[35],
                    Exchange_train_flag = props[36],
                    Houbu_train_flag = props[37],
                };
                if (props.Length > 38)
                {
                    ticket.Houbu_seat_limit = props[38];
                }
                tickets.Add(ticket);
            }
            #endregion

            #region submitOrderRequest

            var client_9 = new RestClient("https://kyfw.12306.cn/otn/leftTicket/submitOrderRequest");
            var request_9 = new RestRequest(Method.POST);
            request_9.AddHeader("cache-control", "no-cache");
            request_9.AddHeader("Content-Type", "application/x-www-form-urlencoded");

            request_9.AddParameter("_jc_save_fromDate", "2019-04-08", ParameterType.Cookie);
            request_9.AddParameter("_jc_save_fromStation", "%u6DF1%u5733%u5317%2CIOQ", ParameterType.Cookie);
            request_9.AddParameter("_jc_save_toDate", "2019-04-08", ParameterType.Cookie);
            request_9.AddParameter("_jc_save_toStation", "%u666E%u5B81%2CPEQ", ParameterType.Cookie);
            request_9.AddParameter("_jc_save_wfdc_flag", "dc", ParameterType.Cookie);

            if (response_4.Cookies.Count > 0)
            {
                foreach (var item in response_4.Cookies)
                {
                    request_9.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }

            request_9.AddParameter("application/x-www-form-urlencoded",
                "secretStr=" +
                tickets[3].SecretStr +
                "&train_date=2019-04-08&back_train_date=2019-04-08&tour_flag=dc&purpose_codes=ADULT" +
                "&query_from_station_name=深圳北&query_to_station_name=普宁&undefined",
                ParameterType.RequestBody);
            IRestResponse response_9 = client_9.Execute(request_9);

            #endregion

    
            #region logdevice
            var client_12 = new RestClient("https://kyfw.12306.cn/otn/HttpZF/logdevice");
            var request_12 = new RestRequest(Method.GET);
            IRestResponse response_12 = client_12.Execute(request_12);
            StringBuilder builder = new StringBuilder();
            String content = builder.Append(response_12.Content.Substring(response_12.Content.IndexOf("'") + 1, response_12.Content.LastIndexOf("'") - response_12.Content.IndexOf("'") - 1)).ToString();

            CallBackFunction callBackFunction = JsonConvert.DeserializeObject<CallBackFunction>(content);
            #endregion

            #region https://kyfw.12306.cn/otn/confirmPassenger/initWc
            var client_13 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/initWc");
            var request_13 = new RestRequest(Method.POST);
            request_13.AddHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*; q=0.8");
            request_13.AddHeader("Accept-Encoding", "gzip, deflate, br");
            request_13.AddHeader("Accept-Language", "zh-CN,zh;q=0.9");
            request_13.AddHeader("Cache-Control", "max-age=0");
            request_13.AddHeader("Connection", "keep-alive");
            request_13.AddHeader("Content-Length", "10");
            request_13.AddHeader("Content-Type", "application/x-www-form-urlencoded");

            request_13.AddHeader("Host", "kyfw.12306.cn");
            request_13.AddHeader("Origin", "https://kyfw.12306.cn");
            request_13.AddHeader("Referer", "https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc");
            request_13.AddHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");
            request_13.AddHeader("Upgrade-Insecure-Requests", "1");

            request_13.AddParameter("_jc_save_fromDate", "2019-04-08", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_fromStation", "%u6DF1%u5733%u5317%2CIOQ", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_toDate", "2019-04-08", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_toStation", "%u666E%u5B81%2CPEQ", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_showIns", "true", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_wfdc_flag", "dc", ParameterType.Cookie);
            if (response_4.Cookies.Count > 0)
            {
                foreach (var item in response_4.Cookies)
                {
                    request_13.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }

            IRestResponse response_13 = client_13.Execute(request_13);

            var flag = response_13.Content.IndexOf("ticketInfoForPassengerForm");
            #endregion

            #region getPassengerDTOs 获取乘客信息
            var client_10 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/getPassengerDTOs");
            var request_10 = new RestRequest(Method.POST);
            request_10.AddHeader("cache-control", "no-cache");
            request_10.AddHeader("Host", "kyfw.12306.cn");
            request_10.AddHeader("Origin", "https://kyfw.12306.cn");
            request_10.AddHeader("Referer", "https://kyfw.12306.cn/otn/confirmPassenger/initDc");

            request_10.AddParameter("_jc_save_fromDate", "2019-04-08", ParameterType.Cookie);
            request_10.AddParameter("_jc_save_fromStation", "%u6DF1%u5733%u5317%2CIOQ", ParameterType.Cookie);
            request_10.AddParameter("_jc_save_toDate", "2019-04-08", ParameterType.Cookie);
            request_10.AddParameter("_jc_save_toStation", "%u666E%u5B81%2CPEQ", ParameterType.Cookie);
            request_10.AddParameter("_jc_save_wfdc_flag", "dc", ParameterType.Cookie);
            if (response_4.Cookies.Count > 0)
            {
                foreach (var item in response_4.Cookies)
                {
                    request_10.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }
            IRestResponse response_10 = client_10.Execute(request_10);

            PassengerDTOResponse passengerDTOResponse = JsonConvert.DeserializeObject<PassengerDTOResponse>(response_10.Content);

            #endregion


            #region checkOrderInfo

            var client_11 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/checkOrderInfo");
            var request_11 = new RestRequest(Method.POST);
            request_11.AddHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            request_11.AddHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");

            request_11.AddParameter("_jc_save_fromDate", "2019-04-08", ParameterType.Cookie);
            request_11.AddParameter("_jc_save_fromStation", "%u6DF1%u5733%u5317%2CIOQ", ParameterType.Cookie);
            request_11.AddParameter("_jc_save_toDate", "2019-04-08", ParameterType.Cookie);
            request_11.AddParameter("_jc_save_toStation", "%u666E%u5B81%2CPEQ", ParameterType.Cookie);
            request_11.AddParameter("_jc_save_wfdc_flag", "dc", ParameterType.Cookie);
            if (response_4.Cookies.Count > 0)
            {
                foreach (var item in response_4.Cookies)
                {
                    request_11.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }
            request_11.AddParameter("RAIL_DEVICEID", callBackFunction.Dfp, ParameterType.Cookie);
            request_11.AddParameter("RAIL_EXPIRATION", callBackFunction.Exp, ParameterType.Cookie);


            request_11.AddParameter("application/x-www-form-urlencoded; charset=UTF-8", "cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=O%2C0%2C1%2C%E8%AE%B8%E7%81%BF%E6%9D%B0%2C1%2C445281199508301071%2C13428108149%2CN&oldPassengerStr=%E8%AE%B8%E7%81%BF%E6%9D%B0%2C1%2C445281199508301071%2C1_&tour_flag=dc&randCode=&whatsSelect=1", ParameterType.RequestBody);
            
            IRestResponse response_11 = client_11.Execute(request_11);



            #endregion

            #region getQueueCount
            //var client_7 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/getQueueCount");
            //var request_7 = new RestRequest(Method.POST);
            //request_7.AddHeader("cache-control", "no-cache");

            //if (response_4.Cookies.Count > 0)
            //{
            //    foreach (var item in response_4.Cookies)
            //    {
            //        request_7.AddParameter(item.Name, item.Value, ParameterType.Cookie);
            //    }
            //}
            //request_7.AddParameter("_jc_save_fromDate", "2019-04-09", ParameterType.Cookie);
            //request_7.AddParameter("_jc_save_fromStation", "%u6DF1%u5733%u5317%2CIOQ", ParameterType.Cookie);
            //request_7.AddParameter("_jc_save_toDate", "2019-04-09", ParameterType.Cookie);
            //request_7.AddParameter("_jc_save_toStation", "%u666E%u5B81%2CPEQ", ParameterType.Cookie);
            //request_7.AddParameter("_jc_save_wfdc_flag", "dc", ParameterType.Cookie);

            //request_7.AddParameter("application/x-www-form-urlencoded", "train_date=Sat Apr 06 2019 00:00:00 GMT+0800 (中国标准时间)&train_no=6i000D31080C&stationTrainCode=D3108&seatType=0&fromStationTelecode=IOQ&toStationTelecode=KTQ&leftTicket=Yv936dbd%2Fw4wX06DFNrktl2ZOT1Sflb%2Bxa888uF1ojMSJ0Yn&purpose_codes=00&train_location=QY", ParameterType.RequestBody);
            //IRestResponse response_7 = client_7.Execute(request_7);
            #endregion

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
        public int MatchID { get; set; }
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
            char[] Base64Code = new char[] { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/', '=' };
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
            if (cookiesContainer != null && cookiesContainer.Count > 0)
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

    public class TicketsResponse
    {
        public int Httpstatus { get; set; }

        public string Messages { get; set; }

        public bool Status { get; set; }

        public TicketModel Data { get; set; }
    }

    public class TicketModel
    {
        public int Flag { get; set; }

        public object Map { get; set; }

        public List<string> Result { get; set; }
    }

    public class Ticket
    {
        /// <summary>
        /// 车票密文
        /// </summary>
        public string SecretStr { get; set; }

        /// <summary>
        /// 按钮提示文字
        /// </summary>
        public string ButtonTextInfo { get; set; }

        /// <summary>
        /// 列车编号
        /// </summary>
        public string Train_no { get; set; }

        /// <summary>
        /// 车次
        /// </summary>
        public string Station_train_code { get; set; }

        /// <summary>
        /// 始发站编码
        /// </summary>
        public string Start_station_telecode { get; set; }

        /// <summary>
        /// 终点站编码
        /// </summary>
        public string End_station_telecode { get; set; }

        /// <summary>
        /// 出发站编码
        /// </summary>
        public string From_station_telecode { get; set; }

        /// <summary>
        /// 到达站编码
        /// </summary>
        public string To_station_telecode { get; set; }

        /// <summary>
        /// 出发时间
        /// </summary>
        public string Start_time { get; set; }

        /// <summary>
        /// 到达时间
        /// </summary>
        public string Arrive_time { get; set; }

        /// <summary>
        /// 历时
        /// </summary>
        public string Lishi { get; set; }

        /// <summary>
        /// 是否可以网上购票   "Y" -> true
        /// </summary> 
        public string CanWebBuy { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Yp_info { get; set; }

        /// <summary>
        /// 出发日期
        /// </summary>
        public string Start_train_data { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Train_seat_feature { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Location_code { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string From_station_no { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string To_station_no { get; set; }

        /// <summary>
        /// 是否支持二代身份证进出站    !=0 -> true
        /// </summary>
        public string Is_support_card { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Controlled_train_flag { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Gg_num { get; set; }

        /// <summary>
        /// 高级软卧
        /// </summary>
        public string Gr_num { get; set; }

        /// <summary>
        /// 其他
        /// </summary>
        public string Qt_num { get; set; }

        /// <summary>
        /// 软卧一等座
        /// </summary>
        public string Rw_num { get; set; }

        /// <summary>
        /// 软座
        /// </summary>
        public string Rz_num { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Tz_num { get; set; }

        /// <summary>
        /// 无座数量
        /// </summary>
        public string Wz_num { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Yb_num { get; set; }

        /// <summary>
        /// 硬卧二等卧
        /// </summary>
        public string Yw_num { get; set; }

        /// <summary>
        /// 硬座
        /// </summary>
        public string Yz_num { get; set; }

        /// <summary>
        /// 二等座数量
        /// </summary>
        public string Ze_num { get; set; }

        /// <summary>
        /// 一等座数量
        /// </summary>
        public string Zy_num { get; set; }

        /// <summary>
        /// 商务座数量
        /// </summary>
        public string Swz_num { get; set; }

        /// <summary>
        /// 动卧
        /// </summary>
        public string Srrb_num { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Yp_ex { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Seat_types { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Exchange_train_flag { get; set; }

        /// <summary>
        /// 候补
        /// </summary>
        public string Houbu_train_flag { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Houbu_seat_limit { get; set; }

        /// <summary>
        /// 出发站名称
        /// </summary>
        public string From_station_name { get; set; }

        /// <summary>
        /// 到达站名称
        /// </summary>
        public string To_station_name { get; set; }
    }

    public class PassengerDTOResponse
    {
        public string ValidateMessagesShowId { get; set; }

        public bool Status { get; set; }

        public int Httpstatus { get; set; }

        public PassengerDTOResponseData Data { get; set; }

        public List<string> Message { get; set; }

        public Object ValidateMessage { get; set; }
    }

    public class PassengerDTOResponseData
    {
        /// <summary>
        /// 
        /// </summary>
        public string Notify_for_gat { get; set; }

        /// <summary>
        /// 是否存在
        /// </summary>
        public bool IsExist { get; set; }

        /// <summary>
        /// 异常信息
        /// </summary>
        public string ExMsg { get; set; }

        public List<int> Two_isOpenClick { get; set; }

        public List<int> Other_isOpenClick { get; set; }

        /// <summary>
        /// 常用乘客
        /// </summary>
        public List<PassengerDto> Normal_passengers { get; set; }

        /// <summary>
        /// 受让人
        /// </summary>
        public List<PassengerDto> Dj_passengers { get; set; }
    }

    public class PassengerDto
    {
        public int Code { get; set; }

        /// <summary>
        /// 乘客姓名
        /// </summary>
        public string Passenger_name { get; set; }

        /// <summary>
        /// 性别编码    M -> 男
        /// </summary>
        public string Sex_code { get; set; }

        /// <summary>
        /// 性别
        /// </summary>
        public string Sex_name { get; set; }

        /// <summary>
        /// 出生日期
        /// </summary>
        public string Born_data { get; set; }

        /// <summary>
        /// 国家代码
        /// </summary>
        public string Country_code { get; set; }

        /// <summary>
        /// 乘客身份证类型编码
        /// </summary>
        public int Passenger_id_type_code { get; set; }

        /// <summary>
        /// 乘客身份证类型
        /// </summary>
        public string Passenger_id_type_name { get; set; }

        /// <summary>
        /// 身份证号码
        /// </summary>
        public string Passenger_id_no { get; set; }

        /// <summary>
        /// 乘客类型
        /// </summary>
        public int Passenger_type { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int Passenger_flag { get; set; }

        /// <summary>
        /// 乘客类型名称  成人/学生
        /// </summary>
        public string Passenger_type_name { get; set; }

        /// <summary>
        /// 手机号码
        /// </summary>
        public string Mobile_no { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Phone_no { get; set; }

        /// <summary>
        /// 邮箱
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// 地址
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// 邮政编码
        /// </summary>
        public string PostalCode { get; set; }

        /// <summary>
        /// 姓名首字母
        /// </summary>
        public string First_letter { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int RecordCount { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int Total_times { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int Index_id { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Gat_born_date { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Gat_valid_date_start { get; set; }
        
        /// <summary>
        /// 
        /// </summary>
        public string Gat_valid_date_end { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Gat_version { get; set; }

    }

    public class CallBackFunction
    {
        public string Exp { get; set; }

        public string Dfp { get; set; }
    }
}