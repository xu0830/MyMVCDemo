
    /*<![CDATA[*/
	//为了国际化，需要定义后台获取的字符串
	$.views.helpers({
		buttonText : function() {
			return '\u9884\u8BA2';
		}
	});
	$.views.helpers({
		isNum : function(value) {
			//alert(value);
			return parseInt(value);
		}
	});
	$.views.helpers({
		changeLiShi : function(value) {
			if (value.substring(0,1) == "0") {
				if (value.substring(1,2) == "0") {
				    if (value.substring(3,4) == "0") {
					    value = value.substring(4,5) + "分";
				    } else {
				    	value = value.substring(3,5) + "分";
					}
				} else {
					value = value.substring(1,2) + "小时" + value.substring(3,5) + "分";
				}
			} else {
				if (value.substring(3,5) == "00") {
					value = value.substring(0,2) + "小时";
				} else {
				    value = value.substring(0,2) + "小时" + value.substring(3,5) + "分";;
				}
			}
			return value;
		}
	});
	$.views.helpers({
		changeArriveDate : function(value1, value2) {
			value1 = value1.replace(":", "");
			value2 = value2.replace(":", "");
			hour_value = Number(value1.substring(0,2)) + Number(value2.substring(0,2));
			min_value = Number(value1.substring(2,4)) + Number(value2.substring(2,4));
			if (min_value >= 60) {
				hour_value = hour_value + 1;
			}
			if (hour_value >= 24 && hour_value < 48) {
				return "次日";
			} else if(hour_value >= 48 && hour_value < 72) {
				return "两日";
			} else if(hour_value >= 72) {
				return "三日";
			} else {
				return "当日";
			}
		}
	});
    var from_station = '';
    var from_station_name = '';
    var to_station = '';
    var to_station_name = '';
    var trainDate = '2019-03-12';
    var backTrainDate = '2019-03-12';
    var page_show_flag = null;
    var purposeCodeFromIndex = null;
    var roundReferTime = null;
    var studentComPerArr=['2018-06-01','2018-09-30','2018-12-01','2018-12-31','2019-01-01','2019-03-31'];
    var studentMindate='2019-03-12';
    var studentMaxdate='2019-04-10';
    var otherMindate = '2019-03-12';
    var otherMaxdate = '2019-04-10';
	// 日期范围传参
	//var init_train_no = null;
	var init_minPeriod = '2019-03-12';
	var init_maxPeriod = '2019-04-10';
	//var init_train_date = null;
	//var init_back_train_date = null;
	var back_train_date = null;
	// 客运首页进入传参
	//var index_from_station = null;
	var index_to_station = null;
	//var index_from_station_name = null;
	//var index_to_station_name = null;
	var index_train_date = null;
	//var index_back_train_date = null;
	//var index_tour_flag = null;
	// 学生票传参，用于判断
	var stu_start_train_date = '2018-06-01 00:00:00&2018-12-01 00:00:00&2019-01-01 00:00:00';
	var stu_end_tain_date = '2018-09-30 00:00:00&2018-12-31 00:00:00&2019-03-31 00:00:00';
	var stu_buy_date = '2019-03-12&2019-04-10';
	var other_buy_date = '2019-03-12&2019-04-10';
	// 从确认乘客信息页面返回至余票查询页面传参
	//var step_tour_flag = null;
	//var step_from_station = null;
	//var step_from_station_name = null;
	//var step_to_station = null;
	//var step_to_station_name = null;
	//var step_train_date = null 
	//var step_back_train_date = null 
	// 从订单确认页面预订返程返回至余票查询页面传参
	//var fc_from_station = null;
	//var fc_from_station_name = null;
	//var fc_to_station = null;
	//var fc_to_station_name = null;
	//var fc_train_date = null 
	//var fc_back_train_date = null;
	//var fc_tour_flag = null;
	// 改签
	//var gc_from_station = null;
	//var gc_from_station_name = null;
	//var gc_to_station = null;
	//var gc_to_station_name = null;
	//var gc_train_date = null 
	//var gc_back_train_date = null;
	//var gc_tour_flag = null;
	// 旅程类型传参，用于判断跳转
	var train_tour_flag = 'other';
	var tour_flag='';
	var dateArr =['03-12','03-13','03-14','03-15','03-16','03-17','03-18','03-19','03-20','03-21','03-22','03-23','03-24','03-25','03-26','03-27','03-28','03-29','03-30','03-31','04-01','04-02','04-03','04-04','04-05','04-06','04-07','04-08','04-09','04-10'];
	var fullDateArr =['2019-03-12','2019-03-13','2019-03-14','2019-03-15','2019-03-16','2019-03-17','2019-03-18','2019-03-19','2019-03-20','2019-03-21','2019-03-22','2019-03-23','2019-03-24','2019-03-25','2019-03-26','2019-03-27','2019-03-28','2019-03-29','2019-03-30','2019-03-31','2019-04-01','2019-04-02','2019-04-03','2019-04-04','2019-04-05','2019-04-06','2019-04-07','2019-04-08','2019-04-09','2019-04-10'];
	var otherDateArr = ['2019-03-12','2019-03-13','2019-03-14','2019-03-15','2019-03-16','2019-03-17','2019-03-18','2019-03-19','2019-03-20','2019-03-21','2019-03-22','2019-03-23','2019-03-24','2019-03-25','2019-03-26','2019-03-27','2019-03-28','2019-03-29','2019-03-30','2019-03-31','2019-04-01','2019-04-02','2019-04-03','2019-04-04','2019-04-05','2019-04-06','2019-04-07','2019-04-08','2019-04-09','2019-04-10'];
	var ClickWho ='' 
	var isstudentDate=false 
	var isInMaintenanceHours = false;
	var isSuperLogin = false;
	//快捷购票添加
	var passengerAll=null;
	var passengerChecked=[];//已选常用联系人
	var xbChecked=[];//已选席别
	var rqChecked=[];//已选日期
	var ccSelected=[];//已选车次
		
	var autoSearchTime=5000;
	var noticeContent = null;
	
	var isSaveQueryLog='N';

	var other_control=30;
	var stu_control=30;
	var isDwTicketResign='N';
	var DW_TRAINS=['D4805','D4807','D4831','D901','D902','D903','D904','D905','D906','D907','D908','D909','D910','D915','D921','D922','D923','D924','D927','D928','D931','D932','D934','D933','D935','D936','D937','D938','D965','D925','D926','D941','D942','D943','D944'];
	var canChangeToStation=null;
	var if_show_pass_code_login = 'Y';
	var intervalTime=null;
	var queryOrderWaitTimeInterval='3000';
	var canChooseSeats=null;
	var choose_Seats=null;
	var canChooseBeds=null;
	var isCanChooseMid=null;

	var hainan_limit_from_telcode=',BFQ,UFQ,FZQ,HMQ,KLQ,PFQ,UQQ,KGQ,LIQ,MHQ,QZQ,QYQ,JUQ,SEQ,WEQ,YUQ,CTQ,FJQ,PYQ,WNQ,ACQ,TWQ,VUQ,BWQ,KEQ,SRQ,';
	var hainan_limit_to_telcode=',BFQ,UFQ,FZQ,HMQ,KLQ,PFQ,UQQ,KGQ,LIQ,MHQ,QZQ,QYQ,JUQ,SEQ,WEQ,YUQ,CTQ,FJQ,PYQ,WNQ,ACQ,TWQ,VUQ,BWQ,KEQ,SRQ,';
	var hainan_limit_start_traindate='2019-03-22';
	var hainan_limit_msg='';

	var is_uam_login='Y';
	
	/*]]>*/
