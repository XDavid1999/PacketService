module.exports = (req, res) => {

    let jsonData = require('./datos.json');
    const EstadoPaquete = ["EN_REPARTO", "EN_OFICINA", "ENTREGADO", "CANCELADO", "ESPERANDO_RECOGIDA_PRESENCIAL"];
    var paquetes = [];
    var mensaje = "";
    
    if(req.query.Nickusuario!=undefined)
        Nickusuario=req.query.Nickusuario;

        jsonData.forEach(function(obj) {
            if(obj.Nickusuario==Nickusuario)
                paquetes.push(obj);
        });

    if(req.query.estado!=undefined && paquetes.length!=0){
        estado=req.query.estado;

        if(EstadoPaquete.includes(estado)){
            for (let i = 0; i < paquetes.length; i++) {
                if(paquetes[i].estado!=estado)
                    delete paquetes[i];
            }

            paquetes = paquetes.filter(function(dato){
                return dato != undefined
              });

            if(paquetes.length==0)
                mensaje = "No hay paquetes con el estado especificado."
        }
        else{
            mensaje = "El estado que ha indicado no está dentro de los posibles."
            paquetes = [];        
        }
    }

    if(req.query.agencia!=undefined && paquetes.length!=0){
        agencia=req.query.agencia;
    
        for (let i = 0; i < paquetes.length; i++) {
            if(paquetes[i].agencia!=agencia)
                delete paquetes[i];
        }            

        paquetes = paquetes.filter(function(dato){
            return dato != undefined
        });

        if(paquetes.length==0)
            mensaje += "La agencia que ha indicado no existe o no tiene ningún paquete en curso con esa agencia";
    }


    if(paquetes.length!=0)
        res.status(200).json(paquetes);
        
    else    
        res.status(200).json("Parece que no tiene paquetes en curso en el sistema. " + mensaje);
}



