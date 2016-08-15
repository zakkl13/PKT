"use strict";
const database = require('../database');
function getEvents() {
    return new Promise(function (resolve, reject) {
        database.connect().then(function (db) {
            var events = [];
            db.collection("events").find({}).forEach(function (result) {
                console.log(result);
                if (result)
                    events.push(result);
            }, function () {
                resolve(events);
            });
        });
    });
}
exports.getEvents = getEvents;
//# sourceMappingURL=rush_event.service.js.map