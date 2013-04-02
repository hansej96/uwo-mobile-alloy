function titanAlertClick(e) {
    Titanium.Analytics.featureEvent('titanAlertClick');
    Ti.Platform.openURL("http://www.uwosh.edu/home/titanalert/");
}

function campusPoliceClick(e) {
    Titanium.Analytics.featureEvent('callCampusPolice');
    Ti.Platform.openURL("tel:9204241212");
}

function riskManagementClick(e) {
    Titanium.Analytics.featureEvent('callRiskManagement');
    Ti.Platform.openURL("tel:9204241191");
}

function facilitiesClick(e) {
    Titanium.Analytics.featureEvent('callFacilities');
    Ti.Platform.openURL("tel:9204243466");
}

function safeWalkClick(e) {
    Titanium.Analytics.featureEvent('callSafeWalk');
    Ti.Platform.openURL("tel:9204241212");
}

function crisisHotlineClick(e) {
    Titanium.Analytics.featureEvent('callCrisisHotline');
    Ti.Platform.openURL("tel:9202337707");
}
