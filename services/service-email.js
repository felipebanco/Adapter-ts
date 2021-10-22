"use strict";
exports.__esModule = true;
var ServiceEmail = /** @class */ (function () {
    function ServiceEmail(providers) {
        this.providers = providers;
    }
    ServiceEmail.prototype.send = function (title, message) {
        this.providers.forEach(function (e) {
            e.send(title, message);
        });
    };
    return ServiceEmail;
}());
exports["default"] = ServiceEmail;
