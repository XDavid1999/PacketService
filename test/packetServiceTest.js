'use strict';

/**importamos los módulos necesarios*/
var expect = require("chai").expect;
const moduloIndex = require('../src/index.js');
const User = require("../src/user.js");
const Package = require("../src/package.js");
const Agency = require("../src/agency.js");


/**Se emulan las tablas de la BD*/
var paquetesEnCurso = new Array();
var usuarios = new Array();
var agencias = new Array();

/**Se emulan los usuarios que estarán en la BD*/
var user1 = new User("pepe@correo.es", "Pepe", "Gonzalez", "PGonz", "Calle Almendra", "30/06/1999");
var user2 = new User("juan@correo.es", "Juan", "Perez", "JuanitoP", "Calle Amor", "20/04/1991");
var user3 = new User("manolo@correo.es", "Manuel", "Revilla", "Revisha", "Calle Estepa", "01/11/1989");

/**Se emulan los paquetes en la BD*/
var package1 = new Package("PGonz", "Regalo para Alba", 0.5, "Álava", "Granada", "MRW");
var package2 = new Package("PGonz", "Altavoz wallapop Álvaro", 10, "Santiago de Compostela", "Granada", "Seur", "Álava");
var package3 = new Package("JuanitoP", "Perritos calientes", 1.0, "Almería", "Tarifa", "Nacex", "Valencia");
var package4 = new Package("JuanitoP", "Móvil para arreglar", 0.5, "Almería", "Chillón", "MRW","Madrid");
var package5 = new Package("PGonz", "Regalo para Silvia", 0.5, "Tarifa", "Almadén", "DHL","Huelva");

/**Se emulan las agencias en la BD*/
var agencia1 = new Agency("MRW", "mrw@mrw.mrw", "674 345 432", 15, 100, "11/10/2011", "Las maletas, tu bicicleta, los palos de golf, tu mascota o un simple paquete. Para tus envíos particulares, recogemos y entregamos donde tú nos digas en menos de 24 horas. Descubre todo lo que podemos hacer por ti...");
var agencia2 = new Agency("HuanitoCorp", "huan@kipsta.victoria", "654 343 232", 100, 500, "18/01/2015", "Llevamos lo que necesites, donde lo necesites, cuando lo necesites. Con mucho cariño.");


