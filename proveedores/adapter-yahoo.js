"use strict";
exports.__esModule = true;
var YahooAdapter = /** @class */ (function () {
    function YahooAdapter(destinatario, fecha, yahoo) {
        this.yahoo = yahoo;
        this.destinatario = destinatario;
        this.fecha = fecha;
    }
    YahooAdapter.prototype.enviar = function (titulo, mensaje) {
        this.yahoo.enviarCorreo(this.destinatario, titulo, mensaje, this.fecha);
    };
    ;
    return YahooAdapter;
}());
;
exports["default"] = YahooAdapter;
