"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const express_1 = require("express");
const signupApiRouter = express_1.Router();
exports.signupApiRouter = signupApiRouter;
signupApiRouter.post('/', function (req, res) {
    process_signup(req.body);
    res.sendStatus(204);
});
function process_signup(body) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(body);
    });
}
//# sourceMappingURL=signup.api.js.map