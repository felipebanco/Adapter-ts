import Email from "../proveedores/email";

class ServiceEmail implements Email {

    constructor (private proveedor: Email[]){}

    public enviar(titulo: string, mensaje: string): void{
        this.proveedor.forEach(e =>{
            e.enviar(titulo,mensaje);
        })
    };
};
export default ServiceEmail 