const { Dator} = require("./Dator.js");
const { use } = require("./index.js");

class ListDator extends Dator {
    constructor(usuarios) {
        super();
        this._usuarios = usuarios;
      }
      
      insertar(usuario) {
        this._usuarios.push(usuario);        
      }
      
      existe(nick) {
        var existe=false;

        this._usuarios.forEach(element => {
          if(nick==element.nick)
              existe=true;
          });

        return existe;
      } 
    
      modificar(nick, correo, nombre, apellidos, direccion) {
        var userModify;

        this._usuarios.forEach(element => {
          if(nick==element.nick){
            element.correo = correo;
            element.nombre = nombre;
            element.apellidos = apellidos;
            element.direccion = direccion;

            userModify=element;
          }
        });

        return userModify;
      }
      
      borrar(nick) {
        var i=0;

        this._usuarios.forEach(element => {
            if(nick==element.nick)
                this._usuarios.splice(i, 1);

            i++;
        });
      }

      getByNick(nick){
        if(this.existe(nick)){
          var user;

          this._usuarios.forEach(element => {
            if(nick==element.nick)
              user=element;
          });

          return user;
        }
        else      
          return false;
      }
  
      mostrar(user){

        var info = ({
          "Nombre"               : user.nombre,
          "Apellidos"            : user.apellidos,
          "Direccion"            : user.direccion,
          "Nick"                 : user.nick,
          "Fecha de Nacimiento"  : user.fnac,
          "Correo"               : user.correo
        });
      
      }
}

module.exports = {ListDator}