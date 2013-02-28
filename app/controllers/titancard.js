var portal = require("myuwoWS"),
    login;

function authSuccess(){
    Ti.App.Properties.setBool("myUwoAuth", true);
    Ti.App.fireEvent('return.auth');
}

