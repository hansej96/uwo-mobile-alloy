function titanWebClick(e) {
    Titanium.Analytics.featureEvent('titanWebQuickLinks');
    Ti.Platform.openURL("https://titanweb5.uwosh.edu/titanweb_prd/signon.html");
}

function d2lClick(e) {
    Titanium.Analytics.featureEvent('d2lQuickLinks');
    Ti.Platform.openURL("https://uwosh.courses.wisconsin.edu/Shibboleth.sso/Login?target=https://uwosh.courses.wisconsin.edu/d2l/shibbolethSSO/deepLinkLogin.d2l");
}

function titanEmailClick(e) {
    Titanium.Analytics.featureEvent('titanEmailQuickLinks');
    Ti.Platform.openURL("https://mail.google.com");
}

function mobileSetupClick(e) {
    Titanium.Analytics.featureEvent('mobileSetupQuickLinks');
    Ti.Platform.openURL("http://www.uwosh.edu/titanapps/mobile-devices");
}
