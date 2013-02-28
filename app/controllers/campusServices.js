if (OS_IOS || OS_MOBILEWEB) {
    function titancardClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('titancard').getView());
    }

} else {
    function titancardClick(e) {
        Alloy.createController('titancard').getView().open();
    }

}