const request = require('request-promise');
const functions = require('firebase-functions');

async function sendMessage(chat_id, text) {
  const options = {
    method: 'GET',
    uri: `https://api.telegram.org/bot${functions.config().telegrambot.key}/sendMessage`,
    qs: {
      chat_id, 
      text    
    }
  };

  return request(options);
}

function listOffices(){
    let jsonData = require('./datos.json');
    let mensaje = "Offices in the system: ";

    jsonData.forEach(function(obj) {
        if(mensaje.indexOf(obj.agencia) < 0)
            mensaje+="["+obj.agencia+"]";
    });

    if(jsonData.length===0)
        mensaje="Oops! It looks like there isn't any agency in the system yet"

    return mensaje;
}

function agencyOffices(agencia){
    var oficinas = [];
    let mensaje = "";
    let jsonData = require('./datos.json');

    jsonData.forEach(function(obj) {
        if(obj.agencia===agencia)
            oficinas.push(obj);
    });

    if(oficinas.length!==0){
        mensaje += "Oficinas de la agencia:\n" + agencia;
        oficinas.forEach(function(obj) {
            mensaje += "Datos de la oficina \n" +
            "\n Correo de contacto: " + obj.correo_contacto +
            "\n Teléfono de contacto: " +  obj.telefono +
            "\n Vehículos disponibles: " + obj.vehiculos +
            "\n Fecha de alta en el sistema: " + obj.fecha_alta +
            "\n Dirección: " + obj.direccion +
            "\n Agencia a la que pertenece: " + agencia +
            "\n Envíos en curso en esta oficina: " + obj.enviosEnCurso + "\n\n";
        });
    }else
        mensaje="Oops! It looks like there isn't any agency with the provided name."

    return mensaje;
}

exports.handler = functions.https.onRequest(async (req, res) => {
    var body = req.body;
    var text = body.message.text;
    var chat_id = body.message.from.id;
    var mensaje = '';

    switch (text) {
        case "/start":
            mensaje = "Welcome " + body.message.from.first_name + " , tell me an agency name and I will tell you which offices it has. Type /commands to see what can I do.";
        break;
        case "/help":
            mensaje = 'Give me a name of one of the agencies in the system and I will provide you the offices it has. Type /offices to see the offices in the system.';
            break;
        case "/commands":
            mensaje = 'Available commmands: \nType /help for asking for some help \nType /offices for displaying the offices in the system';
            break;
        case "/offices":
            mensaje = listOffices();
        break;
        default:
            mensaje = agencyOffices(text);
        break;
    }       
    await sendMessage(chat_id, mensaje);

    return res.status(200).send("success");
});