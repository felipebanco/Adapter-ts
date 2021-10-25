"use strict";
exports.__esModule = true;
var YahooAdapter = /** @class */ (function () {
    function YahooAdapter(yahoo) {
        this.yahoo = yahoo;
    }
    YahooAdapter.prototype.enviar = function (titulo, mensaje) {
        this.yahoo.enviarCorreo('Juan Ramirez', titulo, mensaje, '25-10-21');
    };
    ;
    return YahooAdapter;
}());
;
exports["default"] = YahooAdapter;
