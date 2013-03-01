if (OS_IOS || OS_MOBILEWEB) {
    function titancardClick(e) {
        if(Ti.App.Properties.getBool("myUwoAuth") === true) {
            Alloy.CFG.navgroup.open(Alloy.createController('titancard').getView());
        } else {
            Alloy.CFG.navgroup.open(Alloy.createController('netID').getView());
        }
    }

} else {
    function titancardClick(e) {
        if(Ti.App.Properties.getBool("myUwoAuth") === true) {
            Alloy.createController('titancard').getView().open();
        } else {
            Alloy.createController('netID').getView().open();
        }
    }

}