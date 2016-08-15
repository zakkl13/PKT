"use strict";
const database = require('../database');
function getLeaders() {
    return new Promise(function (resolve, reject) {
        database.connect().then(function (db) {
            var leaders = [];
            db.collection("leaders").find({}).forEach(function (result) {
                if (result)
                    leaders.push(result);
            }, function () {
                resolve(leaders);
            });
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
exports.getLeaders = getLeaders;
//# sourceMappingURL=leadership.service.js.map