var portal = require("myuwoWS"),
    header = require("HeaderRow"),
    ActivityIndicator = require("ActivityIndicator"),
    login;

function logout() {
    Ti.App.Properties.setBool("myUwoAuth", false);
    Alloy.createController('index').getView().open();
    alert("You have been logged out");
}

function response(json) {
    var data = json;

    $.tdbalance.text = "$" + json.d.TitanDollars;
    $.bmBalance.text = json.d.BoardMealCount;
    $.flexBalance.text = json.d.FlexMeals;
    $.diningBalance.text = "$" + json.d.DiningDollars;
}

portal.titanCard({
    success: response,
    onerror: function() {
        alert("An error occurred");
    }
});