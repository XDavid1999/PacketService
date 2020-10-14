'use strict';

/**importamos los módulos necesarios*/
var expect = require("chai").expect;
const moduloIndex = require('../src/index.js');
const User = require("../src/user.js");
const Package = require("../src/package.js");


/**Se emulan las tablas de la BD */
var paquetesEnCurso = new Array();
var usuarios = new Array();

/**Se emulan los usuarios que estarán en la BD */
var user1 = new User("pepe@correo.es", "Pepe", "Gonzalez", "PGonz", "Calle Almendra", "30/06/1999");
var user2 = new User("juan@correo.es", "Juan", "Perez", "JuanitoP", "Calle Amor", "20/04/1991");
var user3 = new User("manolo@correo.es", "Manuel", "Revilla", "Revisha", "Calle Estepa", "01/11/1989");

/**SE emulan los paquetes en la BD */
var package1 = new Package("PGonz", "Regalo para Alba", 0.5, "Álava", "Granada", "MRW");
var package2 = new Package("PGonz", "Altavoz wallapop Álvaro", 10, "Santiago de Compostela", "Granada", "Seur", "Álava");
var package3 = new Package("JuanitoP", "Perritos calientes", 1.0, "Almería", "Tarifa", "Nacex", "Valencia");
var package4 = new Package("JuanitoP", "Móvil para arreglar", 0.5, "Almería", "Chillón", "MRW","Madrid");
var package5 = new Package("PGonz", "Regalo para Silvia", 0.5, "Tarifa", "Almadén", "DHL","Huelva");

describe("Testando métodos de index.js", function() {

    describe("Testando el método sendPackage", function sendPackage(paquete) {
  
        it("Comprobando que se añaden paquetes correctamente", ()=>{
            moduloIndex.sendPackage(package1);
            moduloIndex.sendPackage(package2);
            moduloIndex.sendPackage(package3);
            moduloIndex.sendPackage(package4);
            moduloIndex.sendPackage(package5);
            var longArray = moduloIndex.paquetesEnCurso.length;
            expect(longArray).to.equal(5);
        });
        /**it("Testeando que no se envía un paquete si había ya uno en curso con misma descripción, peso, destino, origen y agencia del mismo usuario", ()=>{
            var newFallo = new Error('Paquete duplicado');
            moduloIndex.sendPackage(package2).should.throw(Error('Paquete duplicado'));
        });*/
    });

    describe("Testando el método adduser", function addUser(usuario) {
    
        it("Comprobando que se añade un usuario correctamente", ()=>{
            moduloIndex.addUser(user1);
            moduloIndex.addUser(user2);
            moduloIndex.addUser(user3);
            var longArray = moduloIndex.usuarios.length;
            expect(longArray).to.equal(3);
        });
        /**it("Testeando que no se añade un usuario si había ya uno con mismo nick o email", ()=>{
            var newFallo = new Error('Paquete duplicado');
            moduloIndex.sendPackage(package2).should.throw(Error('Paquete duplicado'));
        });*/
    });

    describe("Testando el método dropOutUser", function dropOutUser(usuario) {
    
        it("Comprobando que se añade elimina un usuario correctamente", ()=>{
            moduloIndex.dropOutUser(user3);
            var longArray = moduloIndex.usuarios.length;
            expect(longArray).to.equal(2);
        });
        /**it("Testeando que no se borra un usuario si aún tiene envíos en curso", ()=>{
            var newFallo = new Error('Paquete duplicado');
            moduloIndex.sendPackage(package2).should.throw(Error('Paquete duplicado'));
        });*/
    });

    describe("Testando el método cancelShipping", function cancelShipping(paquete) {
    
        it("Comprobando que se cancela un envío correctamente", ()=>{
            moduloIndex.cancelShipping(package1);
            var longArray = moduloIndex.paquetesEnCurso.length;
            expect(longArray).to.equal(4);
        });
        /**it("Testeando que no se añade un usuario si había ya uno con mismo nick o email", ()=>{
            var newFallo = new Error('Paquete duplicado');
            moduloIndex.sendPackage(package2).should.throw(Error('Paquete duplicado'));
        });*/
    });    
});

describe("Testando métodos de package.js", function() {

    describe("Testando el método modificarPaquete", function modificarPaquete(paquete) {
  
        it("Comprobando que se modifican paquetes correctamente", ()=>{
            package1.modificarPaquete("nuevadescripcion", 1, "nuevodestino", "nuevaagencia");
            var package6 = new Package("PGonz", "nuevadescripcion", 1, "nuevodestino", "Granada", "nuevaagencia");
            expect(package1.descripcion).to.equal(package6.descripcion);
            expect(package1.peso).to.equal(package6.peso);
            expect(package1.destino).to.equal(package6.destino);
            expect(package1.agencia).to.equal(package6.agencia);
        });
        /**it("Comprobando que no se modifica un paquete si el envío ya está en curso", ()=>{
            var newFallo = new Error('Paquete duplicado');
            moduloIndex.sendPackage(package2).should.throw(Error('Paquete duplicado'));
        });*/
    });

    describe("Testando el método packageInfo", function packageInfo() {
  
        it("Comprobando que se muestrala información de paquetes correctamente", ()=>{
            
            var infopaquete3 = ("Se muestran a continuación los datos del paquete" +
            "\n Propietario: " + "JuanitoP" +
            "\n Descripción: " + "Perritos calientes" +
            "\n Peso: " + "1" +
            "\n Origen: " + "Tarifa" +
            "\n Destino: " + "Almería" +
            "\n Localización Actual: " + "Valencia" +
            "\n Agencia de Transporte: " + "Nacex");
            
            expect(package3.packageInfo()).to.equal(infopaquete3);
        });
    });
});


describe("Testando métodos de user.js", function() {

    describe("Testando el método modificarUsuario", function modificarUsuario(usuario) {
  
        it("Comprobando que se modifican usuarios correctamente", ()=>{
            user1.modificarUsuario("nuevocorreo", "nuevonombre", "nuevosapellidos", "nuevadireccion");
            var user4 = new User("nuevocorreo", "nuevonombre", "nuevosapellidos", "PGonz", "nuevadireccion", "30/06/1999");
            expect(user1.correo).to.eq(user4.correo);
            expect(user1.nombre).to.eq(user4.nombre);
            expect(user1.apellidos).to.eq(user4.apellidos);
            expect(user1.direccion).to.eq(user4.direccion);
        });
    });

    describe("Testando el método userInfo", function userInfo() {
  
        it("Comprobando que se muestrala información de un usuario correctamente", ()=>{
            
            var infouser3 = "Se muestran a continuación los datos del usuario " + "Manuel" +
            "\n Apellidos: " + "Revilla" +
            "\n Direccion: " + "Calle Estepa" +
            "\n Nick: " + "Revisha" +
            "\n Fecha de Nacimiento: " + "01/11/1989" +
            "\n Correo: " + "manolo@correo.es";

            expect(user3.userInfo()).to.equal(infouser3);
        });
    });
});