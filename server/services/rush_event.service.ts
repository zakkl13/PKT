import mongodb = require('mongodb');
import * as database from '../database';

export function getEvents() {
  return new Promise(function(resolve, reject) {
    database.connect().then(function(db: mongodb.Db) {
        var events = [];
        db.collection("events").find({}).forEach(function (result) {
          if (result) events.push(result);
        }, function() {
          resolve(events);
        });
      })
  });
}
