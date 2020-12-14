# Microservicio

En este hito trataremos de diseñar un pequeño microservicio. Entendemos como tal una “arquitectura de microservicios” es un enfoque para desarrollar una aplicación software como una serie de pequeños servicios, cada uno ejecutándose de forma autónoma y comunicándose entre sí, por ejemplo, a través de peticiones HTTP a sus API. Crearemos entonces una pequeña API que haga las operaciones CRUD sobre los usuarios de nuestro sistema. Haremos en este documento una descripción de las herramientas utilizadas y su correcta justu¡ificación dentro de nuestro proyecto.

## Funcionamiento

En este justificaremos como la api que hemos creado se integra dentro de nuestro proyecto y su función dentro del mismo.

El archivo [index](https://github.com/XDavid1999/PacketService/blob/master/microservicio/index.js) contiene las rutas con las que hacer consultas a nuestra API. En este caso implementamos cuatro de nuestras HU, en concreto, [HU04](https://github.com/XDavid1999/PacketService/issues/18), [HU05](https://github.com/XDavid1999/PacketService/issues/19), [HU06](https://github.com/XDavid1999/PacketService/issues/20) y [HU08](https://github.com/XDavid1999/PacketService/issues/25).

- Para la implementación de la primera, que nos permitirá registrarnos en el sistema, usaremos la ruta **http://localhost:5000/users/:correo/:nombre/:apellidos/:nick/:direccion/:fnac** con método **POST**. Con ella conseguiremos insertar un nuevo usuario en el sistema con los parámetros proporcionados en la URL; nombre, apellidos, correo... De lo que se encargará nuestro middleware. Como respuesta mostraremos en formato JSON la información del usuario creado y devolveremos como estado 200, lo cuel indica que todo funcionó de manera correcta. En el caso de que tratemos de usar un nick que ya figura en nuestro sistema devolveremos en el mismo formato que anteriormente un mensaje de error y el estado 404, que indica que hubo errores.

- Para la implementación de la segunda, que nos permitirá darnos de baja del sistema, usaremos la ruta **http://localhost:5000/users/:nick** y como método **DELETE**. Accediendo a esta URL conseguiremos dar de baja el usuario con el nick que se nos proporciona como parámetro. La respuesta que se enviará será el nombre del usuario que se ha borrado y como estado 200, el formato será el habitual. En caso de que tratemos de eliminar un usuario no registrado en el sistema procederemos como anteriormente enviando el código de error 404 y el mensaje descriptivo correspondiente en el formato habitual.

- Para la implementación de la tercera, que nos permitirá modificar un usuario perteneciente al sistema, usaremos la ruta **http://localhost:5000/users/:nick/:correo/:nombre/:apellidos/:direccion** y como método **PUT**. Entrando a esta URL conseguiremos modificar el usuario con el nick que se nos proporciona como parámetro estableciendo el nuevo correo, nombre, apellidos y dirección especificados. La respuesta que se enviará serán los datos del usuario que se ha modificado y como estado responderemos 200, el formato que utilizaremos será el habitual. En caso de que tratemos de modificar un usuario no registrado en el sistema procederemos como anteriormente enviando el código de error 404 y el mensaje descriptivo correspondiente en formato JSON.

- Para la implementación de la cuarta HU, que nos permitirá obtener información de un usuario registrado en el sistema, usaremos la ruta **http://localhost:5000/users/:nick** y como método **GET**. Ingresando en esta URL obtendremos la información del usuario con el nick que se nos proporciona como parámetro. La respuesta que se enviará serán los datos del usuario solicitado. Como estado devolveremos 200, OK, y el formato utilizado será JSON. En caso de que tratemos de obtener información de un usuario no registrado en el sistema procederemos como anteriormente enviando el código de error 404 y el mensaje descriptivo correspondiente en formato JSON.

## Herrramientas

### Framework

Un Framework o marco software es una plataforma que nos permite desarrollar aplicaciones de software. Esta nos proporciona una base sobre la que nosotros como desarrolladores podemos crear programas, y en nuestro caso, nuestra API.

A la hora de elegir un framework nos topamos con varias opciones a considerar para nuestro lenguaje, nodejs:

- En primer lugar, el conocido **hapi**, es un framework potente y robusto que posee un sistema de complementos bien desarrollado, según leemos en la web para comparar. Tambén se destaca que cuenta con validación de entrada, almacenamiento en caché, manejo de errores, etc.

- En segundo lugar consideramos **sailjs**. Este framework con la conocida estructura MVC se ha hecho popular entre los desarrolladores al ser usada para la creación de distintas aplicaciones basadas en datos. Sail según se describe realiza un mapeo relacionado con objetos y soluciones DB.

- Por último analizamos **express**. Este es el framework del que hacemos uso en nuestro proyecto por sus relevantes y útiles características. Un punto muy a tener en cuenta es que este framework está apoyado por una gran comunidad de desarrolladores y además la continua actualización que recibe. La documentación que encontramos es ingente y muy clara además de que cualquier probllema que nos surja está resuelto al buscarlo en internet. Su API es muy robusta y cuenta con muchas características que se ajustan al problema que trataremos de resolver, además de que el propio express es compatible con gran cantidad de los paquetes **npm**. 


### Logs

Los logs son archivos que registran los eventos ocurridos en una aplicación, servicio, sistema operativo, etc. Estos recogen los mensajes de eventos sucedidos y llamadas a funciones, entre otros haciendo más sencilla la traza de errores y la comprensión de como nuestro software trabaja.   

En nuestra aplicación haremos uso de esta herramienta mostrando las peticiones a nuestra API en la consola; controlando así el tipo de solicitudes que nos llegan y su contenido comprendiendo y pudiendo trazar el funcionamiento de nuestra aplicación de una manera más sencilla. Usaremos el software de **morgan** para generar nuestros logs. En este lo caso lo elegimos por ser conocido y bastante utilizado además de ser extremadamente sencillo de utilizar.

### Middleware

El middleware se describe como un software que proporciona servicios y capacidades comunes a aplicaciones fuera de lo que ofrece el sistema operativo. En este caso lo usamos para la administración de los datos de nuestra aplicación, lo que nos permitirá crear nuestra aplicación con un código más comprensible y modular, separando la lógica de negocio y la parte de almacenamiento.

En nuestro caso crearemos una clase [base](https://github.com/XDavid1999/PacketService/blob/master/microservicio/Dator.js) de la que se heredará. Esta contiene métodos abstractos que deberá implementar la clase heredadora y que son básicos y necesarios para la correcta gestión de los datos en nuestra aplicación. En nuestro caso, nuestro [**middleware**](https://github.com/XDavid1999/PacketService/blob/master/microservicio/ListDator.js) gestionará una lista de los usuarios en el sistema permitiéndonos insertar nuevos usuarios, comprobar si existen, modificarlos, borrarlos, obtener uno de los mismos por su nick, mostrarlos, etc. Haciendo uso del mismo se simplifica y mejora de forma considerable nuestro código y su lógica.

## Test
Como es habitual [testearemos](https://github.com/XDavid1999/PacketService/blob/master/test/packetServiceIntegrationTest.js) convenientemente el código que se ha creado analizando si el formato del texto que se responde es correcto y si el estado es el esperado al realizar peticiones. Haremmos uso de supertest, con lo que evitaremos tener que estar corriendo nuestro servicio para testearlo. En este caso no necesitamos modificar nada de lo anteriormente creado ya que nuestra orden **gulp test** ejecuta nuestras pruebas de forma correcta y, por ende, nuestro contenedor también.





