import mongodb = require('mongodb')
import * as database from '../database';
import { User } from '../models/user';

const userCollection: string = "users";

export async function save(user: User) {
    database.connect().then(function(db: mongodb.Db) {
      db.collection(userCollection, function(err, coll) {
        if (err) console.log(err);
        console.log(user);
        coll.insert(user);
      })
    });
}

export function getUserHash(username: String) {
  var hash = "";
  return new Promise(function(resolve, reject) {
    database.connect().then(function(db: mongodb.Db) {
      db.collection(userCollection).findOne({"username": username}, function(err, doc) {
        console.log(doc);
        resolve(doc.hashedPassword);
      });
    });
  });
}

export function usernameExists(username: String) {
    var result = false;
    return new Promise(function(resolve, reject) {
      database.connect().then(function(db: mongodb.Db) {
        db.collection(userCollection, function(err, collection) {
          collection.find({"username": username}).limit(1).toArray(function (err, docs) {
            result = docs.length > 0;
            resolve(result);
          });
        });
      });
    });
}

export function getUsers() {
    var result = [];
    return new Promise(function(resolve, reject) {
      database.connect().then(function(db: mongodb.Db) {
        db.collection(userCollection).find().toArray(function(err, docs) {
            if (err) console.log(err);
            resolve(docs);
        });
    });
  });

}