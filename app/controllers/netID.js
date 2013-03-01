var portal = require("myuwoWS");

function loginClick (e) {
    $.userName.blur();
    $.password.blur();

    if (username.value !== '' && password.value !== '') {
        var params = {
            username: $.username.value,
            password: password.value,
            success: authSuccess,
            onerror: function() {
                alert("An error occured")
            }
        };
        portal.auth(params);
    }
}