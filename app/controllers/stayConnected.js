if (OS_IOS || OS_MOBILEWEB) {
    function twitterAccountClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('twitterAccountList').getView());
    }

} else {
    function twitterAccountClick(e) {
        Alloy.createController('twitterAccountList').getView().open();
    }

}