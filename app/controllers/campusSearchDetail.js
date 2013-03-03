var args = arguments[0] || {};

$.name.text = args.person.fullName;
$.dept.text = args.person.dept;
$.email.text = args.person.email;
$.phone.text = "(920) 424-" + args.person.phone;
$.office.text = args.person.office;

function phoneClick(e) {
    Ti.Platform.openURL("tel://920424" + args.person.phone);
}