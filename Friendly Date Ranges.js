function makeFriendlyDates(arr) {
	var arr1, arr2; //制作结果容器
	var arry = [];


	// 将数组字符串拆分开
	var a = arr[0].toString().split("-");
	var b = arr[1].toString().split("-");

	// 把数字转换为字符串
	var mouth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var day = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];

	// 把时间变为时间戳  到1970年的毫秒数
	var sd = new Date();
	sd.setFullYear(a[0]);
	sd.setMonth(a[1] - 1);
	sd.setDate(a[2]);


	var ed = new Date();
	ed.setFullYear(b[0]);
	ed.setMonth(b[1] - 1);
	ed.setDate(b[2]);
	// 一年的毫秒数
	var dayms;
	dayms = 24 * 60 * 60 * 1000 * 365;
	// 超出时间范围
	if (a[0] > 9999 || a[0] < 1000 || a[1] < 1 || a[1] > 12 || a[2] < 1 || a[2] > 31 || b[0] > 9999 || b[0] < 1000 || b[1] < 1 || b[1] > 12 || b[2] < 1 || b[2] > 31) {
		return undefined;
	}
	//起始时间大于终止时间
	if (sd > ed) {
		return undefined;
	}
	// 获取今年的年份
	var nd = new Date();
	nowyear = nd.getFullYear();

	// 拼接为最终结果
	arry1 = mouth[a[1] - 1] + " " + day[a[2] - 1] + ", " + a[0];
	arry2 = mouth[b[1] - 1] + ' ' + day[b[2] - 1] + ", " + b[0];



	// 起止时间差在一年以内
	if ((ed - sd) < dayms) {
		arry2 = arry2.replace(b[0], '');
		arry2 = arry2.replace(", ", '');
		// 同年以内的月份相同
		if (a[1] == b[1] && a[0] == b[0]) {
			arry2 = arry2.replace(mouth[b[1] - 1], '');
			arry2 = arry2.replace(" ", '');
			// 日期相同
			if (a[2] == b[2]) {
				arry2 = arry2.replace(day[b[2] - 1], '');
			}
		}
	}
	// 一年以内且开头日期是今年的
	if ((ed - sd) < dayms) {
		if (a[0] == nowyear) {
			arry1 = arry1.replace(a[0], '');
			arry1 = arry1.replace(", ", '');

		}
	}

	// 通常情况
	if (arry2) {
		arry.push(arry1);
		arry.push(arry2);
		// 同一天  
	} else if (a[0] == b[0]) {
		arry.push(arry1);
	} else { //刚好相差一年  特殊情况
		arry = arry1;
	}
	return arry;
}
makeFriendlyDates(["2002-12-20", "2001-12-20"]);
