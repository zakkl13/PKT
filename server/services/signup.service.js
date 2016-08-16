"use strict";
const database = require('../database');
const required_props = ['name', 'email'];
const properties = ['name', 'email', 'rapper', 'phone'];
function newSignup(signupData) {
    if (!validate(signupData)) {
        console.log("Validation failed");
        return;
    }
    database.connect().then(function (db) {
        db.collection("signups").insertOne(signupData, function (res) {
            console.log("New signup inserted: " + res);
        });
    })
        .catch(error => console.log(error || "error insert signup"));
}
exports.newSignup = newSignup;
function validate(signupData) {
    var hasName = false;
    var hasEmail = false;
    var reqs = required_props.slice();
    for (var key in signupData) {
        var i = reqs.indexOf(key);
        if (i > -1) {
            reqs.splice(i, 1);
        }
        var j = properties.indexOf(key);
        if (j <= -1)
            return false;
    }
    return reqs.length == 0;
}
//# sourceMappingURL=signup.service.js.map