describe("Testando métodos de index.js", function() {

    describe("Testando el método sendPackage", function sendPackage(paquete) {
  
        it("Comprobando que se añaden paquetes correctamente", ()=>{
            /**Añadimos paquetes*/
            moduloIndex.sendPackage(package1);
            moduloIndex.sendPackage(package2);
            moduloIndex.sendPackage(package3);
            moduloIndex.sendPackage(package4);
            moduloIndex.sendPackage(package5);
            /** Comprobamos que el cuarto, por ejemplo, se ha introducido correctamente*/
            expect(moduloIndex.paquetesEnCurso[4].agencia).to.equal('DHL');
            /**Comprobamos que todos se han introducido*/
            var longArray = moduloIndex.paquetesEnCurso.length;
            expect(longArray).to.equal(5);
        });
        it("Testeando que no se envía un paquete si había ya uno en curso con misma descripción, peso, destino, origen y agencia del mismo usuario", ()=>{      
            /**Comprobamos que no se ha introducido ningún paquete*/
            var longArray = moduloIndex.paquetesEnCurso.length;
            expect(longArray).to.equal(5);      
            expect(function() { moduloIndex.sendPackage(package2); }).to.throw(Error, /Paquete duplicado/);
        });
    });

    describe("Testando el método adduser", function addUser(usuario) {
    
        it("Comprobando que se añade un usuario correctamente", ()=>{
            /**Añadimos usuarios*/
            moduloIndex.addUser(user1);
            moduloIndex.addUser(user2);
            moduloIndex.addUser(user3);
            /**Comprobamos que, por ejemplo, el tercero se ha introducido correctamente*/
            expect(moduloIndex.usuarios[2].nombre).to.equal('Manuel');
            /**Comprobamos que todos se han introducido*/
            var longArray = moduloIndex.usuarios.length;
            expect(longArray).to.equal(3);
        });
        it("Testeando que no se añade un usuario si había ya uno con mismo nick o email", ()=>{
            /** Comprobamos que no se ha introducido ningún usuario*/
            var longArray = moduloIndex.usuarios.length;
            expect(longArray).to.equal(3);
            expect(function() { moduloIndex.addUser(user1); }).to.throw(Error, /Usuario duplicado/);
        });
    });

    describe("Testando el método dropOutUser", function dropOutUser(usuario) {
    
        it("Comprobando que se elimina un usuario correctamente", ()=>{
            /**Comprobando que se ha eliminado efectivamente un usuario*/
            moduloIndex.dropOutUser(user3);
            var longArray = moduloIndex.usuarios.length;
            expect(longArray).to.equal(2);
        });
        it("Testeando que no se borra un usuario si aún tiene envíos en curso", ()=>{
            /**Comprobando que no se borra el usuario*/
            var longArray = moduloIndex.usuarios.length;
            expect(longArray).to.equal(2);
            expect(function() { moduloIndex.dropOutUser(user2); }).to.throw(Error, /No puede darse de baja hasta que se completen los envíos que tiene en curso/);
        });
    });

    describe("Testando el método cancelShipping", function cancelShipping(paquete) {
    
        it("Comprobando que se cancela un envío correctamente", ()=>{
            /**Comprobando que se cancela, ya que el envío no está aún en curso*/
            moduloIndex.cancelShipping(package1);
            var longArray = moduloIndex.paquetesEnCurso.length;
            expect(longArray).to.equal(4);
        });
        it("Testeando que no se cancela un envío si está ya en curso", ()=>{
            /**Comprobando que no se cancela el envío, ya que está en curso*/
            var longArray = moduloIndex.paquetesEnCurso.length;
            expect(longArray).to.equal(4);     
            expect(function() { moduloIndex.cancelShipping(package4); }).to.throw(Error, /No puede cancelar el envío, ya está en curso/);
        });
    });
    
    describe("Testando el método addAgency", function addAgency(agencia) {
    
        it("Comprobando que se añaden las agencias correctamente", ()=>{
            /**Añadimos agencias*/
            moduloIndex.addAgency(agencia1);
            moduloIndex.addAgency(agencia2);

            /**Comprobamos que, por ejemplo, la primera se ha introducido correctamente*/
            expect(moduloIndex.agencias[0].nombre).to.equal('MRW');
            /**Comprobamos que todas se han introducido*/
            var longArray = moduloIndex.agencias.length;
            expect(longArray).to.equal(2);
        });
        it("Testeando que no se añade una agencia si ya había una en el sistema con mismo teléfono de contacto o email", ()=>{
            /** Comprobamos que no se ha introducido ningún usuario*/
            var longArray = moduloIndex.agencias.length;
            expect(longArray).to.equal(2);
            expect(function() { moduloIndex.addAgency(agencia1); }).to.throw(Error, /Agencia ya existente/);
        });
    });

    describe("Testando el método dropOutAgency", function dropOutAgency(agencia) {
    
        it("Comprobando que se elimina una agencia correctamente", ()=>{
            /**Comprobando que se ha eliminado efectivamente una agencia*/
            moduloIndex.dropOutAgency(agencia2);
            var longArray = moduloIndex.agencias.length;
            expect(longArray).to.equal(1);
        });
        it("Testeando que no se borra una agencia si aún están en curso envíos con la misma", ()=>{
            /**Comprobando que no se borra la agencia*/
            var longArray = moduloIndex.usuarios.length;
            expect(longArray).to.equal(2);
            expect(function() { moduloIndex.dropOutAgency(agencia1); }).to.throw(Error, /No puede dar de baja esta agencia hasta que se completen los envíos que tiene en curso/);
        });
    });
});

describe("Testando métodos de package.js", function() {

    describe("Testando el método modificarPaquete", function modificarPaquete(paquete) {
  
        it("Comprobando que se modifican paquetes correctamente", ()=>{
            package1.modificarPaquete("nuevadescripcion", 1, "nuevodestino", "nuevaagencia");
            var package6 = new Package("PGonz", "nuevadescripcion", 1, "nuevodestino", "Granada", "nuevaagencia");
            /**Comprobando que efectivamente se modifican los atributos que la modificación alude*/
            expect(package1.descripcion).to.equal(package6.descripcion);
            expect(package1.peso).to.equal(package6.peso);
            expect(package1.destino).to.equal(package6.destino);
            expect(package1.agencia).to.equal(package6.agencia);
        });
        it("Comprobando que no se modifica un paquete si el envío ya está en curso", ()=>{
            /**Comprobando que se ha lanzado el error correspondiente*/
            expect(function() { package4.modificarPaquete("nuevadescripcion", 1, "nuevodestino", "nuevaagencia"); }).to.throw(Error, /El paquete no puede modificarse, el envío ya está en curso/);
        });
    });

    describe("Testando el método packageInfo", function packageInfo() {
  
        it("Comprobando que se muestrala información de paquetes correctamente", ()=>{
            /**Salida que se espera*/
            var infopaquete3 = ("Se muestran a continuación los datos del paquete" +
            "\n Propietario: " + "JuanitoP" +
            "\n Descripción: " + "Perritos calientes" +
            "\n Peso: " + "1" +
            "\n Origen: " + "Tarifa" +
            "\n Destino: " + "Almería" +
            "\n Localización Actual: " + "Valencia" +
            "\n Agencia de Transporte: " + "Nacex");
            /**Comprobando que la salida que se produce es la esperada*/
            expect(package3.packageInfo()).to.equal(infopaquete3);
        });
    });
});


