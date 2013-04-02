if (OS_IOS || OS_MOBILEWEB) {
    function uwoshkoshClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOshkosh');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://facebook.com/uwoshkosh",
            title: "UW Oshkosh"
        }).getView());
    }

    function uwoshkoshEngageClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAlumni');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://facebook.com/UWOalumni",
            title: "UWO Alumni"
        }).getView());
    }

    function uwoAdmissionsClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAdmissions');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://facebook.com/uwo.admissions",
            title: "UWO Admissions"
        }).getView());
    }

    function uwoshkoshTitansClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAthletics');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "https://www.facebook.com/UWOshkoshAthletics",
            title: "UWO Titans"
        }).getView());
    }

} else {
    function uwoshkoshClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOshkosh');
        Alloy.createController('webViews', {
            url: "https://facebook.com/uwoshkosh",
            title: "UW Oshkosh"
        }).getView().open();
    }

    function uwoshkoshEngageClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAlumni');
        Alloy.createController('webViews', {
            url: "https://facebook.com/UWOalumni",
            title: "UWO Alumni"
        }).getView().open();
    }

    function uwoAdmissionsClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAdmissions');
        Alloy.createController('webViews', {
            url: "https://facebook.com/uwo.admissions",
            title: "UWO Admissions"
        }).getView().open();
    }

    function uwoshkoshTitansClick(e) {
        Titanium.Analytics.featureEvent('facebookUWOAthletics');
        Alloy.createController('webViews', {
            url: "https://www.facebook.com/UWOshkoshAthletics",
            title: "UWO Titans"
        }).getView().open();
    }

}
