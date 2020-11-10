'use strict';

const User = require("./user.js");
const Package = require("./package.js");
const Agency = require("./agency.js");
const Office = require("./office.js");


/**Se emulan las tablas de la BD */ 
var paquetesEnCurso = new Array();
var usuarios = new Array();
var agencias = new Array();
var oficinasAgencias = new Array();
const EstadoPaquete = Object.freeze({"EN_REPARTO":1, "EN_OFICINA":2, "ENTREGADO":3, "CANCELADO":4, "ESPERANDO_RECOGIDA_PRESENCIAL":5})


/**
 * Si un usuario tiene dos paquetes con descripciónes, pesos, destino, origen y
 * agencia iguales en proceso de envío se tomará como duplicado y no se realizará
 * el envío, en caso contrario se enviará normalmente
 * 
 * [HU03]
 * 
 * @param {Package} paquete - Paquete a enviar
 */
function sendPackage(paquete){
    var duplicado =false;

    paquetesEnCurso.forEach(element => {
        if(paquete.nickusuario==element.nickusuario && paquete.descripcion == element.descripcion && paquete.peso == element.peso 
            && paquete.agencia == element.agencia && paquete.destino == element.destino && paquete.origen == element.origen){
            duplicado=true;
            /**console.log("El paquete con descripción ", paquete.descripcion, "está duplicado, si no es así cambie la descripción y proceda a reenviar");*/
            throw new Error ('Paquete duplicado');
        }
    });


    if(duplicado==false){
        paquetesEnCurso.push(paquete);    
        /**console.log("Envío tramitado correctamente");*/
    }
}
/**
 * Si una agencia tiene mismo teléfono de contacto, correo o nombre
 * se tomará como ya existente en el sistema y no se añadirá, en caso
 * contrario se añadirá normalmente
 * 
 * [HU09]
 * 
 * @param {Agency} agencia - Paquete a enviar
 */
function addAgency(agencia){
    var duplicado=false;

    agencias.forEach(element => {
        if(agencia.nombre==element.nombre || agencia.telefono == element.telefono || agencia.correo_contacto == element.correo){
            duplicado=true;
            throw new Error ('Agencia ya existente');
        }
    });


    if(duplicado==false){
        agencias.push(agencia);    
        /*console.log("Agencia añadida correctamente");*/
    }
}

/**
 * Si dos usuarios tienen mismo e-mail o mismo nick se tomará como duplicado y no se
 * realizará la adición del usuario, en caso contrario se añadirá normailmente
 * 
 * [HU04]
 * 
 * @param {User} usuario - Usuario que se añadirá 
 */
function addUser(usuario){
    var duplicado =false;

    usuarios.forEach(element => {
        if(usuario.nick==element.nick || usuario.correo == element.correo){
            duplicado=true;
            /**console.log("El usuario con nick: ", usuario.nick, " y correo: ", usuario.correo, "no se añadirá porque ya figura en el sistema");*/
            throw new Error ('Usuario duplicado');
        }
    });

    if(duplicado==false){
        usuarios.push(usuario);    
        /**console.log("El usuario con nick: ",  usuario.nick, " se ha añadido correctamente");*/
    }
}

/**
 * Función para cancelar envíos (sólo se podrá si no está ya en curso)
 * 
 * [HU02]
 * 
 * @param {Package} paquete - Paquete a cancelar
 */
function cancelShipping(paquete){


    if(paquete.localizacionActual==paquete.origen){
        let i=0;

        paquetesEnCurso.forEach(element => {
            if(paquete.nickusuario==element.nickusuario && paquete.descripcion == element.descripcion){
                paquetesEnCurso.splice(i, 1);
                element.estado=EstadoPaquete.CANCELADO;
            }

            i++;
        });
        /**console.log("Cancelado correctamente");*/
    }
    else
        /**console.log("El paquete ya ha sido enviado, no puede cancelar su envío");*/
        throw new Error ('No puede cancelar el envío, ya está en curso');

}

/**
 * Función para eliminar una agencia del sistema
 * 
 * [HU12]
 * 
 * @param {Agency} agencia - Agencia a eliminar
 */
