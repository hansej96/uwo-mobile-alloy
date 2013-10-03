var moment = require("alloy/moment");

exports.definition = {
    config: {
        columns: {
            item: "text",
            done: "integer",
            date_completed: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "todo"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if (value) {
                        if ("item" === key && 0 >= value.length) return "Error: No item!";
                        if ("done" === key && 0 >= value.length) return "Error: No completed flag!";
                    }
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(todo) {
                return todo.get("done");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("todo", exports.definition, [ function(migration) {
    migration.name = "todo";
    migration.id = "201303111400312";
    var preload_data = [ {
        item: "Complete the application for graduation"
    }, {
        item: "Tell your guests"
    }, {
        item: "Stay up to date"
    }, {
        item: "Apply for class speaker and other awards"
    }, {
        item: "Make accommodations for guests with disabilities"
    }, {
        item: "Attend Countdown to Commencement"
    }, {
        item: "View the Official Commencement List"
    }, {
        item: "Purchase your cap and gown"
    }, {
        item: "Attend Commencement May 11th, 2013"
    } ];
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                item: "text",
                done: "integer",
                date_completed: "text"
            }
        });
        for (var i = 0; preload_data.length > i; i++) migrator.insertRow(preload_data[i]);
    };
    migration.down = function(migrator) {
        migrator.dropTable("todo");
    };
} ]);

collection = Alloy.C("todo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;