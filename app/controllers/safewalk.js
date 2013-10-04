function requestSafeWalkClick(e) {
        Titanium.Analytics.featureEvent('requestSafewalk');
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Safewalk request from " + $.firstName.value + " " + $.lastName.value;
        emailDialog.toRecipients = ['hansens@uwosh.edu'];
        emailDialog.messageBody = "FN: " + $.firstName.value + "\n"
            + "LN: " + $.lastName.value + "\n\n"
            + "EMAIL: " + $.emailAddress.value + "\n\n"
            + "SL: " + $.startingLocation.value + "\n\n"
            + "EL: " + $.endingLocation.value + "\n\n"
            + "P: " + $.phoneNumber.value + "\n\n"
            + "ID: " + $.identifier.value;
        emailDialog.open();
}

if (OS_IOS) {
    var startingHint = "Please list the address or intersection you are currently located at.";
    var endingHint = "What address or intersection would you like a CSO to provide a Safewalk to?";
    var callbackHint = "Please provide a phone number we can reach you at to confirm when our CSOs will arrive at your location.";
    var identifyHint = "To help us identify you upon arrival, please provide a brief description of your clothing.";
    
    startingHintText(startingHint);
    
    $.startingLocation.addEventListener('focus', function(e) {
        if($.startingLocation.value == startingHint){
            $.startingLocation.setValue("");
        }
    });
    $.startingLocation.addEventListener('blur', function(e) {
        startingHintText();
    });
    
    function startingHintText(hintText){   
        if ($.startingLocation.value.length == 0) {
            $.startingLocation.setValue(hintText);
        }
 
    }

}
