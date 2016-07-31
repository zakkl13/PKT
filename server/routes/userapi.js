"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const express_1 = require("express");
var bcrypt = require("bcryptjs");
const user_1 = require('../models/user');
const userService = require('../services/user.service');
const UserApiRouter = express_1.Router();
exports.UserApiRouter = UserApiRouter;
var saltRounds = 10;
UserApiRouter.post('/', function (req, res) {
    if (!validate_create(req)) {
        res.sendStatus(400);
    }
    else {
        create_user(req.body);
        res.sendStatus(204);
    }
});
UserApiRouter.get('/', function (req, res) {
    var userPromise = userService.getUsers();
    userPromise.then(function (users) {
        var results = [];
        res.json(users);
    });
});
function validate_create(req) {
    if (!req.body) {
        return false;
    }
    return true;
}
function create_user(body) {
    return __awaiter(this, void 0, void 0, function* () {
        var user = new user_1.User(body.username, body.email);
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(body.password, salt, function (err, hash) {
                user.set_pass(hash);
                userService.save(user);
            });
        });
    });
}
//# sourceMappingURL=userapi.js.map