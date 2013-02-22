if (OS_IOS || OS_MOBILEWEB) {
    function commencementFacebookClick(e) {
        Ti.Platform.openURL("http://m.facebook.com/UWOshkoshCommencement");
    }
    
    function commencementMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('commencementMap').getView());
    }
    
    function commencementWebsiteClick(e) {
        Ti.Platform.openURL("http://www.uwosh.edu/commencement/");
    }
    
    function commencementProgramClick(e) {
        Ti.Platform.openURL("http://www.uwosh.edu/commencement/documents/program.pdf");
    }
    
} else {
    function commencementFacebookClick(e) {
        Ti.Platform.openURL("http://m.facebook.com/UWOshkoshCommencement");
    }
    
    function commencementMapClick(e) {
        Alloy.createController('commencementMap').getView().open();
    }
    
    function commencementWebsiteClick(e) {
        Ti.Platform.openURL("http://www.uwosh.edu/commencement/");
    }
    
    function commencementProgramClick(e) {
        Ti.Platform.openURL("http://www.uwosh.edu/commencement/documents/program.pdf");
    }
    
}