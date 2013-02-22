if (OS_IOS || OS_MOBILEWEB) {
    function uwotClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeed', { url: "http://www.uwosh.edu/today/feed/?cat=5%2C6" }).getView());
    }
    
    function campusEventsClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeed', { url: "http://www.uwosh.edu/home/events/events/RSS" }).getView());
    }
    
    function advanceTitanClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeed', { url: "http://www.advancetitan.com/se/the-advance-titan-rss-1.301985" }).getView());
    }
    
    function commencementClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('commencement').getView());
    }
    
} else {
    function uwotClick(e) {
        Alloy.createController('newsFeed', { url: "http://www.uwosh.edu/today/feed/?cat=5%2C6" }).getView().open();
    }
    
    function campusEventsClick(e) {
        Alloy.createController('newsFeed', { url: "http://www.uwosh.edu/home/events/events/RSS" }).getView().open();
    }
    
    function advanceTitanClick(e) {
        Alloy.createController('newsFeed', { url: "http://www.advancetitan.com/se/the-advance-titan-rss-1.301985" }).getView().open();
    }
    
    function commencementClick(e) {
        Alloy.createController('commencement').getView().open();
    }
    
}