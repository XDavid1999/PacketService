class PacketService{

  constructor(descripcion, peso, destino, origen) {
    this.descripcion = descripcion;
    this.peso = peso;
    this.destino = destino;
    this.origen = origen;
    this.localizacionActual = origen;
  }

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

  get idpaquete(){
    return this.idpaquete;
  }

}
