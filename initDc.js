

/*<![CDATA[*/

//common data
var can_add = 'Y';
var member_tourFlag = 'dc';
var IsStudentDate = false;
var init_seatTypes = [{
		'end_station_name': null,
		'end_time': null,
		'id': 'M',
		'start_station_name': null,
		'start_time': null,
		'value': '\u4E00\u7B49\u5EA7'
	}, {
		'end_station_name': null,
		'end_time': null,
		'id': 'O',
		'start_station_name': null,
		'start_time': null,
		'value': '\u4E8C\u7B49\u5EA7'
	}
];

var defaultTicketTypes = [{
		'end_station_name': null,
		'end_time': null,
		'id': '1',
		'start_station_name': null,
		'start_time': null,
		'value': '\u6210\u4EBA\u7968'
	}, {
		'end_station_name': null,
		'end_time': null,
		'id': '2',
		'start_station_name': null,
		'start_time': null,
		'value': '\u513F\u7AE5\u7968'
	}, {
		'end_station_name': null,
		'end_time': null,
		'id': '3',
		'start_station_name': null,
		'start_time': null,
		'value': '\u5B66\u751F\u7968'
	}, {
		'end_station_name': null,
		'end_time': null,
		'id': '4',
		'start_station_name': null,
		'start_time': null,
		'value': '\u6B8B\u519B\u7968'
	}
];

var init_cardTypes = [{
		'end_station_name': null,
		'end_time': null,
		'id': '1',
		'start_station_name': null,
		'start_time': null,
		'value': '\u4E2D\u56FD\u5C45\u6C11\u8EAB\u4EFD\u8BC1'
	}, {
		'end_station_name': null,
		'end_time': null,
		'id': 'C',
		'start_station_name': null,
		'start_time': null,
		'value': '\u6E2F\u6FB3\u5C45\u6C11\u6765\u5F80\u5185\u5730\u901A\u884C\u8BC1'
	}, {
		'end_station_name': null,
		'end_time': null,
		'id': 'G',
		'start_station_name': null,
		'start_time': null,
		'value': '\u53F0\u6E7E\u5C45\u6C11\u6765\u5F80\u5927\u9646\u901A\u884C\u8BC1'
	}, {
		'end_station_name': null,
		'end_time': null,
		'id': 'B',
		'start_station_name': null,
		'start_time': null,
		'value': '\u62A4\u7167'
	}, {
		'end_station_name': null,
		'end_time': null,
		'id': 'H',
		'start_station_name': null,
		'start_time': null,
		'value': '\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1'
	}
];

var ticket_seat_codeMap = {
	'3': [{
			'end_station_name': null,
			'end_time': null,
			'id': 'O',
			'start_station_name': null,
			'start_time': null,
			'value': '\u4E8C\u7B49\u5EA7'
		}
	],
	'2': [{
			'end_station_name': null,
			'end_time': null,
			'id': 'M',
			'start_station_name': null,
			'start_time': null,
			'value': '\u4E00\u7B49\u5EA7'
		}, {
			'end_station_name': null,
			'end_time': null,
			'id': 'O',
			'start_station_name': null,
			'start_time': null,
			'value': '\u4E8C\u7B49\u5EA7'
		}
	],
	'1': [{
			'end_station_name': null,
			'end_time': null,
			'id': 'M',
			'start_station_name': null,
			'start_time': null,
			'value': '\u4E00\u7B49\u5EA7'
		}, {
			'end_station_name': null,
			'end_time': null,
			'id': 'O',
			'start_station_name': null,
			'start_time': null,
			'value': '\u4E8C\u7B49\u5EA7'
		}
	],
	'4': [{
			'end_station_name': null,
			'end_time': null,
			'id': 'M',
			'start_station_name': null,
			'start_time': null,
			'value': '\u4E00\u7B49\u5EA7'
		}, {
			'end_station_name': null,
			'end_time': null,
			'id': 'O',
			'start_station_name': null,
			'start_time': null,
			'value': '\u4E8C\u7B49\u5EA7'
		}
	]
};

