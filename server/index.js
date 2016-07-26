"use strict";
/// <reference path="../typings/index.d.ts" />
var config = require('./config');
var http = require('http');
var debug = require('debug')('server:server');
var app = require('./server').app;
var server = http.createServer(app);
server.listen(config.port);
server.on('listening', onListening);
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
//# sourceMappingURL=index.js.map