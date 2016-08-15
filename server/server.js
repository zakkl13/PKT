"use strict";
const path = require('path');
const express = require('express');
const body_parser_1 = require("body-parser");
const favicon = require("serve-favicon");
const health_1 = require('./routes/health');
const signupapi_1 = require('./routes/signupapi');
const rush_eventapi_1 = require('./routes/rush_eventapi');
var app = express();
exports.app = app;
app.use(favicon(path.join(__dirname, '../public/static/favicon.png')));
app.disable("x-powered-by");
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use("/health", health_1.healthRouter);
app.use("/api/signup", signupapi_1.signupApiRouter);
app.use("/api/rushevents", rush_eventapi_1.RushEventRouter);
app.use("/", express.static(path.join(__dirname, '../public')));
//# sourceMappingURL=server.js.map