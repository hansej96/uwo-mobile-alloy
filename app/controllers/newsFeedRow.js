var args = arguments[0] || {};
var row = [];
row.feedItem = args.item;

var moment = require("alloy/moment");
var day = moment(row.feedItem.date);

$.row.articleUrl = row.feedItem.link;
$.title.text = row.feedItem.title;
$.date.text = day.format("dddd, MMMM Do YYYY, h:mm:ss a");

if (OS_IOS || OS_MOBILEWEB) {
    function openArticle(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: row.feedItem.link, title: row.feedItem.title}).getView());
    }
} else {
    function openArticle(e) {
        Alloy.createController('webViews', { url: row.feedItem.link, title: row.feedItem.title}).getView().open();
    }
}