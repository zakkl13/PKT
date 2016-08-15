"use strict";
exports.isProd = process.env.NODE_ENV === 'production';
exports.port = process.env.PORT || 3000;
exports.mongoUri = process.env.MONGO_URI || 'mongodb://pktadmin:19pkt06@54.88.41.219:47017/pkt';
exports.secret = '7%ZD6Lr03g41';
//# sourceMappingURL=config.js.map