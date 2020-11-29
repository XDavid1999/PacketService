module.exports = (req, res) => {

    let jsonData = require('./datos.json');
    const { Nickusuario = 'invalid' } = req.query.Nickusuario
    const { estado = 'invalid' } = req.query.estado
    const { agencia = 'invalid' } = req.query.agencia
    const EstadoPaquete = Object.freeze({"EN_REPARTO":1, "EN_OFICINA":2, "ENTREGADO":3, "CANCELADO":4, "ESPERANDO_RECOGIDA_PRESENCIAL":5})
    var paquetes = [];
    var mensaje = "";

    jsonData.forEach(function(obj) {
        if(obj.Nickusuario==Nickusuario)
            paquetes.push(obj);
    });

    if(estado!=undefined && estado != 'invalid' && paquetes.length!=0)
        if(estado in EstadoPaquete.keys()){
            paquetes.forEach(function(obj) {
                if(obj.estado!=estado)
                    paquetes.pop(obj);
            });

            if(paquetes.length==0)
                mensaje = "No hay paquetes con el estado especificado."
        }
        else{
            mensaje = "El estado que ha indicado no está dentro de los posibles."
            paquetes = [];        
        }

    if(estado!=undefined && agencia != 'invalid' && paquetes.length!=0){
        paquetes.forEach(function(obj) {
            if(obj.agencia!=agencia)
                paquetes.pop(obj);
        });

        if(paquetes.length==0)
            mensaje += "La agencia que ha indicado no existe o no tiene ningún paquete en curso con esa agencia";
    }


    if(paquetes.length!=0)
        res.status(200).json(paquetes);
    else    
        res.status(200).json("Parece que " + Nickusuario + " no tiene paquetes en curso en el sistema " + mensaje);

}



