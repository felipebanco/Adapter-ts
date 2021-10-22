"use strict";
exports.__esModule = true;
var Gmail = /** @class */ (function () {
    function Gmail() {
    }
    Gmail.prototype.sendEmail = function (user, title, message) {
        console.log(user + " - " + title + " - " + message + " - Enviado desde gmail.com");
    };
    return Gmail;
}());
exports["default"] = Gmail;
