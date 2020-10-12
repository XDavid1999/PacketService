'use strict';

const User = require("./user.js");
const Package = require("./package.js");
const Package = require("./package.js");
const User = require("./user.js");

var paquetesEnCurso = new Array();
var usuarios = new Array();

let user1 = new User("pepe@correo.es", "Pepe", "Gonzalez", "PGonz", "Calle Almendra", "30/06/1999");
let user2 = new User("juan@correo.es", "Juan", "Perez", "JuanitoP", "Calle Amor", "20/04/1991");
let user3 = new User("manolo@correo.es", "Manuel", "Revilla", "Revisha", "Calle Estepa", "01/11/1989");

let package1 = new Package("PGonz", "Regalo para Alba", 0.5, "Álava", "Granada", "MRW");
let package2 = new Package("PGonz", "Altavoz wallapop Álvaro", 10, "Santiago de Compostela", "Granada", "Seur", "Álava");
let package3 = new Package("JuanitoP", "Perritos calientes", 1.0, "Almería", "Tarifa", "Nacex", "Valencia");
let package4 = new Package("JuanitoP", "Móvil para arreglar", 0.5, "Almería", "Chillón", "MRW","Madrid");
let package5 = new Package("PGonz", "Regalo para Silvia", 0.5, "Tarifa", "Almadén", "DHL","Huelva");

/**
 * Si un usuario tiene dos paquetes con descripciónes iguales
 * en proceso de envío se tomará como duplicado y no se realizará
 * el envío 
 *
 * @param {Package} paquete - Paquete a enviar
 */
function sendPackage(paquete){
    var duplicado =false;

    paquetesEnCurso.forEach(element => {
        if(paquete.nickusuario==element.nickusuario && paquete.descripcion == element.descripcion){
            duplicado=true;
            console.log("El paquete con descripción ", paquete.descripcion, "está duplicado, si no es así cambie la descripción y proceda a reenviar");
        }
    });

    if(duplicado==false){
        paquetesEnCurso.push(paquete);    
        console.log("Envío tramitado correctamente");
    }
}

/**
 * Si dos usuarios tienen mismo e-mail o mismo nick se tomará como
 * duplicado y no se realizará la adición del usuario 
 * 
 * @param {User} usuario - Usuario que se añadirá 
 */
function addUser(usuario){
    var duplicado =false;

    usuarios.forEach(element => {
        if(usuario.nick==element.nick || usuario.correo == element.correo){
            duplicado=true;
            console.log("El usuario con nick: ", usuario.nick, " y correo: ", usuario.correo, "no se añadirá porque ya figura en el sistema");
        }
    });

    if(duplicado==false){
        usuarios.push(usuario);    
        console.log("El usuario con nick: ",  usuario.nick, " se ha añadido correctamente");
    }
}

/**
 * Función para cancelar envíos
 * (sólo se podrá si no está ya en curso)
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
        console.log("Cancelado correctamente");
    }
    else
        console.log("El paquete ya ha sido enviado, no puede cancelar su envío");
}

/**
 * Función para darse de baja del sistema
 * si hay envíos en curso no se podrá
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
            if(usuario.nick==element.nick)
                usuarios.splice(i, 1);

            i++;
        });
        console.log("Usuario eliminado correctamente");
    }
    else
        console.log("Tiene envíos en curso, no podrá darse de baja hasta que no sean completados");
}

/**
sendPackage(package1);
sendPackage(package2);
sendPackage(package2);
console.log("\n",paquetesEnCurso);
sendPackage(package1);
user1.userInfo();
*/

/**
addUser(user1);
addUser(user1);
addUser(user2);
console.log("\n",usuarios);
addUser(user2);
*/

console.log(package2);
package2.modificarPaquete("El titi de las nenas", 5, "Allí","Agensia");
console.log(package2);