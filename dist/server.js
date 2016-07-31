"use strict";
exports.isProd = process.env.NODE_ENV === 'production';
exports.port = process.env.PORT || 3000;
exports.mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/minimal-mean';

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var mongodb = require('mongodb');
var config = require('./config');
var MongoClient = mongodb.MongoClient;
var bluebird = require('bluebird');
var Collection = mongodb.Collection;
bluebird.promisifyAll(Collection.prototype);
bluebird.promisifyAll(MongoClient);
var dbInstance = {};
function connectAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            dbInstance = yield MongoClient.connectAsync(config.mongoUri);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    });
}
exports.connectAsync = connectAsync;
function connect() {
    var database = this;
    return new Promise(function (resolve, reject) {
        MongoClient.connect(config.mongoUri, function (err, db) {
            if (err) {
                reject(err);
            }
            database.dbInstance = db;
            resolve(db);
        });
    });
}
exports.connect = connect;
function getInstance() {
    if (!dbInstance) {
        throw "Database not yet instantiated";
    }
    return dbInstance;
}
exports.getInstance = getInstance;

"use strict";
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

"use strict";
var express_1 = require("express");
var healthRouter = express_1.Router();
exports.healthRouter = healthRouter;
healthRouter.get('/', function (req, res) {
    res.send("ok");
});

