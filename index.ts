import ServiceEmail from "./services/service-email";
import Email from "./providers/email";
import Outlook from "./providers/provider-outlook";
import Gmail from "./providers/provider-gmail";
import GmailAdapter from "./providers/adapter-gmail";


const shipments: Email[] = [
    new Outlook(),
    new GmailAdapter(
        new Gmail()
    )
];
const serviceEmail = new ServiceEmail(shipments)
console.log();
serviceEmail.send('Trabajo', 'Usted ha sido seleccionado para una entrevista de trabajo')

