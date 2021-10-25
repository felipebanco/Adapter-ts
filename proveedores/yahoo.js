"use strict";
exports.__esModule = true;
var Yahoo = /** @class */ (function () {
    function Yahoo() {
    }
    Yahoo.prototype.enviarCorreo = function (destinatario, titulo, mensaje, fecha) {
        console.log(destinatario + " - " + fecha + " - " + titulo + " - " + mensaje + " - Enviado desde yahoo.com");
    };
    ;
    return Yahoo;
}());
exports["default"] = Yahoo;
