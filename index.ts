import ServiceEmail from "./servicios/service-email";
import Email from "./proveedores/email";
import Outlook from "./proveedores/outlook";
import Gmail from "./proveedores/gmail";
import GmailAdapter from "./proveedores/adapter-gmail";
import YahooAdapter from "./proveedores/adapter-yahoo";
import Yahoo from "./proveedores/yahoo";

const envios: Email[] = [
    new Outlook(),
    new GmailAdapter(
        new Gmail()
    ),
    new YahooAdapter(
        new Yahoo()
    )
];

const serviceEmail = new ServiceEmail(envios);

console.log('---------------');
serviceEmail.enviar('Asunto: Trabajo', 'Usted ha sido seleccionado para una entrevista de trabajo');
console.log('---------------');

