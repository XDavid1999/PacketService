class Packet{

  /**
     * Constructor básico de la clase Packet.
     * @param {String} descripcion - Breve descripción del paquete
     * @param {Number} peso - Peso del paquete
     * @param {String} destino - Destino al que se enviará del paquete
     * @param {String} origen - Fecha de nacimiento
     * @param {String} localizacionActual - Localización actual del paquete
     * @param {String} agencia - Agencia con la que se envirá el paquete 
     */

  constructor(descripcion, peso, destino, origen, agencia) {
    this.descripcion = descripcion;
    this.peso = peso;
    this.destino = destino;
    this.origen = origen;
    this.localizacionActual = origen;
    this.agencia = agencia;

  }

  /**
   * métodos get de la clase
   * próximamente se implementarán más métodos bajo demanda
   */

  get descripcion(){
    return this.descripcion;
  }

  get peso(){
    return this.peso;
  }

  get destino(){
    return this.destino;
  }

  get origen(){
    return this.origen;
  }

  get localizacionActual(){
    return this.localizacionActual;
  }

  get agencia(){
    return this.agencia;
  }

  /**
   * métodos set de la clase
   * próximamente se implementarán más métodos bajo demanda
   */

  set localizacionActual(localizacion){
    this.localizacionActual=localizacion;
  }

  set descripcion(description){
    this.descripcion=description;
  }

  set peso(weight){
    this.peso=weight;
  }

  set destino(destiny){
    this.destino=destiny;
  }

  set origen(origin){
    this.origen=origin;
  }

  set agencia(agency){
    this.agencia=agency;
  }
  /**
   * Método para obtener información de un paquete HU01
   * No se concreta que recibirá este método porque podría localizarse
   * por id, proporcionando datos distintivos ...
   */
  packageInfo() {
    
  }

    /**
   * Método para cancelar el envío de un paquete HU02
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
