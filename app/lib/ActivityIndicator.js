/**
 * Class: ActivityIndicator
 *   builds a transparent window that can be used to show and hide a loading message
 */

var isShowing = false,
  myTimeout, activityIndicator;

function ActivityIndicator() {

  if(Ti.Platform.osname === 'android') {
    activityIndicator = Ti.UI.createActivityIndicator({
      color: '#fff'
    });
  } else {
    activityIndicator = Ti.UI.createWindow({
      modal: false,
      navBarHidden: true,
      touchEnabled: true
    });

    var view = Ti.UI.createView({
      backgroundColor: '#000',
      height: '100%',
      width: '100%',
      opacity: 0.65
    });
    var ai = Ti.UI.createActivityIndicator({
      style: Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
      color: '#fff'
    });
    activityIndicator.ai = ai;
    activityIndicator.add(view);
    activityIndicator.add(ai);
  }
}

ActivityIndicator.prototype.showModal = function(message, timeout, timeoutMessage) {

  if(isShowing) {
    return;
  }
  isShowing = true;
  if(Ti.Platform.osname === 'android') {
    activityIndicator.message = message;
    activityIndicator.show();
  } else {
    activityIndicator.ai.message = message;
    activityIndicator.ai.show();
    activityIndicator.open({
      animated: false
    });
  }

  if(timeout) {
    myTimeout = setTimeout(function() {
      ActivityIndicator.prototype.hideModal();
      if(timeoutMessage) {
        var alertDialog = Ti.UI.createAlertDialog({
          title: 'Update Timeout',
          message: timeoutMessage,
          buttonNames: ['OK']
        });
        alertDialog.show();
      }
    }, timeout);
  }
};

ActivityIndicator.prototype.hideModal = function() {
  if(myTimeout !== undefined) {
    clearTimeout(myTimeout);
    myTimeout = undefined;
  }
  if(isShowing) {
    isShowing = false;
    if(Ti.Platform.osname === 'android') {
      activityIndicator.hide();
    } else {
      activityIndicator.ai.hide();
      activityIndicator.close({
        animated: false
      });
    }
  }
};

module.exports = ActivityIndicator;
