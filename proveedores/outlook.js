"use strict";
exports.__esModule = true;
var Outlook = /** @class */ (function () {
    function Outlook() {
    }
    Outlook.prototype.enviar = function (titulo, mensaje) {
        console.log(titulo + " - " + mensaje + " - Enviado desde outlook.com");
    };
    ;
    return Outlook;
}());
exports["default"] = Outlook;
