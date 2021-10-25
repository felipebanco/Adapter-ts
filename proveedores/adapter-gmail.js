"use strict";
exports.__esModule = true;
var GmailAdapter = /** @class */ (function () {
    function GmailAdapter(gmail) {
        this.gmail = gmail;
    }
    GmailAdapter.prototype.enviar = function (titulo, mensaje) {
        this.gmail.enviarEmail('Mercado Libre', titulo, mensaje);
    };
    return GmailAdapter;
}());
exports["default"] = GmailAdapter;
