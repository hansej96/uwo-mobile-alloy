if (OS_IOS || OS_MOBILEWEB) {
    function twitterAccountClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('twitterAccountList').getView());
    }

    function facebookAccountClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('facebookAccountList').getView());
    }

    function youtubeAccountClick(e) {
        Ti.Platform.openURL("http://www.youtube.com/uwosh");
    }

    function foursquareClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "/html/foursquare.html", title: "Foursquare"}).getView());
    }

} else {
    function twitterAccountClick(e) {
        Alloy.createController('twitterAccountList').getView().open();
    }

    function facebookAccountClick(e) {
        Alloy.createController('facebookAccountList').getView().open();
    }

    function youtubeAccountClick(e) {
        Alloy.createController('webViews', { url: "https://http://www.youtube.com/uwosh", title: "UWO YouTube"}).getView().open();
    }

    function foursquareClick(e) {
        Alloy.createController('webViews', { url: "/html/foursquare.html", title: "Foursquare"}).getView().open();
    }

}