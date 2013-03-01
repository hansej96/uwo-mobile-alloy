// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

/**
 * App core functions
 */
var __isLargeScreen, __isHighDensityScreen, __isAndroid, __isiPad, properties = {},
  empty = {},
  currentPage = null,
  windowStack = [],
  navGroup, density = Ti.Platform.displayCaps.density;
/***************************
 * Public methods & variables
 ***************************/

/**
 * Set properties for app
 * @param {String} name Name of property
 * @param {String} value Value of property
 */
Alloy.Globals.addProperty = function(name, value) {
  properties[name] = value;
};

/**
 * Helper method to show all properties in the core app
 */
Alloy.Globals.properties = function() {
  return properties;
};

/**
 * Helper method to show one property in the core app
 * @param {String} name
 */
Alloy.Globals.property = function(name) {
  return properties[name];
};

Alloy.Globals.extend = function(obj) {
  var args = Array.prototype.slice.call(arguments, 1);
  for(var i = 0; i < args.length; i++) {
    var source = args[i];
    for(var prop in source) {
      if(source[prop] !== 0) {
        obj[prop] = source[prop];
      }
    }
  }
  return obj;
};

/**
 * test to see if this is a tablet
 */
Alloy.Globals.isLargeScreen = function() {
  if(__isLargeScreen === undefined) {
    __isLargeScreen = (Ti.Platform.displayCaps.platformWidth >= 700);
  }
  return __isLargeScreen;
};
/**
 * test for high density
 */
Alloy.Globals.isHighDensityScreen = function() {
  if(__isHighDensityScreen === undefined) {
    __isHighDensityScreen = (Ti.Platform.displayCaps.density === 'high');
  }
  return __isHighDensityScreen;
};

/**
 * test for android
 */
Alloy.Globals.isAndroid = function() {
  if(__isAndroid === undefined) {
    __isAndroid = (Ti.Platform.osname === 'android');
  }
  return __isAndroid;
};

/**
 * test for iPad
 */
Alloy.Globals.isiPad = function() {
  if(__isiPad === undefined) {
    __isiPad = (Ti.Platform.osname == 'ipad');
  }
  return __isiPad;
};

/**
 * test for landscpae orientation
 */
Alloy.Globals.isLandscape = function(orient) {
  orient = orient || Ti.UI.orientation;
  return orient == Ti.UI.LANDSCAPE_LEFT || orient == Ti.UI.LANDSCAPE_RIGHT;
};

/**
 * test for a portrait orientation
 */
Alloy.Globals.isPortrait = function(orient) {
  orient = orient || Ti.UI.orientation;
  return orient == Ti.UI.PORTRAIT || orient == Ti.UI.UPSIDE_PORTRAIT;
};

/*
 * Branching logic based on density
 */
Alloy.Globals.density = function( /*Object*/ map) {
  var def = map.def || null; //default function or value
  if(typeof map[density] != 'undefined') {
    if(typeof map[density] == 'function') {
      return map[density]();
    } else {
      return map[density];
    }
  } else {
    if(typeof def == 'function') {
      return def();
    } else {
      return def;
    }
  }
};


/**
 * converts special characters into nice chars for display
 * @param {string} str
 */
Alloy.Globals.cleanSpecialChars = function(str) {
  if(str === null) {
    return '';
  }
  if(typeof str === 'string') {
    return str.replace(/&quot;/g, '"').replace(/\&amp\;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#039;/g, "'");
  }
  return '';
};
