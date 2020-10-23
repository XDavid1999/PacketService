class Agencia{
    /**
     * Constructor básico de la clase Packet.
     * @param {String} nombre - Nombre de la agencia
     * @param {String} correo_contacto - Correo de contacto de la agencia
     * @param {String} telefono - Teléfono de contacto de la agencia
     * @param {Number} oficinas - Número de oficinas de reparto disponibles
     * @param {Number} vehiculos - Número de vehiculos de reparto disponibles
     * @param {String} fecha_alta - Fecha de alta de la agencia en la plataforma
     * @param {String} descripcion - Breve descripción de la agencia
     * @param {Number} valoracion - Valoración media de los clientes a la agencia
     */
  
    constructor(nuevonombre, nuevocorreo, nuevotelefono, nuevasoficinas, nuevosvehiculos, nuevafecha, nuevadescripcion) {
      this._nombre = nuevonombre;
      this._correo_contacto = nuevocorreo;
      this._telefono = nuevotelefono;
      this._oficinas = nuevasoficinas;
      this._vehiculos = nuevosvehiculos;
      this._fecha_alta = nuevafecha;
      this._descripcion = nuevadescripcion;
      this._valoracion = 0;
    }

      /**
   * métodos get de la clase
   */

  get _nombre(){
    return this.correo;
  }

  get _correo_contacto(){
    return this.nombre;
  }

  get _fecha_alta(){
    return this.apellidos;
  }

  get _telefono(){
    return this.nick;
  }

  get _oficinas(){
    return this.direccion;
  }

  get _vehiculos(){
    return this.fnac;
  }

  get nuevadescripcion(){
    return this.direccion;
  }

  get nuevavaloracion(){
    return this.fnac;
  }
  /**
   * métodos set de la clase
   */

  set _nombre(nuevonombre){
    this.nombre= nuevonombre;
  }

  set _correo_contacto(nuevocorreo){
    this.correo_contacto= nuevocorreo;
  }

  set _fecha_alta(nuevafecha){
    this.fecha_alta= nuevafecha;
  }

  set _telefono(nuevotelefono){
    this.telefono= nuevotelefono;
  }

  set _oficinas(masoficinas){
    this.oficinas= masoficinas;
  }

  set _vehiculos(masvehiculos){
    this.vehiculos= masvehiculos;
  }

  set _descripcion(nuevadescripcion){
    this.descripcion= nuevadescripcion;
  }

  set _valoracion(nuevavaloracion){
    this.valoracion= nuevavaloracion;
  }

  /**
   * Método para consultar los datos de la agencia
   * 
   * [HU11]
   */
  agencyInfo() {
    var info = "Se muestran a continuación los datos de la agencia"
    "\n Nombre: " + this._nombre +
    "\n Correo de contacto: " + this._correo_contacto +
    "\n Teléfono de contacto: " +  this._telefono +
    "\n Oficinas disponibles: " + this._oficinas +
    "\n Vehículos disponibles: " + this._vehiculos +
    "\n Descripción: " + this._descripcion +
    "\n Valoración de los clientes: " + this._valoracion +
    "\n Fecha de alta en el sistema: " + this._fecha_alta;
  
    return info;
  }

  /**
   * 
   * @param {String} nuevocorreo - nuevo e-mail que se asignará
   * @param {String} nuevonombre - nuevo nombre que se asignará
   * @param {String} nuevotelefono - nuevos apellidos que se asignarán
   * @param {String} nuevosvehiculos - nueva dirección que se asignará
   * 
   * Con este método se modificarán distintos aspectos básicos de la agencia
   * excepto la fecha en la que se añadió y su valoración
   * 
   * [HU10] 
   */
  modificarAgencia(nuevonombre, nuevocorreo, nuevotelefono, nuevasoficinas, nuevosvehiculos, nuevadescripcion) {
    if(nuevonombre!="") this._nombre = nuevonombre;
    if(nuevocorreo!="") this._correo_contacto = nuevocorreo;
    if(nuevotelefono!="") this._telefono = nuevotelefono;
    if(nuevasoficinas!="") this._oficinas = nuevasoficinas;
    if(nuevosvehiculos!="") this._vehiculos = nuevosvehiculos;
    if(nuevadescripcion!="") this._descripcion = nuevadescripcion;
    /**console.log("Usuario modificado correctamente");*/
  }
}