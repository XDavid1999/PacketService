const microservicio = require('./../microservicio/index.js');
const request = require('supertest');
var server;

before(function(){
  server = microservicio.listen(5000)
})

after(function(done){
  server.close(done)
})


describe("Testando las rutas del microservicio", function() {
    describe("Testando la modificación de un usuario", function() {
        it("Comprobando que se modifican usuarios correctamente", function(done){
            request(server)
            .put('/users/PGonz/nuevo@nuevo.new/Jose/Gonzalez/CalleNueva')
            .expect('Content-Type', /json/)
            .expect(200,done);
        });

        it("Comprobando que si el usuario no existe se lanza un error", function(done){
            request(server)
            .put('/users/PepeGonz/nuevo@nuevo.new/Jose/Gonzalez/CalleNueva')
            .expect('Content-Type', /json/)
            .expect(404,done)
        });
    });

    describe("Testando el borrado de un usuario", function() {
        it("Comprobando que se borran usuarios correctamente", function(done){
            request(server)
            .delete('/users/PGonz')
            .expect('Content-Type', /json/)
            .expect(200,done);
        });
        
        it("Comprobando que se lanza un error si el usuario no existe", function(done){
            request(server)
            .delete('/users/PGonz')
            .expect('Content-Type', /json/)
            .expect(404,done)
        });
    });
    describe("Testando que se obtienen datos correctamente", function() {
        it("Comprobando que se obtienen datos de un usuario correctamente", function(done){
            request(server)
            .get('/users/JuanitoP')
            .expect('Content-Type', /json/)
            .expect(200,done)
        });
       
        it("Comprobando que si un usuario no existe se devuelve un error", function(done){
            request(server)
            .get('/users/PGonz')
            .expect('Content-Type', /json/)
            .expect(404,done)
        });
    });

    describe("Testando la inserción de un usuario", function() {
        it("Comprobando que se insertan usuarios correctamente", function(done){
            request(server)
            .post('/users/davidh@correo.ugr/david/heredia/XDavid/Jayena/30-06-99')
            .expect('Content-Type', /json/)
            .expect(200,done)
        });

        it("Comprobando que se lanza un error si se intenta insertar un usuario que ya está en el sistema", function(done){
            request(server)
            .post('/users/davidh@correo.ugr/david/heredia/XDavid/Jayena/30-06-99')
            .expect('Content-Type', /json/)
            .expect(404,done)
        });
    });
});