"use strict";
var path = require('path');
var express = require('express');
var body_parser_1 = require("body-parser");
var health_1 = require('./routes/health');
var app = express();
exports.app = app;
app.disable("x-powered-by");
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use("/health", health_1.healthRouter);
app.use(express.static(path.join(__dirname, '../public')));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyIsImRhdGFiYXNlLnRzIiwiaW5kZXgudHMiLCJyb3V0ZXMvaGVhbHRoLnRzIiwic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBVyxjQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFBO0FBQzlDLFlBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUE7QUFDL0IsZ0JBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSx3Q0FBd0MsQ0FBQTs7Ozs7Ozs7Ozs7QUNGdkYsSUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUE7QUFDbkMsSUFBTyxNQUFNLFdBQVcsVUFBVSxDQUFDLENBQUE7QUFFbkMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQTtBQUV2QyxJQUFPLFFBQVEsV0FBVyxVQUFVLENBQUMsQ0FBQTtBQUNyQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFBO0FBRXJDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzNDLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFbEMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFBO0FBRW5COztRQUNFLElBQUksQ0FBQztZQUNILFVBQVUsR0FBRyxNQUFNLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzlELENBQUU7UUFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNkLE1BQU0sQ0FBQyxDQUFBO1FBQ1QsQ0FBQztJQUNILENBQUM7O0FBUHFCLG9CQUFZLGVBT2pDLENBQUE7QUFFRDtJQUNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQTtJQUNuQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtRQUN6QyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsRUFBRTtZQUNuRCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNiLENBQUM7WUFDRCxRQUFRLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtZQUN4QixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVhlLGVBQU8sVUFXdEIsQ0FBQTtBQUVEO0lBQ0UsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2YsTUFBTSwrQkFBK0IsQ0FBQTtJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQTtBQUNuQixDQUFDO0FBTmUsbUJBQVcsY0FNMUIsQ0FBQTs7O0FDekNELDhDQUE4QztBQUM5QyxJQUFZLE1BQU0sV0FBTSxVQUN4QixDQUFDLENBRGlDO0FBQ2xDLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUU5QyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDO0FBR2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFHcEM7SUFDRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUTtVQUMvQixPQUFPLEdBQUcsSUFBSTtVQUNkLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hCLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDaEMsQ0FBQzs7O0FDcEJELHdCQUFpQyxTQUFTLENBQUMsQ0FBQTtBQUUzQyxJQUFNLFlBQVksR0FBWSxnQkFBTSxFQUFFO0FBTTdCLG9CQUFZLGdCQU5rQjtBQUV2QyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFhO0lBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFFb0I7O0FDTnZCLElBQVksSUFBSSxXQUFNLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLDRCQUFpQyxhQUFhLENBQUMsQ0FBQTtBQUcvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUU7QUFTVixXQUFHLE9BVFE7QUFDcEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsd0JBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUscUJBQVksQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFHN0MiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBpc1Byb2QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5leHBvcnQgdmFyIHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDBcbmV4cG9ydCB2YXIgbW9uZ29VcmkgPSBwcm9jZXNzLmVudi5NT05HT19VUkkgfHwgJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbWluaW1hbC1tZWFuJ1xuIiwiaW1wb3J0IG1vbmdvZGIgPSByZXF1aXJlKCdtb25nb2RiJylcbmltcG9ydCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG5cbmNvbnN0IE1vbmdvQ2xpZW50ID0gbW9uZ29kYi5Nb25nb0NsaWVudFxuXG5pbXBvcnQgYmx1ZWJpcmQgPSByZXF1aXJlKCdibHVlYmlyZCcpXG5jb25zdCBDb2xsZWN0aW9uID0gbW9uZ29kYi5Db2xsZWN0aW9uXG5cbmJsdWViaXJkLnByb21pc2lmeUFsbChDb2xsZWN0aW9uLnByb3RvdHlwZSlcbmJsdWViaXJkLnByb21pc2lmeUFsbChNb25nb0NsaWVudClcblxudmFyIGRiSW5zdGFuY2UgPSB7fVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdEFzeW5jKCkge1xuICB0cnkge1xuICAgIGRiSW5zdGFuY2UgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0QXN5bmMoY29uZmlnLm1vbmdvVXJpKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICB0aHJvdyBlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gIHZhciBkYXRhYmFzZSA9IHRoaXNcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIE1vbmdvQ2xpZW50LmNvbm5lY3QoY29uZmlnLm1vbmdvVXJpLCBmdW5jdGlvbihlcnIsIGRiKSB7XG4gICAgICBpZihlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH1cbiAgICAgIGRhdGFiYXNlLmRiSW5zdGFuY2UgPSBkYlxuICAgICAgcmVzb2x2ZShkYilcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gIGlmKCFkYkluc3RhbmNlKSB7XG4gICAgdGhyb3cgXCJEYXRhYmFzZSBub3QgeWV0IGluc3RhbnRpYXRlZFwiXG4gIH1cblxuICByZXR1cm4gZGJJbnN0YW5jZVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NlcnZlcjpzZXJ2ZXInKTtcblxudmFyIGFwcCA9IHJlcXVpcmUoJy4vc2VydmVyJykuYXBwO1xuXG5cbnZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG5zZXJ2ZXIubGlzdGVuKGNvbmZpZy5wb3J0KTtcbnNlcnZlci5vbignbGlzdGVuaW5nJywgb25MaXN0ZW5pbmcpO1xuXG5cbmZ1bmN0aW9uIG9uTGlzdGVuaW5nKCkge1xuICB2YXIgYWRkciA9IHNlcnZlci5hZGRyZXNzKCk7XG4gIHZhciBiaW5kID0gdHlwZW9mIGFkZHIgPT09ICdzdHJpbmcnXG4gICAgPyAncGlwZSAnICsgYWRkclxuICAgIDogJ3BvcnQgJyArIGFkZHIucG9ydDtcbiAgZGVidWcoJ0xpc3RlbmluZyBvbiAnICsgYmluZCk7XG59IiwiaW1wb3J0IHsgUm91dGVyLCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5jb25zdCBoZWFsdGhSb3V0ZXIgOiBSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmhlYWx0aFJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgcmVzLnNlbmQoXCJva1wiKVxyXG59KTtcclxuXHJcbmV4cG9ydCB7IGhlYWx0aFJvdXRlciB9IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XG5pbXBvcnQgKiBhcyB1cmwgZnJvbSAndXJsJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsganNvbiwgdXJsZW5jb2RlZCB9IGZyb20gXCJib2R5LXBhcnNlclwiO1xuXG5cbmltcG9ydCB7IGhlYWx0aFJvdXRlciB9IGZyb20gJy4vcm91dGVzL2hlYWx0aCc7XG52YXIgYXBwID0gZXhwcmVzcygpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbmFwcC51c2UoanNvbigpKTtcbmFwcC51c2UodXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoXCIvaGVhbHRoXCIsIGhlYWx0aFJvdXRlcik7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMnKSkpO1xuXG5cbmV4cG9ydCB7IGFwcCB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
