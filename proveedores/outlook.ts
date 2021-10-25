import Email from "./email";

class Outlook implements Email{
    public enviar(titulo:string, mensaje: string):void{
        console.log(`${titulo} - ${mensaje} - Enviado desde outlook.com`)
    };
}
export default Outlook