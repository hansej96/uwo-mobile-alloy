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
        Alloy.createController('webViews', {
            url: "https://twitter.com/uwoshkosh",
            title: "@uwoshkosh"
        }).getView().open();
    }

    function uwoshkoshTodayClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshToday');
        Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshToday",
            title: "@UWOshkoshToday"
        }).getView().open();
    }

    function uwoshkoshEngageClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshEngage');
        Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshEngage",
            title: "@UWOshkoshEngage"
        }).getView().open();
    }

    function uwoAdmissionsClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOAdmissions');
        Alloy.createController('webViews', {
            url: "https://twitter.com/UWOAdmissions",
            title: "@UWOAdmissions"
        }).getView().open();
    }

    function uwoshkoshTitansClick(e) {
        Titanium.Analytics.featureEvent('twitterUWOshkoshTitans');
        Alloy.createController('webViews', {
            url: "https://twitter.com/UWOshkoshTitans",
            title: "@UWOshkoshTitans"
        }).getView().open();
    }

}
