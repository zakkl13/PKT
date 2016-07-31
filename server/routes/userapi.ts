import { Router, Response, Request } from "express";
var bcrypt = require("bcryptjs");
import { User } from '../models/user';
import * as userService from '../services/user.service';

const UserApiRouter : Router = Router();
var saltRounds = 10;

UserApiRouter.post('/', function (req: Request, res: Response) {
  if (!validate_create(req)) {
    res.sendStatus(400);
  } else {
    create_user(req.body);
    res.sendStatus(204);
  }

});

UserApiRouter.get('/', function (req: Request, res: Response) {
  var userPromise = userService.getUsers();
  userPromise.then(function(users) {
    var results = [];
    res.json(users);
  });

});

function validate_create(req: Request) {
  if (!req.body) {
    return false;
  }
  return true;
}

async function create_user(body) {
  var user = new User(body.username, body.email);
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(body.password, salt, function(err, hash) {
        user.set_pass(hash);
        userService.save(user);
    });
  });

}



export { UserApiRouter }