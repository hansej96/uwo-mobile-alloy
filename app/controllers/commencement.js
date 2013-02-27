if (OS_IOS || OS_MOBILEWEB) {
    function commencementFacebookClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews' { url: "http://m.facebook.com/UWOshkoshCommencement", title: "UWO Commencement"}).getView());
    }

    function commencementTwitterClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews' { url: "https://twitter.com/uwocommencement", title: "@uwocommencement"}).getView());
    }

    function commencementMapClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('commencementMap').getView());
    }

    function commencementWebsiteClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews' { url: "http://www.uwosh.edu/commencement/", title: "UWO Commencement"}).getView());
    }

    function commencementProgramClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews' { url: "http://www.uwosh.edu/commencement/documents/program.pdf", title: "Commencement Program"}).getView());
    }

} else {
    function commencementFacebookClick(e) {
        Alloy.createController('webViews' { url: "http://m.facebook.com/UWOshkoshCommencement", title: "UWO Commencement"}).getView().open();
    }

    function commencementTwitterClick(e) {
        Alloy.createController('webViews' { url: "https://twitter.com/uwocommencement", title: "@uwocommencement"}).getView().open();
    }

    function commencementMapClick(e) {
        Alloy.createController('commencementMap').getView().open();
    }

    function commencementWebsiteClick(e) {
        Alloy.createController('webViews' { url: "http://www.uwosh.edu/commencement/", title: "UWO Commencement"}).getView().open();
    }

    function commencementProgramClick(e) {
        Alloy.createController('webViews' { url: "http://www.uwosh.edu/commencement/documents/program.pdf", title: "Commencement Program"}).getView().open();
    }

}