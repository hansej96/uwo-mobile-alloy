if (OS_IOS || OS_MOBILEWEB) {
    function uwot1Click(e) {
        Titanium.Analytics.featureEvent('newsFeedUWOT');
        Alloy.CFG.navwindow.openWindow(Alloy.createController('newsFeed', {
            url: "http://www.uwosh.edu/today/feed/?cat=5%2C6"
        }).getView());
    }

    function campusEventsClick(e) {
        Titanium.Analytics.featureEvent('newsFeedCampusEvents');
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeed', {
            url: "http://www.uwosh.edu/home/events/events/RSS"
        }).getView());
    }

    function advanceTitanClick(e) {
        Titanium.Analytics.featureEvent('newsFeedAdvanceTitan');
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeed', {
            url: "http://www.advancetitan.com/se/the-advance-titan-rss-1.301985"
        }).getView());
    }

    function commencementClick(e) {
        Titanium.Analytics.featureEvent('commencement');
        Alloy.CFG.navgroup.open(Alloy.createController('commencement').getView());
    }

} else {
    function uwotClick(e) {
        Titanium.Analytics.featureEvent('newsFeedUWOT');
        Alloy.createController('newsFeed', {
            url: "http://www.uwosh.edu/today/feed/?cat=5%2C6"
        }).getView().open();
    }

    function campusEventsClick(e) {
        Titanium.Analytics.featureEvent('newsFeedCampusEvents');
        Alloy.createController('newsFeed', {
            url: "http://www.uwosh.edu/home/events/events/RSS"
        }).getView().open();
    }

    function advanceTitanClick(e) {
        Titanium.Analytics.featureEvent('newsFeedAdvanceTitan');
        Alloy.createController('newsFeed', {
            url: "http://www.advancetitan.com/se/the-advance-titan-rss-1.301985"
        }).getView().open();
    }

    function commencementClick(e) {
        Titanium.Analytics.featureEvent('commencement');
        Alloy.createController('commencement').getView().open();
    }

}
