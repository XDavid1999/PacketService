module.exports = (req, res) => {

    let jsonData = require('./datos.json');
    const { Nickusuario = 'invalid' } = req.query.Nickusuario
    const { estado = 'invalid' } = req.query.estado

    var paquetes = [];

    jsonData.forEach(function(obj) {
        if(obj.Nickusuario==Nickusuario)
            paquetes.push(obj);
    });

    if(paquetes.length!=0)
        res.status(200).json(paquetes);
    else    
        res.status(200).json("Parece que " + Nickusuario + estado + " no tiene paquetes en curso en el sistema");

}