describe("Testando métodos de user.js", function() {

    describe("Testando el método modificarUsuario", function modificarUsuario(usuario) {
  
        it("Comprobando que se modifican usuarios correctamente", ()=>{
            user1.modificarUsuario("nuevocorreo", "nuevonombre", "nuevosapellidos", "nuevadireccion");
            var user4 = new User("nuevocorreo", "nuevonombre", "nuevosapellidos", "PGonz", "nuevadireccion", "30/06/1999");
            /**Comprobando que efectivamente se modifican los atributos que se aluden*/
            expect(user1.correo).to.eq(user4.correo);
            expect(user1.nombre).to.eq(user4.nombre);
            expect(user1.apellidos).to.eq(user4.apellidos);
            expect(user1.direccion).to.eq(user4.direccion);
        });
    });

    describe("Testando el método userInfo", function userInfo() {
  
        it("Comprobando que se muestra la información de un usuario correctamente", ()=>{
            /**Salida que se espera*/
            var infouser3 = "Se muestran a continuación los datos del usuario " + "Manuel" +
            "\n Apellidos: " + "Revilla" +
            "\n Direccion: " + "Calle Estepa" +
            "\n Nick: " + "Revisha" +
            "\n Fecha de Nacimiento: " + "01/11/1989" +
            "\n Correo: " + "manolo@correo.es";
            /**Comprobando que la salida que se produce es la esperada*/
            expect(user3.userInfo()).to.equal(infouser3);
        });
    });
});

describe("Testando métodos de agency.js", function() {

    describe("Testando el método modificaAgencia", function modificarAgencia(agencia) {
  
        it("Comprobando que se modifican los datos de la agencia correctamente", ()=>{
            agencia2.modificarAgencia("nuevonombre", "nuevocorreo", "nuevotelefono", 4, 12, "nuevadescripcion");
            var agencia3 = new Agency("nuevonombre", "nuevocorreo", "nuevotelefono", 4, 12, "18/01/2015", "nuevadescripcion");
            /**Comprobando que efectivamente se modifican los atributos que la modificación alude*/
            expect(agencia2.nombre).to.eq(agencia3.nombre);
            expect(agencia2.correo_contacto).to.eq(agencia3.correo_contacto);
            expect(agencia2.descripcion).to.eq(agencia3.descripcion);
            expect(agencia2.telefono).to.eq(agencia3.telefono);
            expect(agencia2.oficinas).to.eq(agencia3.oficinas);
            expect(agencia2.vehiculos).to.eq(agencia3.vehiculos);
        });
    });

    describe("Testando el método agencyInfo", function agencyInfo() {
  
        it("Comprobando que se muestra la información de la agencia correctamente", ()=>{
            /**Salida que se espera*/
            var info = "Se muestran a continuación los datos de la agencia"
            "\n Nombre: " + "MRW" +
            "\n Correo de contacto: " + "mrw@mrw.mrw" +
            "\n Teléfono de contacto: " +  "674 345 432" +
            "\n Oficinas disponibles: " + "10" +
            "\n Vehículos disponibles: " + "100" +
            "\n Descripción: " + "Las maletas, tu bicicleta, los palos de golf, tu mascota o un simple paquete. Para tus envíos particulares, recogemos y entregamos donde tú nos digas en menos de 24 horas. Descubre todo lo que podemos hacer por ti..." +
            "\n Valoración de los clientes: " + "0" +
            "\n Fecha de alta en el sistema: " + "11/10/2011";
            /**Comprobando que la salida que se produce es la esperada*/
            expect(agencia1.agencyInfo()).to.equal(info);
        });
    });
});

