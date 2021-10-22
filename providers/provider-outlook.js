"use strict";
exports.__esModule = true;
var Outlook = /** @class */ (function () {
    function Outlook() {
    }
    Outlook.prototype.send = function (title, message) {
        console.log(title + " - " + message + " - Enviado desde outlook.com");
    };
    return Outlook;
}());
exports["default"] = Outlook;
