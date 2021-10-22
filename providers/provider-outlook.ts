import Email from "./email";

class Outlook implements Email{
    public send(title:string, message: string):void{
        console.log(`${title} - ${message} - Enviado desde outlook.com`)
    }
}
export default Outlook