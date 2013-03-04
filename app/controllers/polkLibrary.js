if (OS_IOS || OS_MOBILEWEB) {
    function polkHoursClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('polkHours').getView());
    }

} else {
    function polkHoursClick(e) {
        Alloy.createController('polkHours').getView().open();
    }

}