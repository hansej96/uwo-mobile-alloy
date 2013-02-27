if (OS_IOS || OS_MOBILEWEB) {
    function uwoshkoshClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://facebook.com/uwoshkosh", title: "UW Oshkosh" }).getView());
    }

    function uwoshkoshEngageClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://facebook.com/UWOalumni", title: "UWO Alumni" }).getView());
    }

    function uwoAdmissionsClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://facebook.com/uwo.admissions", title: "UWO Admissions" }).getView());
    }

    function uwoshkoshTitansClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://www.facebook.com/UWOshkoshAthletics", title: "UWO Titans" }).getView());
    }

} else {
    function uwoshkoshClick(e) {
        Alloy.createController('webViews', { url: "https://facebook.com/uwoshkosh", title: "UW Oshkosh" }).getView().open();
    }

    function uwoshkoshEngageClick(e) {
        Alloy.createController('webViews', { url: "https://facebook.com/UWOalumni", title: "UWO Alumni" }).getView().open();
    }

    function uwoAdmissionsClick(e) {
        Alloy.createController('webViews', { url: "https://facebook.com/uwo.admissions", title: "UWO Admissions" }).getView().open();
    }

    function uwoshkoshTitansClick(e) {
        Alloy.createController('webViews', { url: "https://facebook.com/UWOshkoshTitans", title: "UWO Titans" }).getView().open();
    }

}