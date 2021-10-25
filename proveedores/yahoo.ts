
class Yahoo {

    public enviarCorreo(destinatario: string, titulo: string, mensaje: string, fecha: string):void{
        console.log(`${destinatario} - ${fecha} - ${titulo} - ${mensaje} - Enviado desde yahoo.com`);
    };
}
export default Yahoo