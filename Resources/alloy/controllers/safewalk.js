function Controller() {
    function requestSafeWalkClick() {
        Titanium.Analytics.featureEvent("requestSafewalk");
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Safewalk request";
        emailDialog.toRecipients = [ "hansens@uwosh.edu" ];
        emailDialog.messageBody = "<b>I need a Safewalk!</b>";
        emailDialog.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "safewalk";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.safewalk = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        title: "Safewalk",
        id: "safewalk"
    });
    $.__views.safewalk && $.addTopLevelView($.__views.safewalk);
    $.__views.__alloyId216 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId216"
    });
    var __alloyId217 = [];
    __alloyId217.push($.__views.__alloyId216);
    $.__views.__alloyId218 = Ti.UI.createLabel({
        color: "#333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        height: 36,
        text: "Request a Safewalk",
        id: "__alloyId218"
    });
    $.__views.__alloyId216.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId219"
    });
    __alloyId217.push($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        text: "Safe Walks are available within a five-block radius of campus, including Lot No. 39.",
        id: "__alloyId220"
    });
    $.__views.__alloyId219.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId221"
    });
    __alloyId217.push($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId222"
    });
    __alloyId217.push($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
        color: "#C34F1A",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        text: "Community Service Officer Safewalk Program",
        id: "__alloyId223"
    });
    $.__views.__alloyId222.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId224"
    });
    __alloyId217.push($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 14,
            fontWeight: "normal"
        },
        left: 10,
        text: "The safety and security of the UW Oshkosh community is our No. 1 priority. To request a Safewalk, call (920) 424-1212, or complete this form.",
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId226"
    });
    __alloyId217.push($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId227"
    });
    __alloyId217.push($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontSize: 14,
            fontWeight: "normal"
        },
        left: 10,
        text: "You will receive an email verifying that we have received your request, and we will send you a follow-up email letting you know our projected time for getting to your location.",
        id: "__alloyId228"
    });
    $.__views.__alloyId227.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId229"
    });
    __alloyId217.push($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId230"
    });
    __alloyId217.push($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        text: "First Name:",
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId232"
    });
    __alloyId217.push($.__views.__alloyId232);
    $.__views.firstName = Ti.UI.createTextArea({
        width: "80%",
        left: 10,
        id: "firstName"
    });
    $.__views.__alloyId232.add($.__views.firstName);
    $.__views.__alloyId233 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId233"
    });
    __alloyId217.push($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        text: "Last Name:",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId235"
    });
    __alloyId217.push($.__views.__alloyId235);
    $.__views.lastName = Ti.UI.createTextArea({
        width: "80%",
        left: 10,
        id: "lastName"
    });
    $.__views.__alloyId235.add($.__views.lastName);
    $.__views.__alloyId236 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId236"
    });
    __alloyId217.push($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        text: "Email:",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId238"
    });
    __alloyId217.push($.__views.__alloyId238);
    $.__views.emailAddress = Ti.UI.createTextArea({
        width: "80%",
        left: 10,
        id: "emailAddress"
    });
    $.__views.__alloyId238.add($.__views.emailAddress);
    $.__views.__alloyId239 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId239"
    });
    __alloyId217.push($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        text: "Starting Location:",
        id: "__alloyId240"
    });
    $.__views.__alloyId239.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId241"
    });
    __alloyId217.push($.__views.__alloyId241);
    $.__views.startingLocation = Ti.UI.createTextArea({
        width: "80%",
        left: 10,
        id: "startingLocation"
    });
    $.__views.__alloyId241.add($.__views.startingLocation);
    $.__views.__alloyId242 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId242"
    });
    __alloyId217.push($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        text: "Ending Location:",
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId244"
    });
    __alloyId217.push($.__views.__alloyId244);
    $.__views.endingLocation = Ti.UI.createTextArea({
        width: "80%",
        left: 10,
        id: "endingLocation"
    });
    $.__views.__alloyId244.add($.__views.endingLocation);
    $.__views.__alloyId245 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId245"
    });
    __alloyId217.push($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        text: "Call back number:",
        id: "__alloyId246"
    });
    $.__views.__alloyId245.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId247"
    });
    __alloyId217.push($.__views.__alloyId247);
    $.__views.phoneNumber = Ti.UI.createTextArea({
        width: "80%",
        left: 10,
        id: "phoneNumber"
    });
    $.__views.__alloyId247.add($.__views.phoneNumber);
    $.__views.__alloyId248 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId248"
    });
    __alloyId217.push($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createLabel({
        color: "#333333",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        text: "How to identify you:",
        id: "__alloyId249"
    });
    $.__views.__alloyId248.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId250"
    });
    __alloyId217.push($.__views.__alloyId250);
    $.__views.identifier = Ti.UI.createTextArea({
        width: "80%",
        left: 10,
        id: "identifier"
    });
    $.__views.__alloyId250.add($.__views.identifier);
    $.__views.__alloyId251 = Ti.UI.createTableViewRow({
        color: "#333333",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        id: "__alloyId251"
    });
    __alloyId217.push($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createButton({
        title: "Request the Safewalk",
        id: "__alloyId252"
    });
    $.__views.__alloyId251.add($.__views.__alloyId252);
    requestSafeWalkClick ? $.__views.__alloyId252.addEventListener("click", requestSafeWalkClick) : __defers["$.__views.__alloyId252!click!requestSafeWalkClick"] = true;
    $.__views.__alloyId215 = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        data: __alloyId217,
        id: "__alloyId215"
    });
    $.__views.safewalk.add($.__views.__alloyId215);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId252!click!requestSafeWalkClick"] && $.__views.__alloyId252.addEventListener("click", requestSafeWalkClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;