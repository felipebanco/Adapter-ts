import Email from "./email";
import Gmail from "./provider-gmail";

class GmailAdapter implements Email{
    constructor(private gmail: Gmail){}

    public send(title: string, message: string){
        this.gmail.sendEmail('Burguer King',title,message)
    }
}
export default GmailAdapter