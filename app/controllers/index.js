if (OS_IOS || OS_MOBILEWEB) {
    Alloy.CFG.navgroup = $.navgroup;

    function newsEventsClick(e) {
        $.navgroup.open(Alloy.createController('newsEvents').getView());
    }

    function peoplePlacesClick(e) {
        $.navgroup.open(Alloy.createController('peoplePlaces').getView());
    }

    function quickLinksClick(e) {
        $.navgroup.open(Alloy.createController('quickLinks').getView());
    }

    function stayConnectedClick(e) {
        $.navgroup.open(Alloy.createController('stayConnected').getView());
    }

    function campusServicesClick(e) {
        $.navgroup.open(Alloy.createController('campusServices').getView());
    }

    function emergencyClick(e) {
        $.navgroup.open(Alloy.createController('emergency').getView());
    }
} else {
    function newsEventsClick(e) {
        Alloy.createController('newsEvents').getView().open();
    }

    function peoplePlacesClick(e) {
        Alloy.createController('peoplePlaces').getView().open();
    }

    function quickLinksClick(e) {
        Alloy.createController('quickLinks').getView().open();
    }

    function stayConnectedClick(e) {
        Alloy.createController('stayConnected').getView().open();
    }

    function campusServicesClick(e) {
        Alloy.createController('campusServices').getView().open();
    }

    function emergencyClick(e) {
        Alloy.createController('emergency').getView().open();
    }
}

$.index.open();
