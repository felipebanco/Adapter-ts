
class Gmail {
  
    public enviarEmail(usuario: string, titulo: string, mensaje: string):void{
        console.log(`${usuario} - ${titulo} - ${mensaje} - Enviado desde gmail.com`);
    };
}
export default Gmail
