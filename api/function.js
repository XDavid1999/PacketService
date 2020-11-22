module.exports = (req, res) => {
    // const TelegramBot = ('node-telegram-bot-api');
    // const token = "1306976792:AAFuD6CaNqUtWKRxya8T6igcDoDt_uMqsXU";
    // const bot = new TelegramBot(token, {polling: true});
    let mensaje = "";

    let jsonData = require('./datos.json');
    const { agencia = 'invalid' } = req.query
    var oficinas = [];

    // bot.onText(/^\/start/, function(msg){
    //     // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
    //     var chatId = msg.chat.id;
    //     // msg.from.username se encarga de recoger el @alias del usuario.
    //     var username = msg.from.username;
    //     // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
    //     bot.sendMessage(chatId, "Hi!, " + username + " I'm David Heredia's bot, I manage PacketService's agency");
    //   });

    // bot.on('message', function(msg){
        jsonData.forEach(function(obj) {
            if(obj.agencia==agencia)
                oficinas.push(obj);
        });
        oficinas.toString();
        res.status(200).send("Estas son las oficinas de " + agencia + oficinas)

    //     if(oficinas.length!=0)
    //         mensaje="tiene las siguientes oficinas: " + oficinas.toString;
    //     else
    //         mensaje="no está registrada en el sistema"

    //     console.log(msg);
    //     // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
    //     var chatId = msg.chat.id;
    //     // Enviamos nuestro mensaje indicando el id del chat. 
    //     bot.sendMessage(chatId, "La agencia " + msg.message + mensaje);
    // });
}