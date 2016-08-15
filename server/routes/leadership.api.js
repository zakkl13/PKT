"use strict";
const express_1 = require("express");
const LeadershipService = require('../services/leadership.service');
const config = require('../config');
const LeadershipRouter = express_1.Router();
exports.LeadershipRouter = LeadershipRouter;
//in milliseconds
const CacheTime = config.isProd ? 100000 : 100;
var cachedresult = null;
var lastretrievetimestamp = 0;
LeadershipRouter.get('/', function (req, res) {
    let timesincelastretrieve = new Date().getTime() - lastretrievetimestamp;
    if (timesincelastretrieve <= CacheTime) {
        res.send(cachedresult);
    }
    else {
        LeadershipService.getLeaders().then(function (result) {
            lastretrievetimestamp = new Date().getTime();
            cachedresult = result;
            res.send(result);
        }).catch(function (err) {
            console.log(err);
            res.status(500).send("Unable to retrieve leaders at this time");
        });
    }
});
//# sourceMappingURL=leadership.api.js.map