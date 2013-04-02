if (OS_IOS || OS_MOBILEWEB) {
    function twitterAccountClick(e) {
        Titanium.Analytics.featureEvent('twitterAccountList');
        Alloy.CFG.navgroup.open(Alloy.createController('twitterAccountList').getView());
    }

    function facebookAccountClick(e) {
        Titanium.Analytics.featureEvent('facebookAccountList');
        Alloy.CFG.navgroup.open(Alloy.createController('facebookAccountList').getView());
    }

    function youtubeAccountClick(e) {
        Titanium.Analytics.featureEvent('youtube');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "http://www.youtube.com/uwosh",
            title: "YouTube"
        }).getView());
    }

    function foursquareClick(e) {
        Titanium.Analytics.featureEvent('foursquare');
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', {
            url: "/html/foursquare.html",
            title: "Foursquare"
        }).getView());
    }

} else {
    function twitterAccountClick(e) {
        Titanium.Analytics.featureEvent('twitterAccountList');
        Alloy.createController('twitterAccountList').getView().open();
    }

    function facebookAccountClick(e) {
        Titanium.Analytics.featureEvent('facebookAccountList');
        Alloy.createController('facebookAccountList').getView().open();
    }

    function youtubeAccountClick(e) {
        Titanium.Analytics.featureEvent('youtube');
        Alloy.createController('webViews', {
            url: "https://http://www.youtube.com/uwosh",
            title: "UWO YouTube"
        }).getView().open();
    }

    function foursquareClick(e) {
        Titanium.Analytics.featureEvent('foursquare');
        Alloy.createController('webViews', {
            url: "/html/foursquare.html",
            title: "Foursquare"
        }).getView().open();
    }

}
