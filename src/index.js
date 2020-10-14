'use strict';

const User = require("./user.js");
const Package = require("./package.js");

/**
 * Si un usuario tiene dos paquetes con descripciónes, pesos, destino, origen y
 * agencia iguales en proceso de envío se tomará como duplicado y no se realizará
 * el envío, en caso contrario se ednviará normalmente
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
            throw new Error('Paquete duplicado');
        }
    });

    if(duplicado==false){
        paquetesEnCurso.push(paquete);    
        /**console.log("Envío tramitado correctamente");*/
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
            if(paquete.nickusuario==element.nickusuario && paquete.descripcion == element.descripcion)
                paquetesEnCurso.splice(i, 1);

            i++;
        });
        /**console.log("Cancelado correctamente");*/
    }
    else
        /**console.log("El paquete ya ha sido enviado, no puede cancelar su envío");*/
        throw new Error ('No puede cancelar el envío, ya está en curso');
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
        throw new Error ('No puede darse de baja hasta que se completen los envíos que tiene en curso');
        /**console.log("Tiene envíos en curso, no podrá darse de baja hasta que no sean completados");*/
}

module.exports = {
    addUser,
    dropOutUser,
    cancelShipping,
    sendPackage,
    usuarios,
    paquetesEnCurso
}