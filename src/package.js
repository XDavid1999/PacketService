class Package{

  /**
   * Constructor básico de la clase Packet.
   * @param {String} Nickusuario - Nickusuario al que pertenece el del paquete
   * @param {String} descripcion - Breve descripción del paquete
   * @param {Number} peso - Peso del paquete
   * @param {String} destino - Destino al que se enviará del paquete
   * @param {String} origen - Fecha de nacimiento
   * @param {String} localizacionActual - Localización actual del paquete
   * @param {String} agencia - Agencia con la que se envirá el paquete 
   */

  constructor(nuevousuario, nuevadescripcion, nuevopeso, nuevodestino, nuevoorigen, nuevaagencia, nuevalocalizacionactual) {
    this._nickusuario=nuevousuario;
    this._descripcion = nuevadescripcion;
    this._peso = nuevopeso;
    this._destino = nuevodestino;
    this._origen = nuevoorigen;
    this._agencia = nuevaagencia;
    if(typeof nuevalocalizacionactual !== "undefined") 
      this._localizacionActual=nuevalocalizacionactual;
    else
      this._localizacionActual = nuevoorigen;
  }

  /**
   * métodos get de la clase
   * próximamente se implementarán
   * más métodos bajo demanda
   */

  get _nickusuario(){
    return this.nickusuario;
  }

  get _descripcion(){
    return this.descripcion;
  }

  get _peso(){
    return this.peso;
  }

  get _destino(){
    return this.destino;
  }

  get _origen(){
    return this.origen;
  }

  get _localizacionActual(){
    return this.localizacionActual;
  }

  get _agencia(){
    return this.agencia;
  }

  /**
   * métodos set de la clase
   * próximamente se implementarán más métodos bajo demanda
   */

  set _nickusuario(nuevousuario){
    this.nickusuario=nuevousuario;
  }
   
  set _localizacionActual(localizacion){
    this.localizacionActual=localizacion;
  }

  set _descripcion(nuevadescripcion){
    this.descripcion=nuevadescripcion;
  }

  set _peso(nuevopeso){
    this.peso=nuevopeso;
  }

  set _destino(nuevodestino){
    this.destino=nuevodestino;
  }

  set _origen(nuevoorigen){
    this.origen=nuevoorigen;
  }

  set _agencia(nuevaagencia){
    this.agencia=nuevaagencia;
  }


  /**
   * Método para obtener información de un paquete HU01
   * No se concreta que recibirá este método porque podría localizarse
   * por id, proporcionando datos distintivos ...
   */
  packageInfo() {
    var info = ("Se muestran a continuación los datos del paquete" +
    "\n Propietario: " + this._nickusuario +
    "\n Descripción: " + this._descripcion +
    "\n Peso: " + this._peso +
    "\n Origen: " + this._origen +
    "\n Destino: " + this._destino +
    "\n Localización Actual: " + this._localizacionActual +
    "\n Agencia de Transporte: " + this._agencia);

    return info;
  }


  /**
   * Método para modificar algunos aspectos de un paquete
   * 
   * 
   * Constructor básico de la clase Packet.
   * @param {String} nuevadescripcion - Nueva descripción del paquete
   * @param {Number} nuevopeso - Nuevo peso del paquete
   * @param {String} nuevodestino - Nuevo destino al que se enviará del paquete
   * @param {String} nuevaagencia - Nueva agencia con la que se envirá el paquete 
   */
   modificarPaquete(nuevadescripcion, nuevopeso, nuevodestino, nuevaagencia) {
      if(this.localizacionActual==this.origen){
        this.descripcion = nuevadescripcion;
        this.peso = nuevopeso;
        this.destino = nuevodestino;
        this.agencia = nuevaagencia;
        //console.log("Paquete modificado correctamente");
      }
      else
        //console.log("El paquete no puede modificarse, el envío ya está en curso");
        throw new Error ('El paquete no puede modificarse, el envío ya está en curso');
  }

}

module.exports = Package;
