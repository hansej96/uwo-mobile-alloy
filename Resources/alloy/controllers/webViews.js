function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webViews";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.webViewWindow = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "webViewWindow",
        modal: "true"
    });
    $.__views.webViewWindow && $.addTopLevelView($.__views.webViewWindow);
    $.__views.web = Ti.UI.createWebView({
        id: "web"
    });
    $.__views.webViewWindow.add($.__views.web);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var button = Ti.UI.createButton({
        title: "Browser"
    });
    button.addEventListener("click", function() {
        Titanium.Analytics.featureEvent("openInBrowser");
        Ti.Platform.openURL(args.url);
    });
    $.webViewWindow.rightNavButton = button;
    $.web.url = args.url;
    $.webViewWindow.title = args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;