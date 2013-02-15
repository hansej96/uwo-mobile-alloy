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

$.index.open();
