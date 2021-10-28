import Email from "./email";
import Gmail from "./gmail";

class GmailAdapter implements Email{

    usuario: string

    constructor( usuario:string, private gmail: Gmail){
        this.usuario=usuario;
    }
    
    enviar(titulo: string, mensaje: string){
        this.gmail.enviarEmail(this.usuario,titulo,mensaje)
    }
}
export default GmailAdapter