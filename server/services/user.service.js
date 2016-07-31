"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const database = require('../database');
const userCollection = "users";
function save(user) {
    return __awaiter(this, void 0, void 0, function* () {
        database.connect().then(function (db) {
            db.collection(userCollection, function (err, coll) {
                if (err)
                    console.log(err);
                console.log(user);
                coll.insert(user);
            });
        });
    });
}
exports.save = save;
function getUserHash(username) {
    var hash = "";
    return new Promise(function (resolve, reject) {
        database.connect().then(function (db) {
            db.collection(userCollection).findOne({ "username": username }, function (err, doc) {
                console.log(doc);
                resolve(doc.hashedPassword);
            });
        });
    });
}
exports.getUserHash = getUserHash;
function usernameExists(username) {
    var result = false;
    return new Promise(function (resolve, reject) {
        database.connect().then(function (db) {
            db.collection(userCollection, function (err, collection) {
                collection.find({ "username": username }).limit(1).toArray(function (err, docs) {
                    result = docs.length > 0;
                    resolve(result);
                });
            });
        });
    });
}
exports.usernameExists = usernameExists;
function getUsers() {
    var result = [];
    return new Promise(function (resolve, reject) {
        database.connect().then(function (db) {
            db.collection(userCollection).find().toArray(function (err, docs) {
                if (err)
                    console.log(err);
                resolve(docs);
            });
        });
    });
}
exports.getUsers = getUsers;
//# sourceMappingURL=user.service.js.map