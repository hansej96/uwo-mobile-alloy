var args = arguments[0] || {};
var row = [];
row.feedItem = args.item;

var moment = require("alloy/moment");
var day = moment(row.feedItem.date);

$.row.articleUrl = row.feedItem.link;
$.title.text = row.feedItem.title;
$.date.text = day.format("dddd, MMMM Do YYYY, h:mm:ss a");

function openArticle(e) {
    Ti.Platform.openURL(row.feedItem.link);
}
