var portal = require("myuwoWS");

function authSuccess() {
    Ti.App.Properties.setBool("myUwoAuth", true);

    if (OS_IOS || OS_MOBILEWEB) {
        Titanium.Analytics.featureEvent('titanCard');
        Alloy.Globals.navwindow.openWindow(Alloy.createController('titancard').getView());
    } else {
        Titanium.Analytics.featureEvent('titanCard');
        Alloy.createController('titancard').getView().open();
    }
}

function loginClick(e) {
    $.username.blur();
    $.password.blur();

    if ($.username.value !== '' && $.password.value !== '') {
        var params = {
            username: $.username.value,
            password: $.password.value,
            success: authSuccess,
            onerror: function () {
                alert("An error occured");
            }
        };
        portal.auth(params);
    } else {
        alert("Username/Password are required");
    }
}

function loginAndroidClick(e) {
    $.username.blur();
    $.password.blur();

    if ($.username.value !== '' && $.password.value !== '') {
        var params = {
            username: $.username.value,
            password: $.password.value,
            success: authSuccess,
            onerror: function () {
                alert("An error occured");
            }
        };
        portal.auth(params);
    } else {
        alert("Username/Password are required");
    }
}
