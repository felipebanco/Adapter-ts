"use strict";
exports.__esModule = true;
var ServiceEmail = /** @class */ (function () {
    function ServiceEmail(providers) {
        this.providers = providers;
    }
    ServiceEmail.prototype.enviar = function (titulo, mensaje) {
        this.providers.forEach(function (e) {
            e.enviar(titulo, mensaje);
        });
    };
    ;
    return ServiceEmail;
}());
;
exports["default"] = ServiceEmail;