function dropOutAgency(agencia){
    var envioEnCurso=false;

    paquetesEnCurso.forEach(element => {
        if(element.agencia==agencia.nombre)
            envioEnCurso=true;
    });

    if(envioEnCurso==false){
        let i=0;

        agencias.forEach(element => {
            if(agencia.telefono==element.telefono)
                agencias.splice(i, 1);

            i++;
        });
        /*console.log("Agencia eliminada correctamente");*/
    }
    else
        throw new Error('No puede dar de baja esta agencia hasta que se completen los envíos que tiene en curso');
        /**console.log("No puede dar de baja esta agencia hasta que se completen los envíos que tiene en curso");*/
}

/**
 * Función para darse de baja del sistema, si hay el usuario tiene envíos en curso no
 * se podrá
 *
 * [HU05]
 * 
 * @param {User} usuario - Usuario que se eliminará 
 */
function dropOutUser(user){
    var envioEnCurso=false;

    paquetesEnCurso.forEach(element => {
        if(element.nickusuario==user.nick)
            envioEnCurso=true;
    });

    if(envioEnCurso==false){
        let i=0;

        usuarios.forEach(element => {
            if(user.nick==element.nick)
                usuarios.splice(i, 1);

            i++;
        });
        /**console.log("Usuario eliminado correctamente");*/
    }
    else
        throw new Error('No puede darse de baja hasta que se completen los envíos que tiene en curso');
        /**console.log("Tiene envíos en curso, no podrá darse de baja hasta que no sean completados");*/

}

/**
 * Si una oficina tiene mismo teléfono de contacto, correo o direccion
 * se tomará como ya registrada en el sistema y no se añadirá, en caso
 * contrario se añadirá normalmente
 * 
 * [HU13]
 * 
 * @param {Office} oficina - Oficina a añadir
 */
function addOffice(oficina){
    var duplicado=false;

    oficinasAgencias.forEach(element => {
        if(oficina.direccion==element.direccion || oficina.telefono == element.telefono || oficina.correo_contacto == element.correo){
            duplicado=true;
            throw new Error ('Oficina ya registrada en el sistema');
        }
    });


    if(duplicado==false){
        oficinasAgencias.push(oficina);    
    }
}

/**
 * Función para dar una oficina de baja del sistema
 *
 * [HU15]
 * 
 * @param {Office} oficina - Oficina que se eliminará 
 */
function dropOutOffice(oficina){
    var envioEnCurso=false;

    oficinasAgencias.forEach(element => {
        if(element.correo_contacto==oficina.correo_contacto && element.enviosEnCurso!=0)
            envioEnCurso=true;
    });

    if(envioEnCurso==false){
        let i=0;

        oficinasAgencias.forEach(element => {
            if(oficina.correo_contacto==element.correo_contacto)
                oficinasAgencias.splice(i, 1);

            i++;
        });
    }
    else
        throw new Error('No puede dar de baja esta oficina hasta que se hayan completado los envíos en curso');
}

/**
 * Función para actualizar la localización de un paquete, sea por el repartidor o si el
 * usuario desea saber la localización de un paquete, en cuyo caso el método se invocará
 * con el parámetro *localización* vacío
 * 
 * [HU17], [HU18]
 * 
 * @param {Package} paquete - Paquete al que actualizar la localización
 * @param {String} localizacion - Nueva localización a la que ha llegado el paquete
 */
function updateLocation(paquete, localizacion=""){
    /**Si el paquete a llegado a una de las oficinas lo añadimos al número de envíos que se están llevando a cabo */
    var oficina="";

    oficinasAgencias.forEach(element => {
        if(element.direccion==localizacion){
            oficina=element;
            oficina.enviosEnCurso++;
            
            if(paquete.destino==localizacion)
                paquete.estado=EstadoPaquete.ESPERANDO_RECOGIDA_PRESENCIAL;
            else
                paquete.estado=EstadoPaquete.EN_OFICINA;
        }
        else if(paquete.destino==localizacion)
            paquete.estado=EstadoPaquete.ENTREGADO;
        else if(!element.direccion==localizacion && paquete.localizacionActual!=paquete.origen)
            paquete.estado=EstadoPaquete.EN_REPARTO;
    });

    if(localizacion!="")
        paquete.localizacionActual=localizacion;
    
}

module.exports = {
    addAgency,
    dropOutAgency,
    addUser,
    dropOutUser,
    cancelShipping,
    sendPackage,
    addOffice,
    dropOutOffice,
    updateLocation,
    EstadoPaquete,
    usuarios,
    agencias,
    paquetesEnCurso,
    oficinasAgencias
}