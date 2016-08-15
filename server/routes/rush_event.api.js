"use strict";
const express_1 = require("express");
const RushEventService = require('../services/rush_event.service');
const RushEventRouter = express_1.Router();
exports.RushEventRouter = RushEventRouter;
RushEventRouter.get('/', function (req, res) {
    RushEventService.getEvents().then(function (result) {
        res.send(result);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("Unable to retrieve events at this time");
    });
});
//# sourceMappingURL=rush_event.api.js.map