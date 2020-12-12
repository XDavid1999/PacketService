const { Dator} = require("./Dator.js");
const User = require("./../src/user.js");
const { usuarios } = require("../src/index.js");

class ListDator extends Dator {
    constructor(usuarios) {
        super();
        this._usuarios = usuarios;
      }
      
      insertar(usuario) {
        var duplicado =false;

        usuarios.forEach(element => {
            if(usuario.nick==element.nick || usuario.correo == element.correo){
                duplicado=true;
                throw new Error ('Usuario existente en el sistema');
            }
        });
    
        if(duplicado==false)
            usuarios.push(usuario); 
        
      }
      
      existe(nick) {
        usuarios.forEach(element => {
          if(nick==element.nick)
              return true;
          });

          return false;
      } 
    
      modificar(user) {
        usuarios.forEach(element => {
          if(user.nick==element.nick){
            element.correo = user.correo;
            element.nombre = user.nombre;
            element.apellidos = user.apellidos;
            element.direccion = user.direccion;
          }
        });
      }
      
      borrar(nick) {
        usuarios.forEach(element => {
            if(nick==element.nick)
                usuarios.splice(i, 1);

            i++;
        });
      }

      getByNick(nick){
        if(this.existe(nick))
          usuarios.forEach(element => {
            if(nick==element.nick)
                return element;
          });
        else      
          return false;
      }
  
      mostrar(user){
        var info = "Se muestran a continuación los datos del usuario " + user.nombre +
        "\n Apellidos: " + user._apellidos +
        "\n Direccion: " +  user.direccion +
        "\n Nick: " + user.nick +
        "\n Fecha de Nacimiento: " + user.fnac +
        "\n Correo: " + user.correo;
      
        return info;
      }

      all(){
        var info="";

        usuarios.forEach(element => {
          info += element.mostrar + "\n";  
        });

        return info;
      }
}

module.exports = {ListDator}