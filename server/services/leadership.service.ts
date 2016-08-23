import mongodb = require('mongodb');
import * as database from '../database';

export function getLeaders() {
  return new Promise(function(resolve, reject) {
    database.connect().then(function(db: mongodb.Db) {
        var leaders = [];
        db.collection("leaders").find({active: true}).sort({priority: 1}).forEach(function (result) {
          if (result) leaders.push(result);
        }, function() {
          resolve(leaders);
        });
      })
      .catch(function(err) {
        reject(err);
      })
  });
}
