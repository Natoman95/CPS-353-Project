"use strict";
// Mimics the server-side User object so that angular won't
// have a null object without properties.
// HTML pages often try to access object attributes that may
// not even defined when the page first loads
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map