"use strict";
const database = require('../database');
function getEvents() {
    return new Promise(function (resolve, reject) {
        database.connect().then(function (db) {
            var events = [];
            db.collection("events").find({ active: true }).forEach(function (result) {
                if (result)
                    events.push(result);
            }, function () {
                resolve(events);
            });
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
exports.getEvents = getEvents;
//# sourceMappingURL=rush_event.service.js.map