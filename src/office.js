class Office{
    /**
     * Constructor básico de la clase Office.
     * @param {String} correo_contacto - Correo de contacto de la oficina
     * @param {String} telefono - Teléfono de contacto de la oficina
     * @param {Number} vehiculos - Número de vehiculos de reparto disponibles en la oficina
     * @param {String} fecha_alta - Fecha de alta de la oficina en la plataforma
     * @param {String} direccion - Nueva dirección de la oficina
     * @param {Agency} agencia - Agencia a la que pertenece esta oficina
     */
  
    constructor(nuevocorreo, nuevotelefono, nuevosvehiculos, nuevafecha, nuevadireccion, nuevaagencia) {
      this._correo_contacto = nuevocorreo;
      this._telefono = nuevotelefono;
      this._vehiculos = nuevosvehiculos;
      this._fecha_alta = nuevafecha;
      this._direccion = nuevadireccion;
      this._agencia = nuevaagencia;
    }

      /**
   * métodos get de la clase
   */

  get _correo_contacto(){
    return this.correo_contacto;
  }

  get _fecha_alta(){
    return this.fecha_alta;
  }

  get _telefono(){
    return this.telefono;
  }

  get _vehiculos(){
    return this.vehiculos;
  }

  get _direccion(){
    return this.direccion;
  }

  get _agencia(){
    return this.agencia;
  }

  /**
   * métodos set de la clase
   */

  set _correo_contacto(nuevocorreo){
      this.correo_contacto = nuevocorreo;
  }

  set _fecha_alta(nuevafecha){
      this.fecha_alta = nuevafecha;
  }

  set _telefono(nuevotelefono){
      this.telefono = nuevotelefono;
  }

  set _vehiculos(nuevosvehiculos){
      this.vehiculos = nuevosvehiculos;
  }

  set _direccion(nuevadireccion){
      this.direccion = nuevadireccion;
  }

  set _agencia(nuevaagencia){
      this.agencia = nuevaagencia;
  }

  /**
   * Método para consultar los datos de una oficina
   * 
   * [HU14]
   */
  officeInfo() {
    var info = "Se muestran a continuación los datos de la oficina"
    "\n Correo de contacto: " + this.correo_contacto +
    "\n Teléfono de contacto: " +  this.telefono +
    "\n Vehículos disponibles: " + this.vehiculos +
    "\n Fecha de alta en el sistema: " + this.fecha_alta
    "\n Dirección: " + this.direccion +
    "\n Agencia a la que pertenece: " + this.agencia ;
  
    return info;
  }

  /**
   * 
     * @param {String} nuevocorrep - Nuevo correo de contacto de la oficina
     * @param {String} nuevotelefono - Nuevo teléfono de contacto de la oficina
     * @param {Number} nuevosvehiculos - Nuevo número de vehiculos de reparto disponibles en la oficina
     * @param {String} nuevafecha - Nueva fecha de alta de la oficina en la plataforma
     * @param {String} nuevadireccion - Nueva dirección de la oficina
     * @param {Agency} nuevaagencia - Nueva agencia a la que pertenece esta oficina
   * 
   * Con este método se modificarán distintos aspectos básicos de la agencia
   * excepto la fecha en la que se añadió y su valoración
   * 
   * [HU16] 
   */
  modificarOficina(nuevocorreo, nuevotelefono, nuevosvehiculos, nuevadireccion) {
    this._correo_contacto = nuevocorreo;
    this._telefono = nuevotelefono;
    this._vehiculos = nuevosvehiculos;
    this._direccion = nuevadireccion;
  }
}

module.exports = Office;