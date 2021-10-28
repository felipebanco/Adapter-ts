import Email from "./email";
import Yahoo from "./yahoo";

class YahooAdapter implements Email{

    destinatario : string;
    fecha: string;

    constructor (destinatario: string, fecha: string , private yahoo:Yahoo){
        this.destinatario = destinatario;
        this.fecha = fecha;
    }

    public enviar(titulo: string, mensaje: string){
        this.yahoo.enviarCorreo(this.destinatario,titulo,mensaje,this.fecha);
    };

};

export default YahooAdapter