module.exports = (req, res) => {

    let jsonData = require('./datos.json');
    const { Nickusuario = 'invalid' } = req.query
    let mensaje = "";
    var paquetes = [];
    var i=0;

    jsonData.forEach(function(obj) {
        if(obj.Nickusuario==Nickusuario)
            paquetes.push(obj);
    });

    // if(paquetes.length!==0){
    //     mensaje="[";
    //     paquetes.forEach(function(obj) {
    //         mensaje +="{" + "Propietario: " + obj.Nickusuario + ", " +
    //         "Descripción: " + obj.descripcion + ", " +
    //         "Peso: " + obj.peso + ", " +
    //         "Origen: " + obj.origen + ", " +
    //         "Destino: " + obj.destino + ", " +
    //         "Localización Actual: " + obj.localizacionActual + ", " +
    //         "Agencia de Transporte: " + obj.agencia + ", " +
    //         "Estado del envío: " + obj.estado + "}";

    //         if(i<paquetes.length-1)
    //             mensaje += ", "
    //         i++;
    //     });
    //     mensaje+="]";
    // }
    // else
    //     mensaje="Parece que " + Nickusuario + " no tiene paquetes en curso en el sistema";

    res.status(200).json({
        Propietario: paquetes[0].Nickusuario,
        Descripción: paquetes[0].descripcion,
        Peso: paquetes[0].peso,
        Origen: paquetes[0].origen, 
        Destino: paquetes[0].destino,
        Localización_Actual: paquetes[0].localizacionActual,
        Agencia_de_Transporte: paquetes[0].agencia,
        Estado_del_envío: paquetes[0].estado
    });
    
}



