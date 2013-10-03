function requestSafeWalkClick(e) {
        Titanium.Analytics.featureEvent('requestSafewalk');
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Safewalk request";
        emailDialog.toRecipients = ['hansens@uwosh.edu'];
        emailDialog.messageBody = '<b>I need a Safewalk!</b>';
        emailDialog.open();
    }