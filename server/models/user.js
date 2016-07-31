"use strict";
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    set_pass(hashPass) {
        this.hashedPassword = hashPass;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map