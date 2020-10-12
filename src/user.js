class User{

    /**
     * Constructor básico de la clase Packet.
     * @param {String} nombre - Nombre del usuario
     * @param {String} apellidos - apellidos del usuario
     * @param {String} nick - nick del usuario
     * @param {String} direccion - Dirección del usuario
     * @param {String} fnac - Fecha de nacimiento del usuario
     */
  
    constructor(nuevonombre, nuevosapellidos, nuevonick, nuevadireccion, nuevafnac) {
      this._nombre = nuevonombre;
      this._apellidos = nuevosapellidos;
      this._nick = nuevonick;
      this._direccion = nuevadireccion;
      this._fnac = nuevafnac;
    }
  
    /**
     * métodos get de la clase
     * próximamente se implementarán 
     * más métodos bajo demanda
     */
  
    get nombre(){
      return this._nombre;
    }
  
    get apellidos(){
      return this._apellidos;
    }
  
    get nick(){
      return this._nick;
    }
  
    get direccion(){
      return this._direccion;
    }
  
    get fnac(){
      return this._fnac;
    }
  
    /**
     * métodos set de la clase
     * próximamente se implementarán más métodos bajo demanda
     */
  
     
    set fnac(localizacion){
      this._fnac=localizacion;
    }
  
    set nombre(nuevonombre){
      this._nombre=nuevonombre;
    }
  
    set apellidos(nuevosapellidos){
      this._apellidos=nuevosapellidos;
    }
  
    set nick(nuevonick){
      this._nick=nuevonick;
    }
  
    set direccion(nuevadireccion){
      this._direccion=nuevadireccion;
    }
  
  
    /**
     * Método para obtener información de un paquete HU01
     * No se concreta que recibirá este método porque podría localizarse
     * por id, proporcionando datos distintivos ...
     */
    userInfo() {
      console.log("Se muestran a continuación los datos del usuario",
      "\n Descripción: ", this._nombre,
      "\n apellidos: ", this._apellidos,
      "\n direccion: ", this._direccion,
      "\n nick: ", this._nick,
      "\n Localización Actual: ", this._fnac,
      );
    }

  }

export default User;

  /**
var user = new User('descripcion', '1', 'destino', 'origen', 'agencia');

console.log(user.userInfo());
 */