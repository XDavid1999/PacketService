export default class Package{

  /**
   * Constructor básico de la clase Packet.
   * @param {String} descripcion - Breve descripción del paquete
   * @param {Number} peso - Peso del paquete
   * @param {String} destino - Destino al que se enviará del paquete
   * @param {String} origen - Fecha de nacimiento
   * @param {String} localizacionActual - Localización actual del paquete
   * @param {String} agencia - Agencia con la que se envirá el paquete 
   */

  constructor(nuevadescripcion, nuevopeso, nuevodestino, nuevoorigen, nuevaagencia) {
    this._descripcion = nuevadescripcion;
    this._peso = nuevopeso;
    this._destino = nuevodestino;
    this._origen = nuevoorigen;
    this._localizacionActual = nuevoorigen;
    this._agencia = nuevaagencia;
  }

  /**
   * métodos get de la clase
   * próximamente se implementarán
   * más métodos bajo demanda
   */

  get descripcion(){
    return this._descripcion;
  }

  get peso(){
    return this._peso;
  }

  get destino(){
    return this._destino;
  }

  get origen(){
    return this._origen;
  }

  get localizacionActual(){
    return this._localizacionActual;
  }

  get agencia(){
    return this._agencia;
  }

  /**
   * métodos set de la clase
   * próximamente se implementarán más métodos bajo demanda
   */

   
  set localizacionActual(localizacion){
    this._localizacionActual=localizacion;
  }

  set descripcion(nuevadescripcion){
    this._descripcion=nuevadescripcion;
  }

  set peso(nuevopeso){
    this._peso=nuevopeso;
  }

  set destino(nuevodestino){
    this._destino=nuevodestino;
  }

  set origen(nuevoorigen){
    this._origen=nuevoorigen;
  }

  set agencia(nuevaagencia){
    this._agencia=nuevaagencia;
  }

  /**
   * Método para obtener información de un paquete HU01
   * No se concreta que recibirá este método porque podría localizarse
   * por id, proporcionando datos distintivos ...
   */
  packageInfo() {
    console.log("Se muestran a continuación los datos del paquete",
    "\n Descripción: ", this._descripcion,
    "\n Peso: ", this._peso,
    "\n Origen: ", this._origen,
    "\n Destino: ", this._destino,
    "\n Localización Actual: ", this._localizacionActual,
    "\n Agencia de Transporte: ", this._agencia
    );
  }

    /**
   * Método para cancelar el envío de un paquete HU02
   * No se concreta que recibirá este método porque podría cancelarse
   * por id, proporcionando datos distintivos ...
   */
  cancelShipping() {

  }

  /**
   * Método para enviar un paquete HU03
   */
  sendPackage() {
    
  }

  /**
   * Método para obtener la fecha en la que se envió un paquete
   */
  sendingDate(){
    
  }

}

export default Package;

/** 
var paq = new Packet('descripcion', 1, 'destino', 'origen', 'agencia');

console.log(paq.packageInfo());
*/