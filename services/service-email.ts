import Email from "../providers/email";

class ServiceEmail {
    constructor (private providers: Email[]){}

    public send(title: string, message: string): void{
        this.providers.forEach(e =>{
            e.send(title,message);
        });
    }
}
export default ServiceEmail 