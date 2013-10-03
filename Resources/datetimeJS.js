var strtotime = function(str, now) {
    var i, match, s, strTmp = "", parse = "";
    strTmp = str;
    strTmp = strTmp.replace(/\s{2,}|^\s|\s$/g, " ");
    strTmp = strTmp.replace(/[\t\r\n]/g, "");
    if ("now" == strTmp) return new Date().getTime() / 1e3;
    if (!isNaN(parse = Date.parse(strTmp))) return parse / 1e3;
    now = now ? new Date(1e3 * now) : new Date();
    strTmp = strTmp.toLowerCase();
    var __is = {
        day: {
            sun: 0,
            mon: 1,
            tue: 2,
            wed: 3,
            thu: 4,
            fri: 5,
            sat: 6
        },
        mon: {
            jan: 0,
            feb: 1,
            mar: 2,
            apr: 3,
            may: 4,
            jun: 5,
            jul: 6,
            aug: 7,
            sep: 8,
            oct: 9,
            nov: 10,
            dec: 11
        }
    };
    var process = function(m) {
        var ago = m[2] && "ago" == m[2];
        var num = (num = "last" == m[0] ? -1 : 1) * (ago ? -1 : 1);
        switch (m[0]) {
          case "last":
          case "next":
            switch (m[1].substring(0, 3)) {
              case "yea":
                now.setFullYear(now.getFullYear() + num);
                break;

              case "mon":
                now.setMonth(now.getMonth() + num);
                break;

              case "wee":
                now.setDate(now.getDate() + 7 * num);
                break;

              case "day":
                now.setDate(now.getDate() + num);
                break;

              case "hou":
                now.setHours(now.getHours() + num);
                break;

              case "min":
                now.setMinutes(now.getMinutes() + num);
                break;

              case "sec":
                now.setSeconds(now.getSeconds() + num);
                break;

              default:
                var day;
                if ("undefined" != typeof (day = __is.day[m[1].substring(0, 3)])) {
                    var diff = day - now.getDay();
                    0 === diff ? diff = 7 * num : diff > 0 ? "last" == m[0] && (diff -= 7) : "next" == m[0] && (diff += 7);
                    now.setDate(now.getDate() + diff);
                }
            }
            break;

          default:
            if (!/\d+/.test(m[0])) return false;
            num *= parseInt(m[0], 10);
            switch (m[1].substring(0, 3)) {
              case "yea":
                now.setFullYear(now.getFullYear() + num);
                break;

              case "mon":
                now.setMonth(now.getMonth() + num);
                break;

              case "wee":
                now.setDate(now.getDate() + 7 * num);
                break;

              case "day":
                now.setDate(now.getDate() + num);
                break;

              case "hou":
                now.setHours(now.getHours() + num);
                break;

              case "min":
                now.setMinutes(now.getMinutes() + num);
                break;

              case "sec":
                now.setSeconds(now.getSeconds() + num);
            }
        }
        return true;
    };
    match = strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
    if (null !== match) {
        match[2] ? match[3] || (match[2] += ":00") : match[2] = "00:00:00";
        s = match[1].split(/-/g);
        for (i in __is.mon) __is.mon[i] == s[1] - 1 && (s[1] = i);
        s[0] = parseInt(s[0], 10);
        s[0] = s[0] >= 0 && 69 >= s[0] ? "20" + (10 > s[0] ? "0" + s[0] : s[0] + "") : s[0] >= 70 && 99 >= s[0] ? "19" + s[0] : s[0] + "";
        return parseInt(this.strtotime(s[2] + " " + s[1] + " " + s[0] + " " + match[2]) + (match[4] ? match[4] / 1e3 : ""), 10);
    }
    var regex = "([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?";
    match = strTmp.match(new RegExp(regex, "gi"));
    if (null === match) return false;
    for (i = 0; match.length > i; i++) if (!process(match[i].split(" "))) return false;
    return now.getTime() / 1e3;
};

var dayToName = function(day) {
    switch (day) {
      case 0:
        return "Sunday";

      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wednesday";

      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";
    }
};

var monthToName = function(month) {
    switch (month) {
      case 1:
        return "January";

      case 2:
        return "February";

      case 3:
        return "March";

      case 4:
        return "April";

      case 5:
        return "May";

      case 6:
        return "June";

      case 7:
        return "July";

      case 8:
        return "August";

      case 9:
        return "September";

      case 10:
        return "October";

      case 11:
        return "November";

      case 12:
        return "December";
    }
};

var prettyDate = function(time) {
    var monthname = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    var date = new Date(1e3 * time), diff = (new Date().getTime() - date.getTime()) / 1e3, day_diff = Math.floor(diff / 86400);
    if (isNaN(day_diff) || 0 > day_diff) return "";
    if (day_diff >= 31) {
        var date_year = date.getFullYear();
        var month_name = monthname[date.getMonth()];
        var date_month = date.getMonth() + 1;
        10 > date_month && (date_month = "0" + date_month);
        var date_monthday = date.getDate();
        10 > date_monthday && (date_monthday = "0" + date_monthday);
        return date_monthday + " " + month_name + " " + date_year;
    }
    return 0 === day_diff && (60 > diff && "just now" || 120 > diff && "1 minute ago" || 3600 > diff && Math.floor(diff / 60) + " minutes ago" || 7200 > diff && "1 hour ago" || 86400 > diff && "about " + Math.floor(diff / 3600) + " hours ago") || 1 == day_diff && "Yesterday" || 7 > day_diff && day_diff + " days ago" || 31 > day_diff && Math.ceil(day_diff / 7) + " week" + (1 == Math.ceil(day_diff / 7) ? "" : "s") + " ago";
};

exports.getTwitterInterval = function(strDateTime) {
    return prettyDate(strtotime(strDateTime));
};

exports.cleanDate = function(date) {
    var label;
    switch (date.getDate()) {
      case 1:
        label = "st";
        break;

      case 2:
        label = "nd";
        break;

      default:
        label = "th";
    }
    return dayToName(date.getDay()) + ", " + monthToName(date.getMonth() + 1) + " " + date.getDate() + label;
};

exports.cleanTime = function(time) {
    var shortTime = time.substr(11, 5);
    var mins = shortTime.substr(2, 5);
    var hour = parseFloat(shortTime.slice(0, 2));
    var ampm = "AM";
    if (12 == hour) ampm = "PM"; else if (hour >= 12) {
        hour -= 12;
        ampm = "PM";
    }
    return hour + "" + mins + ampm;
};

exports.cleanShortTime = function(time) {
    var shortTime = time.toLocaleTimeString();
    var mins = shortTime.substr(2, 5);
    var hour = parseFloat(shortTime.substr(0, 2));
    var ampm = "AM";
    if (12 == hour) ampm = "PM"; else if (hour >= 12) {
        hour -= 12;
        ampm = "PM";
    }
    return hour + "" + mins + ampm;
};