if (OS_IOS || OS_MOBILEWEB) {
    function commencementMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('commencementMap').getView());
    }
    
} else {
    function commencementMapClick(e) {
        Alloy.createController('commencementMap').getView().open();
    }
    
}