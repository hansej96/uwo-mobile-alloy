function newsClick(e) {
    Titanium.Analytics.featureEvent('srwcNews');
    Ti.Platform.openURL("http://recreation.uwosh.edu/news-box");
}

function membershipClick(e) {
    Titanium.Analytics.featureEvent('srwcMembership');
    Ti.Platform.openURL("http://recreation.uwosh.edu/studentrecreationfacilities/studentrecreationfacilities/student-recreation-wellness-center-membership");
}

function featuresClick(e) {
    Titanium.Analytics.featureEvent('srwcFeatures');
    Ti.Platform.openURL("http://recreation.uwosh.edu/studentrecreationfacilities/studentrecreationfacilities/srwc-features");
}

function policiesClick(e) {
    Titanium.Analytics.featureEvent('srwcPolicies');
    Ti.Platform.openURL("http://recreation.uwosh.edu/studentrecreationfacilities/studentrecreationfacilities/student-recreation-wellness-center-policies");
}

function parkingClick(e) {
    Titanium.Analytics.featureEvent('srwcParking');
    Ti.Platform.openURL("http://recreation.uwosh.edu/studentrecreationfacilities/srwc-parking");
}
