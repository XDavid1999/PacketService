module.exports = (req, res) => {

    let jsonData = require('./datos.json');
    const EstadoPaquete = Object.freeze({"EN_REPARTO":1, "EN_OFICINA":2, "ENTREGADO":3, "CANCELADO":4, "ESPERANDO_RECOGIDA_PRESENCIAL":5})
    var paquetes = [];
    var mensaje = "";

    if(req.query.Nickusuario!=undefined)
        jsonData.forEach(function(obj) {
            if(obj.Nickusuario==req.query.Nickusuario)
                paquetes.push(obj);
        });

    if(req.query.estado!=undefined && paquetes.length!=0)
        if(req.query.estado in EstadoPaquete.values()){
            paquetes.forEach(function(obj) {
                if(obj.estado!=req.query.estado)
                    paquetes.pop(obj);
            });

            if(paquetes.length==0)
                mensaje = "No hay paquetes con el estado especificado."
        }
        else{
            mensaje = "El estado que ha indicado no está dentro de los posibles."
            paquetes = [];        
        }

    if(req.query.agencia!=undefined && paquetes.length!=0){
        paquetes.forEach(function(obj) {
            if(obj.agencia!=req.query.agencia)
                paquetes.pop(obj);
        });

        if(paquetes.length==0)
            mensaje += "La agencia que ha indicado no existe o no tiene ningún paquete en curso con esa agencia";
    }


    if(paquetes.length!=0)
        res.status(200).json(paquetes);
    else    
        res.status(200).json("Parece que no tiene paquetes en curso en el sistema " + mensaje);

}