var ticketInfoForPassengerForm = {
	'cardTypes': [{
			'end_station_name': null,
			'end_time': null,
			'id': '1',
			'start_station_name': null,
			'start_time': null,
			'value': '\u4E2D\u56FD\u5C45\u6C11\u8EAB\u4EFD\u8BC1'
		}, {
			'end_station_name': null,
			'end_time': null,
			'id': 'C',
			'start_station_name': null,
			'start_time': null,
			'value': '\u6E2F\u6FB3\u5C45\u6C11\u6765\u5F80\u5185\u5730\u901A\u884C\u8BC1'
		}, {
			'end_station_name': null,
			'end_time': null,
			'id': 'G',
			'start_station_name': null,
			'start_time': null,
			'value': '\u53F0\u6E7E\u5C45\u6C11\u6765\u5F80\u5927\u9646\u901A\u884C\u8BC1'
		}, {
			'end_station_name': null,
			'end_time': null,
			'id': 'B',
			'start_station_name': null,
			'start_time': null,
			'value': '\u62A4\u7167'
		}, {
			'end_station_name': null,
			'end_time': null,
			'id': 'H',
			'start_station_name': null,
			'start_time': null,
			'value': '\u5916\u56FD\u4EBA\u6C38\u4E45\u5C45\u7559\u8EAB\u4EFD\u8BC1'
		}
	],
	'isAsync': '1',
	'key_check_isChange': '664E9B56DFFCA1A5581CA221CB48603E6388B24E7F9571D09971C38A',
	'leftDetails': ['\u4E00\u7B49\u5EA7(141.00\u5143)\u6709\u7968', '\u4E8C\u7B49\u5EA7(88.00\u5143)\u6709\u7968', '\u65E0\u5EA7(88.00\u5143)\u65E0\u7968'],
	'leftTicketStr': 'CpauKiBjfE9MkKA4zZDHmpK5dw1cvftCVI%2Bpf%2Boeyc77ypIN',
	'limitBuySeatTicketDTO': {
		'seat_type_codes': [{
				'end_station_name': null,
				'end_time': null,
				'id': 'M',
				'start_station_name': null,
				'start_time': null,
				'value': '\u4E00\u7B49\u5EA7'
			}, {
				'end_station_name': null,
				'end_time': null,
				'id': 'O',
				'start_station_name': null,
				'start_time': null,
				'value': '\u4E8C\u7B49\u5EA7'
			}
		],
		'ticket_seat_codeMap': {
			'3': [{
					'end_station_name': null,
					'end_time': null,
					'id': 'O',
					'start_station_name': null,
					'start_time': null,
					'value': '\u4E8C\u7B49\u5EA7'
				}
			],
			'2': [{
					'end_station_name': null,
					'end_time': null,
					'id': 'M',
					'start_station_name': null,
					'start_time': null,
					'value': '\u4E00\u7B49\u5EA7'
				}, {
					'end_station_name': null,
					'end_time': null,
					'id': 'O',
					'start_station_name': null,
					'start_time': null,
					'value': '\u4E8C\u7B49\u5EA7'
				}
			],
			'1': [{
					'end_station_name': null,
					'end_time': null,
					'id': 'M',
					'start_station_name': null,
					'start_time': null,
					'value': '\u4E00\u7B49\u5EA7'
				}, {
					'end_station_name': null,
					'end_time': null,
					'id': 'O',
					'start_station_name': null,
					'start_time': null,
					'value': '\u4E8C\u7B49\u5EA7'
				}
			],
			'4': [{
					'end_station_name': null,
					'end_time': null,
					'id': 'M',
					'start_station_name': null,
					'start_time': null,
					'value': '\u4E00\u7B49\u5EA7'
				}, {
					'end_station_name': null,
					'end_time': null,
					'id': 'O',
					'start_station_name': null,
					'start_time': null,
					'value': '\u4E8C\u7B49\u5EA7'
				}
			]
		},
		'ticket_type_codes': [{
				'end_station_name': null,
				'end_time': null,
				'id': '1',
				'start_station_name': null,
				'start_time': null,
				'value': '\u6210\u4EBA\u7968'
			}, {
				'end_station_name': null,
				'end_time': null,
				'id': '2',
				'start_station_name': null,
				'start_time': null,
				'value': '\u513F\u7AE5\u7968'
			}, {
				'end_station_name': null,
				'end_time': null,
				'id': '3',
				'start_station_name': null,
				'start_time': null,
				'value': '\u5B66\u751F\u7968'
			}, {
				'end_station_name': null,
				'end_time': null,
				'id': '4',
				'start_station_name': null,
				'start_time': null,
				'value': '\u6B8B\u519B\u7968'
			}
		]
	},
	'maxTicketNum': '5',
	'orderRequestDTO': {
		'adult_num': 0,
		'apply_order_no': null,
		'bed_level_order_num': null,
		'bureau_code': null,
		'cancel_flag': null,
		'card_num': null,
		'channel': null,
		'child_num': 0,
		'choose_seat': null,
		'disability_num': 0,
		'end_time': {
			'date': 1,
			'day': 4,
			'hours': 9,
			'minutes': 5,
			'month': 0,
			'seconds': 0,
			'time': 3900000,
			'timezoneOffset': -480,
			'year': 70
		},
		'exchange_train_flag': '1',
		'from_station_name': '\u6DF1\u5733\u5317',
		'from_station_telecode': 'IOQ',
		'get_ticket_pass': null,
		'id_mode': 'Y',
		'isShowPassCode': null,
		'leftTicketGenTime': null,
		'order_date': null,
		'passengerFlag': null,
		'realleftTicket': null,
		'reqIpAddress': null,
		'reqTimeLeftStr': null,
		'reserve_flag': 'A',
		'seat_detail_type_code': null,
		'seat_type_code': null,
		'sequence_no': null,
		'start_time': {
			'date': 1,
			'day': 4,
			'hours': 7,
			'minutes': 25,
			'month': 0,
			'seconds': 0,
			'time': -2100000,
			'timezoneOffset': -480,
			'year': 70
		},
		'start_time_str': null,
		'station_train_code': 'D2352',
		'student_num': 0,
		'ticket_num': 0,
		'ticket_type_order_num': null,
		'to_station_name': '\u666E\u5B81',
		'to_station_telecode': 'PEQ',
		'tour_flag': 'dc',
		'trainCodeText': null,
		'train_date': {
			'date': 8,
			'day': 1,
			'hours': 0,
			'minutes': 0,
			'month': 3,
			'seconds': 0,
			'time': 1554652800000,
			'timezoneOffset': -480,
			'year': 119
		},
		'train_date_str': null,
		'train_location': null,
		'train_no': '6i000D23520C',
		'train_order': null,
		'varStr': null
	},
	'purpose_codes': '00',
	'queryLeftNewDetailDTO': {
		'BXRZ_num': '-1',
		'BXRZ_price': '0',
		'BXYW_num': '-1',
		'BXYW_price': '0',
		'EDRZ_num': '-1',
		'EDRZ_price': '0',
		'EDSR_num': '-1',
		'EDSR_price': '0',
		'ERRB_num': '-1',
		'ERRB_price': '0',
		'GG_num': '-1',
		'GG_price': '0',
		'GR_num': '-1',
		'GR_price': '0',
		'HBRW_num': '-1',
		'HBRW_price': '0',
		'HBRZ_num': '-1',
		'HBRZ_price': '0',
		'HBYW_num': '-1',
		'HBYW_price': '0',
		'HBYZ_num': '-1',
		'HBYZ_price': '0',
		'RW_num': '-1',
		'RW_price': '0',
		'RZ_num': '-1',
		'RZ_price': '0',
		'SRRB_num': '-1',
		'SRRB_price': '0',
		'SWZ_num': '-1',
		'SWZ_price': '0',
		'TDRZ_num': '-1',
		'TDRZ_price': '0',
		'TZ_num': '-1',
		'TZ_price': '0',
		'WZ_num': '0',
		'WZ_price': '00880',
		'WZ_seat_type_code': 'O',
		'YB_num': '-1',
		'YB_price': '0',
		'YDRZ_num': '-1',
		'YDRZ_price': '0',
		'YDSR_num': '-1',
		'YDSR_price': '0',
		'YRRB_num': '-1',
		'YRRB_price': '0',
		'YW_num': '-1',
		'YW_price': '0',
		'YYRW_num': '-1',
		'YYRW_price': '0',
		'YZ_num': '-1',
		'YZ_price': '0',
		'ZE_num': '217',
		'ZE_price': '00880',
		'ZY_num': '68',
		'ZY_price': '01410',
		'arrive_time': '0905',
		'control_train_day': '',
		'controlled_train_flag': null,
		'controlled_train_message': null,
		'day_difference': null,
		'end_station_name': null,
		'end_station_telecode': null,
		'from_station_name': '\u6DF1\u5733\u5317',
		'from_station_telecode': 'IOQ',
		'is_support_card': null,
		'lishi': '01:40',
		'seat_feature': '',
		'start_station_name': null,
		'start_station_telecode': null,
		'start_time': '0725',
		'start_train_date': '',
		'station_train_code': 'D2352',
		'to_station_name': '\u666E\u5B81',
		'to_station_telecode': 'PEQ',
		'train_class_name': null,
		'train_no': '6i000D23520C',
		'train_seat_feature': '',
		'yp_ex': ''
	},
	'queryLeftTicketRequestDTO': {
		'arrive_time': '09:05',
		'bigger20': 'Y',
		'exchange_train_flag': '1',
		'from_station': 'IOQ',
		'from_station_name': '\u6DF1\u5733\u5317',
		'from_station_no': '01',
		'lishi': '01:40',
		'login_id': null,
		'login_mode': null,
		'login_site': null,
		'purpose_codes': '00',
		'query_type': null,
		'seatTypeAndNum': null,
		'seat_types': 'OMO',
		'start_time': '07:25',
		'start_time_begin': null,
		'start_time_end': null,
		'station_train_code': 'D2352',
		'ticket_type': null,
		'to_station': 'PEQ',
		'to_station_name': '\u666E\u5B81',
		'to_station_no': '04',
		'train_date': '20190408',
		'train_flag': null,
		'train_headers': null,
		'train_no': '6i000D23520C',
		'useMasterPool': true,
		'useWB10LimitTime': true,
		'usingGemfireCache': false,
		'ypInfoDetail': 'CpauKiBjfE9MkKA4zZDHmpK5dw1cvftCVI%2Bpf%2Boeyc77ypIN'
	},
	'tour_flag': 'dc',
	'train_location': 'Q9'
};

