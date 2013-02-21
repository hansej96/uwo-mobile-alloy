if (OS_IOS || OS_MOBILEWEB) {
    function uwotClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('newsFeed').getView());
    }
} else {
    function uwotClick(e) {
        Alloy.createController('newsFeed').getView().open();
    }
}