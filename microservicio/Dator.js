class Dator {
    constructor() {
      if (this.constructor == Dator) {
        throw new Error("Abstract class");
      }
    }
    
    insertar(user) {
      throw new Error("'insertar(user)' not implemented yet");
    }
    
    existe(user) {
      throw new Error("'existe(IDUser)' not implemented yet");
    }
  
    modificar(user) {
      throw new Error("'modificar()' not implemented yet");
    }
    
    borrar(user) {
      throw new Error("'borrar()' not implemented yet");
    }

    mostrar(user){
        throw new Error("'mostrar()' not implemented yet");
    }
  }
  
  module.exports = { Dator };