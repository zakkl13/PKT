"use strict";
var express = require('express');
var app = express();
exports.app = app;
// app.disable("x-powered-by");
// app.use(json());
// app.use(urlencoded({ extended: true }));
// app.use("/health", healthRouter);
// app.use(express.static(path.join(__dirname, '../public')));
//Coming soon
app.use("/", function (req, res, next) {
    res.send("<h1>Coming Soon</h1>");
});
//# sourceMappingURL=server.js.map