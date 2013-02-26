var args = arguments[0] || {};

$.id.text = args.location.id;
$.title.text = args.location.title;
$.description.text = args.location.description;
$.address.text = args.location.address;
$.image.image = args.location.image;
$.panorama.text = args.location.panorama;
$.latitude.text = args.location.latitude;
$.longitude.text = args.location.longitude;

function panoramaClick (e) {
    Ti.Platform.openURL(args.location.panorama);
}

function imageClick (e) {
    Ti.Platform.openURL(args.location.image);
}
