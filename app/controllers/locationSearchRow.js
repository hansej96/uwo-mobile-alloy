var args = arguments[0] || {};
var row = [];
row.location = args.item;

$.title.text = row.location.title;

if (OS_IOS || OS_MOBILEWEB) {
    function openDetail(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('locationSearchDetail', { location: row.location }).getView());
    }
    
} else {
    function openDetail(e) {
        Alloy.createController('locationSearchDetail', { location: row.location }).getView().open();
    }
    
}
