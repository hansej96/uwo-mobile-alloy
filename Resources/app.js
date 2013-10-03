var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var __isLargeScreen, __isHighDensityScreen, __isAndroid, __isiPad, properties = {}, empty = {}, tracker, currentPage = null, windowStack = [], navGroup, density = Ti.Platform.displayCaps.density;

Alloy.Collections.todo = Alloy.createCollection("todo");

Alloy.Globals.addProperty = function(name, value) {
    properties[name] = value;
};

Alloy.Globals.properties = function() {
    return properties;
};

Alloy.Globals.property = function(name) {
    return properties[name];
};

Alloy.Globals.extend = function(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; args.length > i; i++) {
        var source = args[i];
        for (var prop in source) 0 !== source[prop] && (obj[prop] = source[prop]);
    }
    return obj;
};

Alloy.Globals.isLargeScreen = function() {
    void 0 === __isLargeScreen && (__isLargeScreen = Ti.Platform.displayCaps.platformWidth >= 700);
    return __isLargeScreen;
};

Alloy.Globals.isHighDensityScreen = function() {
    void 0 === __isHighDensityScreen && (__isHighDensityScreen = "high" === Ti.Platform.displayCaps.density);
    return __isHighDensityScreen;
};

Alloy.Globals.isAndroid = function() {
    void 0 === __isAndroid && (__isAndroid = "android" === Ti.Platform.osname);
    return __isAndroid;
};

Alloy.Globals.isiPad = function() {
    void 0 === __isiPad && (__isiPad = "ipad" == Ti.Platform.osname);
    return __isiPad;
};

Alloy.Globals.isLandscape = function(orient) {
    orient = orient || Ti.Gesture.orientation;
    return orient == Ti.UI.LANDSCAPE_LEFT || orient == Ti.UI.LANDSCAPE_RIGHT;
};

Alloy.Globals.isPortrait = function(orient) {
    orient = orient || Ti.Gesture.orientation;
    return orient == Ti.UI.PORTRAIT || orient == Ti.UI.UPSIDE_PORTRAIT;
};

Alloy.Globals.density = function(map) {
    var def = map.def || null;
    return "undefined" != typeof map[density] ? "function" == typeof map[density] ? map[density]() : map[density] : "function" == typeof def ? def() : def;
};

Alloy.Globals.cleanSpecialChars = function(str) {
    if (null === str) return "";
    if ("string" == typeof str) return str.replace(/&quot;/g, '"').replace(/\&amp\;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#039;/g, "'");
    return "";
};

Alloy.createController("index");