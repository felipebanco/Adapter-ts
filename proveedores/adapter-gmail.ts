import Email from "./email";
import Gmail from "./gmail";

class GmailAdapter implements Email{
    constructor(private gmail: Gmail){}

    public enviar(titulo: string, mensaje: string){
        this.gmail.enviarEmail('Mercado Libre',titulo,mensaje)
    }
}
export default GmailAdapter