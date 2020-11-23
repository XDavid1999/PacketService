module.exports = (req, res) => {

    let jsonData = require('./datos.json');
    const { Nickusuario = 'invalid' } = req.query
    let mensaje = "Estos son los paquetes de" + Nickusuario;
    var paquetes = [];

    jsonData.forEach(function(obj) {
        if(obj.Nickusuario==Nickusuario)
            paquetes.push(obj);
    });

    if(paquetes.length!==0){
        paquetes.forEach(function(obj) {
            mensaje += "Se muestran a continuación los datos del paquete" +
            "\n Propietario: " + obj.Nickusuario +
            "\n Descripción: " + obj.descripcion +
            "\n Peso: " + obj.peso +
            "\n Origen: " + obj.origen +
            "\n Destino: " + obj.destino +
            "\n Localización Actual: " + obj.localizacionActual +
            "\n Agencia de Transporte: " + obj.agencia +
            "\n Estado del envío: " + obj.estado;
        });
    }
    else
        mensaje="Parece que " + Nickusuario + " no tiene paquetes en curso en el sistema";

    res.status(200).send(mensaje)
}



