function Controller() {
    function openArticle() {
        Titanium.Analytics.featureEvent("newsFeedItem");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("webViews", {
            url: row.feedItem.link,
            title: row.feedItem.title
        }).getView());
    }
    function openArticleAndroid() {
        Titanium.Analytics.featureEvent("newsFeedItem");
        Ti.Platform.openURL(row.feedItem.link);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsFeedRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        height: 70,
        hasChild: true,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    openArticle ? $.__views.row.addEventListener("click", openArticle) : __defers["$.__views.row!click!openArticle"] = true;
    $.__views.date = Ti.UI.createLabel({
        color: "#999",
        font: {
            fontSize: 8
        },
        bottom: 2,
        left: 5,
        id: "date"
    });
    $.__views.row.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 14
        },
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
        id: "title"
    });
    $.__views.row.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var row = [];
    row.feedItem = args.item;
    var moment = require("alloy/moment");
    var day = moment(row.feedItem.date);
    $.row.articleUrl = row.feedItem.link;
    $.title.text = row.feedItem.title;
    $.date.text = day.format("dddd, MMMM Do YYYY, h:mm:ss a");
    __defers["$.__views.row!click!openArticle"] && $.__views.row.addEventListener("click", openArticle);
    __defers["$.__views.row!click!openArticleAndroid"] && $.__views.row.addEventListener("click", openArticleAndroid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;