import Email from "../proveedores/email";

class ServiceEmail {
    constructor (private providers: Email[]){}

    public enviar(titulo: string, mensaje: string): void{
        this.providers.forEach(e =>{
            e.enviar(titulo,mensaje);
        })
    };
};
export default ServiceEmail 