var express = require('express');
const {User} = require("./../src/user.js");
const {ListDator} = require("./ListDator.js");
const logger = require('morgan');

var usuarios = new Array(User);
usuarios[0] = new User("pepe@correo.es", "Pepe", "Gonzalez", "PGonz", "Calle Almendra", "30/06/1999");
usuarios[1] = new User("juan@correo.es", "Juan", "Perez", "JuanitoP", "Calle Amor", "20/04/1991");
usuarios[2] = new User("manolo@correo.es", "Manuel", "Revilla", "Revisha", "Calle Estepa", "01/11/1989");

var app = express();
var dator = new ListDator(usuarios);


var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'; 
app.set('port', (process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(logger('tiny'))

app.post('/users/:correo/:nombre/:apellidos/:nick/:direccion/:fnac', function(req, res){
    var newUser = new User(req.params.correo, req.params.nombre, req.params.apellidos, req.params.nick, req.params.direccion, req.params.fnac);
    
    dator.insertar(newUser);
    res.status(200).send(newUser)
});

app.put('/users/:correo/:nombre/:apellidos/:direccion', function(req, res){
    var modifyUser = new User(req.params.correo, req.params.nombre, req.params.apellidos, req.params.direccion);

    dator.modificar(modifyUser);
    res.status(200).send(newUser)
});

app.get('/users/:nick', function(req, res){
    var user = dator.getByNick(req.params.nick)
    
    if(user!=false){
        var userInfo = user.userInfo(user);
        res.status(200).send(userInfo)
    }
    else
        response.status(404).send("No existe el usuario con Nick: " + req.params.nick);
    

    res.status(200).send("Borrado " + nick);
});

app.get('/users/getAll', function(req, res){
    var info = dator.all();

    if(info!="")
        res.status(200).send(info)
    else
        response.status(404).send("No hay aún ningún usuario en el sistema");
});

app.delete('/users/:nick', function(req, res){
    dator.borrar(req.params.nick);
 
    res.status(200).send("Borrado " + req.params.nick);
});

app.listen(app.get('port'), server_ip_address, function() {
    console.log("La aplicación corre en el puerto " + server_ip_address + ":" + app.get('port'));
  });

  module.exports = app;