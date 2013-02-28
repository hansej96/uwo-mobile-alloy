var styles = require("styles"),
    portal = require("myuwoWS"),
    header = require("HeaderRow"),
    ActivityIndicator = require("ActivityIndicator"),
    login;

function authSuccess(){
    Ti.App.Properties.setBool("myUwoAuth", true);
    Ti.App.fireEvent('return.auth');
}

