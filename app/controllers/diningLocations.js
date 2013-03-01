if (OS_IOS || OS_MOBILEWEB) {
    function reeveUnionClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('reeveUnion').getView());
    }

} else {
    function reeveUnionClick(e) {
        Alloy.createController('reeveUnion').getView().open();
    }

}