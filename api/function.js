module.exports = (req, res) => {

    let jsonData = require('./datos.json');
    const { Nickusuario = 'invalid' } = req.query
    let mensaje = "";
    var paquetes = [];

    jsonData.forEach(function(obj) {
        if(obj.Nickusuario==Nickusuario)
            paquetes.push(obj);
    });

    if(paquetes.length!==0){
        paquetes.forEach(function(obj) {
            mensaje += + "{" + "Propietario: " + obj.Nickusuario +
            "Descripción: " + obj.descripcion +
            "Peso: " + obj.peso +
            "Origen: " + obj.origen +
            "Destino: " + obj.destino +
            "Localización Actual: " + obj.localizacionActual +
            "Agencia de Transporte: " + obj.agencia +
            "Estado del envío: " + obj.estado + "}";
        });
    }
    else
        mensaje="Parece que " + Nickusuario + " no tiene paquetes en curso en el sistema";

    res.status(200).send(JSON.stringify(mensaje))
}



