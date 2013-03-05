var webservices = require("libraryWS"),
    moment = require("alloy/moment");

function hours(nowOpen, hours, entry) {
    $.currently.text = "Currently: " + nowOpen;
    $.todayHours.text = "Today's Hours: " + moment(hours[0].open).format("h:mm a") + " - " + moment(hours[0].close).format("h:mm a");

    $.day1.text = hours[1].title;
    $.day1Hours.text = moment(hours[1].open).format("h:mm a") + " - " + moment(hours[1].close).format("h:mm a");
    $.day2.text = hours[2].title;
    $.day2Hours.text = moment(hours[2].open).format("h:mm a") + " - " + moment(hours[2].close).format("h:mm a");
    $.day3.text = hours[3].title;
    $.day3Hours.text = moment(hours[3].open).format("h:mm a") + " - " + moment(hours[3].close).format("h:mm a");
    $.day4.text = hours[4].title;
    $.day4Hours.text = moment(hours[4].open).format("h:mm a") + " - " + moment(hours[4].close).format("h:mm a");
}

function getLibrary(entry) {
    webservices.hours({
        success: hours,
        onerror: onerror,
        entry: entry
    });
}

function onerror() {
    alert("There was an error retrieving the library hours");
}

if(Ti.Network.online) {
    getLibrary("Hours");
} else {
    alert("No network connection detected");
}