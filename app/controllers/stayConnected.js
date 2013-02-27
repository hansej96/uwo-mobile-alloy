if (OS_IOS || OS_MOBILEWEB) {
    function twitterClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeed', { url: "http://www.uwosh.edu/today/feed/?cat=5%2C6" }).getView());
    }

} else {
    function twitterClick(e) {
        Alloy.createController('newsFeed', { url: "http://www.uwosh.edu/today/feed/?cat=5%2C6" }).getView().open();
    }

}