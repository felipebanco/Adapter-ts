"use strict";
exports.__esModule = true;
var GmailAdapter = /** @class */ (function () {
    function GmailAdapter(usuario, gmail) {
        this.gmail = gmail;
        this.usuario = usuario;
    }
    GmailAdapter.prototype.enviar = function (titulo, mensaje) {
        this.gmail.enviarEmail(this.usuario, titulo, mensaje);
    };
    return GmailAdapter;
}());
exports["default"] = GmailAdapter;
