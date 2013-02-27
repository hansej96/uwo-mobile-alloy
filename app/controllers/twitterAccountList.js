if (OS_IOS || OS_MOBILEWEB) {
    function uwoshkoshClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('twitterView', { twitterUser: "uwoshkosh" }).getView());
    }

    function uwoshkoshTodayClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('twitterView', { twitterUser: "UWOshkoshToday" }).getView());
    }

    function uwoshkoshEngageClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('twitterView', { twitterUser: "UWOshkoshEngage" }).getView());
    }

    function uwoAdmissionsClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('twitterView', { twitterUser: "UWOAdmissions" }).getView());
    }

    function uwoshkoshTitansClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('twitterView', { twitterUser: "UWOshkoshTitans" }).getView());
    }

} else {
    function uwoshkoshClick(e) {
        Alloy.createController('twitterView', { twitterUser: "uwoshkosh" }).getView().open();
    }

    function uwoshkoshTodayClick(e) {
        Alloy.createController('twitterView', { twitterUser: "UWOshkoshToday" }).getView().open();
    }

    function uwoshkoshEngageClick(e) {
        Alloy.createController('twitterView', { twitterUser: "UWOshkoshEngage" }).getView().open();
    }

    function uwoAdmissionsClick(e) {
        Alloy.createController('twitterView', { twitterUser: "UWOAdmissions" }).getView().open();
    }

    function uwoshkoshTitansClick(e) {
        Alloy.createController('twitterView', { twitterUser: "UWOshkoshTitans" }).getView().open();
    }

}