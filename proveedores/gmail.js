"use strict";
exports.__esModule = true;
var Gmail = /** @class */ (function () {
    function Gmail() {
    }
    Gmail.prototype.enviarEmail = function (usuario, titulo, mensaje) {
        console.log(usuario + " - " + titulo + " - " + mensaje + " - Enviado desde gmail.com");
    };
    ;
    return Gmail;
}());
exports["default"] = Gmail;
