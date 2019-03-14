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

            #region https://kyfw.12306.cn/otn/confirmPassenger/initDc
            var client_10 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/initDc");
            var request_10 = new RestRequest(Method.POST);

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

            int FormIndex = response_10.Content.IndexOf("ticketInfoForPassengerForm");

            int FormLastIndex = response_10.Content.LastIndexOf("orderRequestDTO");

            int limit_ticket_num_index = response_10.Content.LastIndexOf("init_limit_ticket_num");

            int SubmitTokenIndex = response_10.Content.IndexOf("globalRepeatSubmitToken");

            int global_lang_index = response_10.Content.IndexOf("global_lang");

            string REPEAT_SUBMIT_TOKEN_Str_temp = response_10.Content.Substring(SubmitTokenIndex, global_lang_index-SubmitTokenIndex);

            string REPEAT_SUBMIT_TOKEN_Str = REPEAT_SUBMIT_TOKEN_Str_temp.Substring(REPEAT_SUBMIT_TOKEN_Str_temp.IndexOf("'")+1, REPEAT_SUBMIT_TOKEN_Str_temp.LastIndexOf("'")- REPEAT_SUBMIT_TOKEN_Str_temp.IndexOf("'"));

            StringBuilder passengerForm = new StringBuilder();

            passengerForm.Append(response_10.Content.Substring(FormIndex, FormLastIndex-FormIndex));

            string passengerFormStr = passengerForm.ToString();

            TicketInfoForPassengerForm ticketInfoForPassengerForm = JsonConvert.DeserializeObject<TicketInfoForPassengerForm>
                (passengerFormStr.Substring(passengerFormStr.IndexOf("=") + 1,
                passengerFormStr.LastIndexOf("}") - passengerFormStr.IndexOf("=")));

            string OrderRequestDTOStr = response_10.Content.Substring(FormLastIndex, limit_ticket_num_index-FormLastIndex);

            OrderQuestDTO orderQuestDTO = JsonConvert.DeserializeObject<OrderQuestDTO>(
                OrderRequestDTOStr.Substring(OrderRequestDTOStr.IndexOf("=") + 1,
                    OrderRequestDTOStr.LastIndexOf("}") - OrderRequestDTOStr.IndexOf("=")));
            #endregion

            #region getPassengerDTOs 获取乘客信息
            var client_11 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/getPassengerDTOs");
            var request_11 = new RestRequest(Method.POST);
            request_11.AddHeader("cache-control", "no-cache");
            request_11.AddHeader("Host", "kyfw.12306.cn");
            request_11.AddHeader("Origin", "https://kyfw.12306.cn");
            request_11.AddHeader("Referer", "https://kyfw.12306.cn/otn/confirmPassenger/initDc");
            request_11.AddHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0");

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
            IRestResponse response_11 = client_11.Execute(request_11);

            PassengerDTOResponse passengerDTOResponse = JsonConvert.DeserializeObject<PassengerDTOResponse>(response_11.Content);

            #endregion


            #region checkOrderInfo
            var client_12 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/checkOrderInfo");
            var request_12 = new RestRequest(Method.POST);
            request_12.AddHeader("Cache-Control", ": no-cache");
            request_12.AddHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            request_12.AddHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0");
            request_12.AddHeader("Connection", "true");

            request_12.AddParameter("_jc_save_fromDate", "2019-04-08", ParameterType.Cookie);
            request_12.AddParameter("_jc_save_fromStation", "%u6DF1%u5733%u5317%2CIOQ", ParameterType.Cookie);
            request_12.AddParameter("_jc_save_toDate", "2019-04-08", ParameterType.Cookie);
            request_12.AddParameter("_jc_save_toStation", "%u666E%u5B81%2CPEQ", ParameterType.Cookie);
            request_12.AddParameter("_jc_save_wfdc_flag", "dc", ParameterType.Cookie);
            if (response_4.Cookies.Count > 0)
            {
                foreach (var item in response_4.Cookies)
                {
                    request_12.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }

            request_12.AddParameter("application/x-www-form-urlencoded; charset=UTF-8", "cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=O,0,1,许灿杰,1,445281199508301071,13428108149,N&oldPassengerStr=许灿杰,1,445281199508301071,1_&tour_flag=dc&randCode=&whatsSelect=1", ParameterType.RequestBody);

            IRestResponse response_12 = client_12.Execute(request_12);



            #endregion

            #region getQueueCount
            var client_13 = new RestClient("https://kyfw.12306.cn/otn/confirmPassenger/getQueueCount");
            var request_13 = new RestRequest(Method.POST);
            request_13.AddHeader("Cache-Control", "no-cache");
            request_13.AddHeader("Accept", "application/json");
            request_13.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            request_13.AddHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0");
            request_13.AddHeader("Connection", "true");

            if (response_4.Cookies.Count > 0)
            {
                foreach (var item in response_4.Cookies)
                {
                    request_13.AddParameter(item.Name, item.Value, ParameterType.Cookie);
                }
            }
            request_13.AddParameter("_jc_save_fromDate", "2019-04-08", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_fromStation", "%u6DF1%u51333%u53113%2CIOQ", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_toDate", "2019-04-08", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_toStation", "%u666E%u5B81%2CPEQ", ParameterType.Cookie);
            request_13.AddParameter("_jc_save_wfdc_flag", "dc", ParameterType.Cookie);

            var request_13_form_data = "train_date=Mon Apr 08 2019 00:00:00 GMT+0800 (中国标准时间)&train_no=" + orderQuestDTO.Train_no + "&stationTrainCode=" + orderQuestDTO.Station_train_code + "&seatType=O&fromStationTelecode=" + orderQuestDTO.From_station_telecode + "&toStationTelecode=" + orderQuestDTO.To_station_telecode + "&leftTicket=" + ticketInfoForPassengerForm.QueryLeftTicketRequestDTO.YpInfoDetail + "&purpose_codes=00&train_location=" + ticketInfoForPassengerForm.Train_location + "&isCheckOrderInfo=";

            request_13.AddParameter("application/x-www-form-urlencoded; charset=UTF-8", "train_date=Mon+Apr+08+2019+00%3A00%3A00+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&train_no=6i000D235005&stationTrainCode=D2350&seatType=O&fromStationTelecode=IOQ&toStationTelecode=KTQ&leftTicket=dyR9OtjFe4sh8%252F%252F38K2%252BwkIhMnjE5hxN&purpose_codes=00&train_location=Q7", ParameterType.RequestBody);

           
            IRestResponse response_13 = client_13.Execute(request_13);

            QueueCountResponseData queueCountResponseData = JsonConvert.DeserializeObject<QueueCountResponseData>(response_13.Content);


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

    public class TicketInfoForPassengerForm
    {
        public List<CardType> CardTypes { get; set; }

        public int IsAsync { get; set; }

        public string Key_check_isChange { get; set; }

        public List<string> LeftDetails { get; set; }

        public string LeftTicketStr { get; set; }

        public LimitBuySeatTicketModel LimitBuySeatTicketDTO { get; set; }

        public int MaxTicketNum { get; set; }

        public OrderRequestModel OrderRequestDTO { get; set; }

        public string Purpose_codes { get; set; }

        public QueryLeftTicketRequestModel QueryLeftTicketRequestDTO { get; set; }

        public string Tour_flag { get; set; }

        public string Train_location { get; set; }
    }

    public class CardType
    {
        public object End_station_time { get; set; }

        public object End_time { get; set; }

        public string Id { get; set; }

        public object Start_station_name { get; set; }

        public object Start_time { get; set; }

        public string Value { get; set; }
    }

    public class LimitBuySeatTicketModel
    {

    }

    public class OrderRequestModel
    {

    }

    public class QueryLeftTicketRequestModel
    {
        public string Arrive_time { get; set; }

        public string Bigger20 { get; set; }

        public int Exchange_train_flag { get; set; }

        public string From_station { get; set; }

        public string From_station_name { get; set; }

        public string From_staion_no { get; set; }

        public string Lishi { get; set; }

        public object Login_id { get; set; }

        public object Login_mode { get; set; }

        public object Login_site { get; set; }

        public string Purpose_code { get; set; }

        public object Query_type { get; set; }

        public object SeatTypeAndNum { get; set; }

        public string Seat_Types { get; set; }

        public string Start_time { get; set; }

        public object Start_time_begin { get; set; }

        public object Start_time_end { get; set; }

        public string Station_train_code { get; set; }

        public object Ticket_type { get; set; }

        public string To_station { get; set; }

        public string To_station_name { get; set; }

        public string To_station_no { get; set; }

        public string Train_date { get; set; }

        public object Train_flag { get; set; }

        public object Train_headers { get; set; }

        public string Train_no { get; set; }

        public bool UseMasterPool { get; set; }

        public bool UseWB10LimitTime { get; set; }

        public bool UsingGemfireCache { get; set; }

        public string YpInfoDetail { get; set; }
    }

    public class OrderQuestDTO
    {
        public int Adult_num { get; set; }

        public object Apply_order_no { get; set; }

        public object Bed_level_order_num { get; set; }

        public object Bureau_code { get; set; }

        public object Cancel_flag { get; set; }

        public object Card_num { get; set; }

        public object Channel { get; set; }

        public int Child_num { get; set; }

        public object Choose_seat { get; set; }

        public int Disability_num { get; set; }

        public Train_dateModel End_time { get; set; }

        public int Exchange_train_flag { get; set; }

        public string From_station_name { get; set; }

        public string From_station_telecode { get; set; }

        public object Get_ticket_pass { get; set; }

        public string Id_mode { get; set; }

        public object IsShowPassCode { get; set; }

        public object LeftTicketGenTime { get; set; }

        public object Order_date { get; set; }

        public object PassengerFlag { get; set; }

        public object RealleftTicket { get; set; }

        public object ReqIpAddress { get; set; }

        public object ReqTimeLeftStr { get; set; }

        public string Reserve_flag { get; set; }

        public object Seat_detail_type_code { get; set; }

        public object Seat_type_code { get; set; }

        public object Sequence_no { get; set; }

        public Train_dateModel Start_time { get; set; }

        public object Start_time_str { get; set; }

        public string Station_train_code { get; set; }

        public int Student_num { get; set; }

        public int Ticket_num { get; set; }

        public object Ticket_type_order_num { get; set; }

        public string To_station_name { get; set; }

        public string To_station_telecode { get; set; }

        public string Tour_flag { get; set; }

        public object TrainCodeText { get; set; }

        public Train_dateModel Train_date { get; set; }

        public object Train_date_str { get; set; }

        public object Train_location { get; set; }

        public string Train_no { get; set; }

        public object Train_order { get; set; }

        public object VarStr { get; set; }
    }

    public class Train_dateModel
    {
        public int Date { get; set; }

        public int Day { get; set; }

        public int Hours { get; set; }

        public int Minutes { get; set; }

        public int Month { get; set; }

        public int Seconds { get; set; }

        public string Time { get; set; }

        public int TimezoneOffset { get; set; }

        public int Year { get; set; }
    }

    public class QueueCountResponseModel
    {
        public string ValidateMessageShowId { get; set; }
        
        public bool Status { get; set; }

        public int Httpstatus { get; set; }

        public QueueCountResponseData Data { get; set; }

        public List<Object> Messages { get; set; }

        public object ValidateMessages { get; set; }
    }

    public class QueueCountResponseData
    {
        public int Count { get; set; }
        
        public string Ticket { get; set; }

        public bool Op_2 { get; set; }

        public int CountT { get; set; }

        public bool Op_1 { get; set; }
    }
}