const { Dator} = require("./Dator.js");
const { use } = require("./index.js");

class ListDator extends Dator {
    constructor(usuarios) {
        super();
        this._usuarios = usuarios;
      }
      
      insertar(usuario) {
        var duplicado =false;

        this._usuarios.forEach(element => {
            if(usuario.nick==element.nick || usuario.correo == element.correo){
                duplicado=true;
                throw new Error ('Usuario existente en el sistema');
            }
        });
    
        if(duplicado==false)
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
      
        return JSON.stringify(info);
      }

      all(){
        var info=[];

        this._usuarios.forEach(element => {
          info.push(this.mostrar(element));  
        });

        return info;
      }
}

module.exports = {ListDator}