class User{
  /**
   * Constructor básico de la clase Packet.
   * @param {String} correo - Correo del usuario
   * @param {String} nombre - Nombre del usuario
   * @param {String} apellidos - apellidos del usuario
   * @param {String} nick - nick del usuario
   * @param {String} direccion - Dirección del usuario
   * @param {String} fnac - Fecha de nacimiento del usuario
   */

  constructor(nuevocorreo, nuevonombre, nuevosapellidos, nuevonick, nuevadireccion, nuevafnac) {
    this._correo = nuevocorreo;
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

  get _correo(){
    return this.correo;
  }

  get _nombre(){
    return this.nombre;
  }

  get _apellidos(){
    return this.apellidos;
  }

  get _nick(){
    return this.nick;
  }

  get _direccion(){
    return this.direccion;
  }

  get _fnac(){
    return this.fnac;
  }

  /**
   * métodos set de la clase
   * próximamente se implementarán más métodos bajo demanda
   */

  set _correo(nuevocorreo){
    this.correo = nuevocorreo;
  }
    
  set _fnac(nuevafnac){
    this.fnac=nuevafnac;
  }

  set _nombre(nuevonombre){
    this.nombre=nuevonombre;
  }

  set _apellidos(nuevosapellidos){
    this.apellidos=nuevosapellidos;
  }

  set _nick(nuevonick){
    this.nick=nuevonick;
  }

  set _direccion(nuevadireccion){
    this.direccion=nuevadireccion;
  }


  /**
   * Método para obtener información de un paquete HU01
   */
  userInfo() {
    var info = "Se muestran a continuación los datos del usuario " + this._nombre +
    "\n Apellidos: " + this._apellidos +
    "\n Direccion: " +  this._direccion +
    "\n Nick: " + this._nick +
    "\n Fecha de Nacimiento: " + this._fnac +
    "\n Correo: " + this._correo;
  
    return info;
  }

  /**
   * 
   * @param {String} nuevocorreo - nuevo correo que se asignará
   * @param {String} nuevonombre - nuevo nombre que se asignará
   * @param {String} nuevosapellidos - nuevos apellidos que se asignarán
   * @param {String} nuevadireccion - nueva dirección que se asignará
   * 
   * Con este método se modificarán distintos aspectos de 
   * un usuario
   */
  modificarUsuario(nuevocorreo, nuevonombre, nuevosapellidos, nuevadireccion) {
    this.correo = nuevocorreo;
    this.nombre = nuevonombre;
    this.apellidos = nuevosapellidos;
    this.direccion = nuevadireccion;
    //console.log("Usuario modificado correctamente");
  }
}

module.exports = User;
