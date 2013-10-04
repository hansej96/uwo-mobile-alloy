function requestSafeWalkClick(e) {
        Titanium.Analytics.featureEvent('requestSafewalk');
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Safewalk request from " + $.firstName.value;
        emailDialog.toRecipients = ['hansens@uwosh.edu'];
        emailDialog.messageBody = $.firstName.value + " " + $.lastName.value + "\n" + $.emailAddress.value + "\n\n" + $.startingLocation.value + "\n" + $.endingLocation.value + "\n\n" + $.phoneNumber.value + "\n\n" + $.identifier.value;
        emailDialog.open();
    }