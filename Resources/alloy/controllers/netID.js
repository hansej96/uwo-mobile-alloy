function Controller() {
    function authSuccess() {
        Ti.App.Properties.setBool("myUwoAuth", true);
        Titanium.Analytics.featureEvent("titanCard");
        Alloy.Globals.navwindow.openWindow(Alloy.createController("titancard").getView());
    }
    function loginClick() {
        $.username.blur();
        $.password.blur();
        if ("" !== $.username.value && "" !== $.password.value) {
            var params = {
                username: $.username.value,
                password: $.password.value,
                success: authSuccess,
                onerror: function() {
                    alert("An error occured");
                }
            };
            portal.auth(params);
        } else alert("Username/Password are required");
    }
    function loginAndroidClick() {
        $.username.blur();
        $.password.blur();
        if ("" !== $.username.value && "" !== $.password.value) {
            var params = {
                username: $.username.value,
                password: $.password.value,
                success: authSuccess,
                onerror: function() {
                    alert("An error occured");
                }
            };
            portal.auth(params);
        } else alert("Username/Password are required");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "netID";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.netID = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        layout: "vertical",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "NetID",
        id: "netID"
    });
    $.__views.netID && $.addTopLevelView($.__views.netID);
    $.__views.username = Ti.UI.createTextField({
        width: 300,
        height: 40,
        top: 5,
        color: "#336699",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "username",
        hintText: "Username"
    });
    $.__views.netID.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        width: 300,
        height: 40,
        top: 5,
        color: "#336699",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "password",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.netID.add($.__views.password);
    $.__views.__alloyId133 = Ti.UI.createButton({
        width: 90,
        height: 35,
        top: 10,
        borderRadius: 1,
        title: "Login",
        id: "__alloyId133"
    });
    $.__views.netID.add($.__views.__alloyId133);
    loginClick ? $.__views.__alloyId133.addEventListener("click", loginClick) : __defers["$.__views.__alloyId133!click!loginClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var portal = require("myuwoWS");
    __defers["$.__views.__alloyId133!click!loginClick"] && $.__views.__alloyId133.addEventListener("click", loginClick);
    __defers["$.__views.__alloyId135!click!loginAndroidClick"] && $.__views.__alloyId135.addEventListener("click", loginAndroidClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;