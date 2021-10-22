"use strict";
exports.__esModule = true;
var service_email_1 = require("./services/service-email");
var provider_outlook_1 = require("./providers/provider-outlook");
var provider_gmail_1 = require("./providers/provider-gmail");
var adapter_gmail_1 = require("./providers/adapter-gmail");
var shipments = [
    new provider_outlook_1["default"](),
    new adapter_gmail_1["default"](new provider_gmail_1["default"]())
];
var serviceEmail = new service_email_1["default"](shipments);
console.log();
serviceEmail.send('Trabajo', 'Usted ha sido seleccionado para una entrevista de trabajo');
console.log('----------');