var orderRequestDTO = {
	'adult_num': 0,
	'apply_order_no': null,
	'bed_level_order_num': null,
	'bureau_code': null,
	'cancel_flag': null,
	'card_num': null,
	'channel': null,
	'child_num': 0,
	'choose_seat': null,
	'disability_num': 0,
	'end_time': {
		'date': 1,
		'day': 4,
		'hours': 9,
		'minutes': 5,
		'month': 0,
		'seconds': 0,
		'time': 3900000,
		'timezoneOffset': -480,
		'year': 70
	},
	'exchange_train_flag': '1',
	'from_station_name': '\u6DF1\u5733\u5317',
	'from_station_telecode': 'IOQ',
	'get_ticket_pass': null,
	'id_mode': 'Y',
	'isShowPassCode': null,
	'leftTicketGenTime': null,
	'order_date': null,
	'passengerFlag': null,
	'realleftTicket': null,
	'reqIpAddress': null,
	'reqTimeLeftStr': null,
	'reserve_flag': 'A',
	'seat_detail_type_code': null,
	'seat_type_code': null,
	'sequence_no': null,
	'start_time': {
		'date': 1,
		'day': 4,
		'hours': 7,
		'minutes': 25,
		'month': 0,
		'seconds': 0,
		'time': -2100000,
		'timezoneOffset': -480,
		'year': 70
	},
	// 'start_tim
}

