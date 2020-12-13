class Dator {
    constructor() {
      if (this.constructor == Dator) {
        throw new Error("Abstract class");
      }
    }
    
    insertar(user) {
      throw new Error("'insertar(user)' not implemented yet");
    }
    
    existe(nick) {
      throw new Error("'existe(nick)' not implemented yet");
    }
  
    modificar(nick, correo, nombre, apellidos, direccion) {
      throw new Error("'modificar(nick, correo, nombre, apellidos, direccion)' not implemented yet");
    }
    
    borrar(nick) {
      throw new Error("'borrar(nick)' not implemented yet");
    }

    mostrar(user){
        throw new Error("'mostrar(user)' not implemented yet");
    }

    getByNick(nick){
      throw new Error("'mostrar(nick)' not implemented yet");
    }

    all(){
      throw new Error("'all()' not implemented yet");
    }
  }
  
  module.exports = { Dator };