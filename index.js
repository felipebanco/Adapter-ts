"use strict";
exports.__esModule = true;
var service_email_1 = require("./servicios/service-email");
var outlook_1 = require("./proveedores/outlook");
var gmail_1 = require("./proveedores/gmail");
var adapter_gmail_1 = require("./proveedores/adapter-gmail");
var adapter_yahoo_1 = require("./proveedores/adapter-yahoo");
var yahoo_1 = require("./proveedores/yahoo");
var envios = [
    new outlook_1["default"](),
    new adapter_gmail_1["default"]('Mercado Libre', new gmail_1["default"]()),
    new adapter_yahoo_1["default"]('Juan Ramirez', '12-10-21', new yahoo_1["default"]())
];
var serviceEmail = new service_email_1["default"](envios);
console.log('---------------');
serviceEmail.enviar('Asunto: Trabajo', 'Usted ha sido seleccionado para una entrevista de trabajo');
console.log('---------------');
