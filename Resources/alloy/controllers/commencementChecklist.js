function Controller() {
    function __alloyId36() {
        __alloyId36.opts || {};
        var models = whereFunction(__alloyId35);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId33 = models[i];
            __alloyId33.__transform = transformFunction(__alloyId33);
            var __alloyId34 = Alloy.createController("commencementChecklistRow", {
                $model: __alloyId33
            });
            rows.push(__alloyId34.getViewEx({
                recurse: true
            }));
        }
        $.__views.todoTable.setData(rows);
    }
    function __alloyId49() {
        __alloyId49.opts || {};
        var models = whereFunction(__alloyId48);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId46 = models[i];
            __alloyId46.__transform = transformFunction(__alloyId46);
            var __alloyId47 = Alloy.createController("commencementChecklistRow", {
                $model: __alloyId46
            });
            rows.push(__alloyId47.getViewEx({
                recurse: true
            }));
        }
        $.__views.todoTable.setData(rows);
    }
    function whereFunction(collection) {
        return whereIndex ? collection.where({
            done: 1 === whereIndex ? 0 : 1
        }) : collection.models;
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.item = "[" + transform.item + "]";
        return transform;
    }
    function showTasks(e) {
        whereIndex = "undefined" != typeof e.index && null !== e.index ? e.index : INDEXES[e.source.title];
        todos.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "commencementChecklist";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.todoWin = Ti.UI.createWindow({
        backgroundColor: "#F7F7F7",
        barColor: "#333435",
        navBarHidden: false,
        navTintColor: "#fec425",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        fullscreen: false,
        id: "todoWin"
    });
    $.__views.todoWin && $.addTopLevelView($.__views.todoWin);
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#FAC021",
                offset: 0
            }, {
                color: "#DEA325",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.todoWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        left: "10dp",
        text: "Commencement Checklist",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.todoTable = Ti.UI.createTableView({
        backgroundColor: "#F7F7F7",
        separatorColor: "transparent",
        top: "50dp",
        bottom: "46dp",
        id: "todoTable"
    });
    $.__views.todoWin.add($.__views.todoTable);
    var __alloyId35 = Alloy.Collections["todo"] || todo;
    __alloyId35.on("fetch destroy change add remove reset", __alloyId36);
    $.__views.footer = Ti.UI.createView({
        bottom: 0,
        height: "46dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#444",
                offset: 0
            }, {
                color: "#333",
                offset: 1
            } ]
        },
        id: "footer"
    });
    $.__views.todoWin.add($.__views.footer);
    var __alloyId38 = [];
    var __alloyId42 = {
        title: "All",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId42);
    var __alloyId43 = {
        title: "Active",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId43);
    var __alloyId44 = {
        title: "Done",
        ns: "Alloy.Abstract"
    };
    __alloyId38.push(__alloyId44);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        backgroundColor: "#333",
        index: 0,
        height: 40,
        left: 20,
        right: 20,
        labels: __alloyId38,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    showTasks ? $.__views.tabbedbar.addEventListener("click", showTasks) : __defers["$.__views.tabbedbar!click!showTasks"] = true;
    var __alloyId48;
    exports.destroy = function() {
        __alloyId35.off("fetch destroy change add remove reset", __alloyId36);
        __alloyId48.off("fetch destroy change add remove reset", __alloyId49);
    };
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    var INDEXES = {
        All: 0,
        Active: 1,
        Done: 2
    };
    var whereIndex = INDEXES["All"];
    var err, adapter = require("alloy/models/Todo").definition.config.adapter.type;
    switch (adapter) {
      case "localStorage":
        true && (err = "localStorage adapter only supported on Mobileweb");
        break;

      case "properties":
        break;

      case "sql":
      case "sql_new":
        false;
        break;

      default:
        err = 'Unknown adapter type "' + adapter + '"';
    }
    if (err) alert(err); else {
        $.todoWin.open();
        todos.fetch();
    }
    __defers["$.__views.tabbedbar!click!showTasks"] && $.__views.tabbedbar.addEventListener("click", showTasks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;