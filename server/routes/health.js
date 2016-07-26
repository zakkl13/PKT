"use strict";
var express_1 = require("express");
var healthRouter = express_1.Router();
exports.healthRouter = healthRouter;
healthRouter.get('/', function (req, res) {
    res.send("ok");
});
//# sourceMappingURL=health.js.map