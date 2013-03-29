if (OS_IOS || OS_MOBILEWEB) {
    function uwoshkoshClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://twitter.com/uwoshkosh", title: "@uwoshkosh"}).getView());
    }

    function uwoshkoshTodayClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://twitter.com/UWOshkoshToday", title: "@UWOshkoshToday"}).getView());
    }

    function uwoshkoshEngageClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://twitter.com/UWOshkoshEngage", title: "@UWOshkoshEngage"}).getView());
    }

    function uwoAdmissionsClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://twitter.com/UWOAdmissions", title: "@UWOAdmissions"}).getView());
    }

    function uwoshkoshTitansClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('webViews', { url: "https://twitter.com/UWOshkoshTitans", title: "@UWOshkoshTitans"}).getView());
    }

} else {
    function uwoshkoshClick(e) {
        Alloy.createController('webViews', { url: "https://twitter.com/uwoshkosh", title: "@uwoshkosh"}).getView().open();
    }

    function uwoshkoshTodayClick(e) {
        Alloy.createController('webViews', { url: "https://twitter.com/UWOshkoshToday", title: "@UWOshkoshToday"}).getView().open();
    }

    function uwoshkoshEngageClick(e) {
        Alloy.createController('webViews', { url: "https://twitter.com/UWOshkoshEngage", title: "@UWOshkoshEngage"}).getView().open();
    }

    function uwoAdmissionsClick(e) {
        Alloy.createController('webViews', { url: "https://twitter.com/UWOAdmissions", title: "@UWOAdmissions"}).getView().open();
    }

    function uwoshkoshTitansClick(e) {
        Alloy.createController('webViews', { url: "https://twitter.com/UWOshkoshTitans", title: "@UWOshkoshTitans"}).getView().open();
    }

}