"use strict";
const express_1 = require("express");
const RushEventService = require('../services/rush_event.service');
const RushEventRouter = express_1.Router();
exports.RushEventRouter = RushEventRouter;
RushEventRouter.get('/', function (req, res) {
    RushEventService.getEvents().then(function (result) {
        res.send(result);
    });
});
//# sourceMappingURL=rush_eventapi.js.map