class Gmail {
    public sendEmail(user: string, title: string, message: string):void{
        console.log(`${user} - ${title} - ${message} - Enviado desde gmail.com`)
    }
}
export default Gmail
