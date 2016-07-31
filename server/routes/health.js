"use strict";
const express_1 = require("express");
const healthRouter = express_1.Router();
exports.healthRouter = healthRouter;
healthRouter.get('/', function (req, res) {
    res.send("ok");
});
//# sourceMappingURL=health.js.map