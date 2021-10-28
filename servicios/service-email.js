"use strict";
exports.__esModule = true;
var ServiceEmail = /** @class */ (function () {
    function ServiceEmail(proveedor) {
        this.proveedor = proveedor;
    }
    ServiceEmail.prototype.enviar = function (titulo, mensaje) {
        this.proveedor.forEach(function (e) {
            e.enviar(titulo, mensaje);
        });
    };
    ;
    return ServiceEmail;
}());
;
exports["default"] = ServiceEmail;
