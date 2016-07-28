"use strict";
var path = require('path');
var express = require('express');
var body_parser_1 = require("body-parser");
var favicon = require("serve-favicon");
var health_1 = require('./routes/health');
var app = express();
exports.app = app;
app.use(favicon(path.join(__dirname, '../public/static/favicon.png')));
app.disable("x-powered-by");
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use("/health", health_1.healthRouter);
app.use(express.static(path.join(__dirname, '../public')));
//# sourceMappingURL=server.js.map