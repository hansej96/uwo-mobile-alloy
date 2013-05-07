if (OS_IOS || OS_MOBILEWEB) {
    function uwoshkoshClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkosh');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://twitter.com/uwoshkosh",
            title: "@uwoshkosh"
        }).getView());
    }

    function uwoshkoshTodayClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshToday');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshToday",
            title: "@UWOshkoshToday"
        }).getView());
    }

    function uwoshkoshEngageClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshEngage');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshEngage",
            title: "@UWOshkoshEngage"
        }).getView());
    }

    function uwoAdmissionsClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOAdmissions');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://twitter.com/UWOAdmissions",
            title: "@UWOAdmissions"
        }).getView());
    }

    function uwoshkoshTitansClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshTitans');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshTitans",
            title: "@UWOshkoshTitans"
        }).getView());
    }

} else {
    function uwoshkoshClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkosh');
        Ti.Platform.openURL("https://twitter.com/uwoshkosh");
    }

    function uwoshkoshTodayClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshToday');
        Ti.Platform.openURL("https://twitter.com/UWOshkoshToday");
    }

    function uwoshkoshEngageClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshEngage');
        Ti.Platform.openURL("https://twitter.com/UWOshkoshEngage");
    }

    function uwoAdmissionsClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOAdmissions');
        Ti.Platform.openURL("https://twitter.com/UWOAdmissions");
    }

    function uwoshkoshTitansClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshTitans');
        Ti.Platform.openURL("https://twitter.com/UWOshkoshTitans");
    }

}
