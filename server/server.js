"use strict";
const path = require('path');
const express = require('express');
const body_parser_1 = require("body-parser");
const health_1 = require('./routes/health');
var app = express();
exports.app = app;
app.disable("x-powered-by");
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use("/health", health_1.healthRouter);
app.use(express.static(path.join(__dirname, '../public')));
//# sourceMappingURL=server.js.map