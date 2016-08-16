import mongodb = require('mongodb');
import * as database from '../database';

const required_props: string[] = ['name', 'email'];
const properties: string[] = ['name', 'email', 'rapper', 'phone'];

export function newSignup(signupData) {
  if (!validate(signupData)) {
    console.log("Validation failed");
    return;
  }
  database.connect().then(function(db: mongodb.Db) {
    db.collection("signups").insertOne(signupData, function(res) {
      console.log("New signup inserted: " + res);
    });
   }
  )
  .catch(error => console.log(error || "error insert signup"));
}

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
    if ( j <= -1) return false;
  }

  return reqs.length == 0;
}
