function ActivityIndicator() {
    if ("android" === Ti.Platform.osname) activityIndicator = Ti.UI.createActivityIndicator({
        color: "#fff"
    }); else {
        activityIndicator = Ti.UI.createWindow({
            modal: false,
            navBarHidden: true,
            touchEnabled: true
        });
        var view = Ti.UI.createView({
            backgroundColor: "#000",
            height: "100%",
            width: "100%",
            opacity: .65
        });
        var ai = Ti.UI.createActivityIndicator({
            style: Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
            color: "#fff"
        });
        activityIndicator.ai = ai;
        activityIndicator.add(view);
        activityIndicator.add(ai);
    }
}

var isShowing = false, myTimeout, activityIndicator;

ActivityIndicator.prototype.showModal = function(message, timeout, timeoutMessage) {
    if (isShowing) return;
    isShowing = true;
    if ("android" === Ti.Platform.osname) {
        activityIndicator.message = message;
        activityIndicator.show();
    } else {
        activityIndicator.ai.message = message;
        activityIndicator.ai.show();
        activityIndicator.open({
            animated: false
        });
    }
    timeout && (myTimeout = setTimeout(function() {
        ActivityIndicator.prototype.hideModal();
        if (timeoutMessage) {
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Update Timeout",
                message: timeoutMessage,
                buttonNames: [ "OK" ]
            });
            alertDialog.show();
        }
    }, timeout));
};

ActivityIndicator.prototype.hideModal = function() {
    if (void 0 !== myTimeout) {
        clearTimeout(myTimeout);
        myTimeout = void 0;
    }
    if (isShowing) {
        isShowing = false;
        if ("android" === Ti.Platform.osname) activityIndicator.hide(); else {
            activityIndicator.ai.hide();
            activityIndicator.close({
                animated: false
            });
        }
    }
};

module.exports = ActivityIndicator;