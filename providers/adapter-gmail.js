"use strict";
exports.__esModule = true;
var GmailAdapter = /** @class */ (function () {
    function GmailAdapter(gmail) {
        this.gmail = gmail;
    }
    GmailAdapter.prototype.send = function (title, message) {
        this.gmail.sendEmail('Burguer King', title, message);
    };
    return GmailAdapter;
}());
exports["default"] = GmailAdapter;
