import Email from "./email";
import Yahoo from "./yahoo";

class YahooAdapter implements Email{

    constructor (private yahoo:Yahoo){}

    public enviar(titulo: string, mensaje: string){
        this.yahoo.enviarCorreo('Juan Ramirez',titulo,mensaje,'25-10-21');
    };

};

export default YahooAdapter