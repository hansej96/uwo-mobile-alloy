var portal = require("myuwoWS");

function authSuccess() {
    Ti.App.Properties.setBool("myUwoAuth", true);
    Ti.App.fireEvent('return.auth');
}

function loginClick (e) {
    $.username.blur();
    $.password.blur();

    if ($.username.value !== '' && $.password.value !== '') {
        var params = {
            username: $.username.value,
            password: $.password.value,
            success: authSuccess,
            onerror: function() {
                alert("An error occured")
            }
        };
        portal.auth(params);
    } else {
        alert("Username/Password are required")
    }
}