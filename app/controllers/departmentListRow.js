var args = arguments[0] || {};
var row = [];
row.department = args.item;


$.department.text = row.department.dept;

if (OS_IOS || OS_MOBILEWEB) {

    function departmentClick(e) {
        Alloy.CFG.navgroup.open(Alloy.createController('departmentPeopleList', { peopleOrDeptUrl: $.department.text }).getView());
    }

} else {

    function departmentClick(e) {
        Alloy.createController('departmentPeopleList', { peopleOrDeptUrl: $.department.text }).getView().open();
    }

}