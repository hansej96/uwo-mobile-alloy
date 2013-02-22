if (OS_IOS || OS_MOBILEWEB) {
    function uwotClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeed').getView());
    }
    
    function newsFeedMasterClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeedMaster').getView());
    }
    
} else {
    function uwotClick(e) {
        Alloy.createController('newsFeed').getView().open();
    }
    
    function newsFeedMasterClick(e) {
        Alloy.createController('newsFeedMaster').getView().open();
    }
}