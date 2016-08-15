"use strict";
const express_1 = require("express");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const userService = require('../services/user.service');
const config = require('../config');
var secret = config.secret;
const AuthRouter = express_1.Router();
exports.AuthRouter = AuthRouter;
//24 hours
const EXPIRATION = "24h";
AuthRouter.post('/', function (req, res) {
    if (!validate_call(req)) {
        res.status(400);
        res.json({ success: false, message: "Invalid body." });
    }
    var hashPromise = userService.getUserHash(req.body.username);
    hashPromise.then(function (hash) {
        console.log("here");
        var authenticated = bcrypt.compareSync(req.body.password, hash);
        if (authenticated) {
            var token = jwt.sign(req.body.username, secret);
            res.status(200);
            res.json({ success: true,
                message: "You've been authenticated.",
                token: token });
        }
        else {
            res.status(404);
            res.json({ success: false, message: "Username or password does not exist." });
        }
    });
});
function validate_call(req) {
    if (!req.body) {
        return false;
    }
    return true;
}
//# sourceMappingURL=authenticate.js.map