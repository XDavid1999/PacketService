# PacketService

## Uso del proyecto

El proyecto desarrollado cuenta con un task runner, **Gulp**, el cual automatiza algunas de las tareas más frecuentes. Entre ellas se han añadido instalar las dependencias necesarias y probar las funciones con los test unitarios desarrollados.

### Ejecución de test
Orden para ejecutar los tests unitarios.

~~~
gulp test
~~~

### Instalación de dependencias
Orden para instalar las dependencias.

~~~
gulp install
~~~


### Default
Si ejecutamos gulp sin parámetros se nos mostrarán en la consola las tareas disponibles.
~~~
gulp
~~~

## Motivación

### ¿Por qué este proyecto?

El problema que este microservicio trata de solventar lo motivan y describen principalmente las historias de usuario que se incluyen en algunos de los issues que se han creado.
Hoy en día el transporte y la logística están entre las actividades comerciales más importantes ya que todos necesitamos de sus servicios para aprovisionarnos de distintos artículos. El aumento de las compras en las tiendas en la web ha motivado que sea aún mayor el tráfico de paquetes que circulan todos los días.

### ¿De qué trata el proyecto?

####  Breve Descripción

La aplicación que se pretende desarrollar permitirá a los usuarios de la misma tener un control de los paquetes que vayan a enviar/recibir en una agencia de transporte. A grandes rasgos podrían saber cual es su punto de partida, su destino, peso, procedencia, etc. 
Además de esto, desde la misma aplicación, los comerciales de distintas empresas de transporte podrían ofrecer sus servicios; permitiendo así que los usuarios puedan elegir una u otra agencia dependiendo del precio, el tiempo de entrega, o las opiniones que otros usuarios hayan tenido de las mismas.

#### Concreción de rasgos de la aplicación

Tras revisar las historias de usuarios que se nos han planteado podemos ver que el servicio que se desarrollará será una parte de un sistema mayor y ayudará a un usuario a poder gestionar además de consultar sus envíos. De este modo, con nuestro servicio podrá modificarse información relativa a paquetes pertenecientes a un usuario, borrarla, crear nuevos paquetes, etc. También se permitirá a los transportistas actualizar la ubicación de los envíos en curso para que los usuarios puedan saber donde están en todo momento.
Además de esto, con el fin de que los usuarios puedan tener un amplio abanico de posibilidades para hacer sus envíos, podrán añadirse al sistema distintas agencias de transporte. Consecuentemente se podrán modificar, ver datos o darse de baja agencias del sistema.

## Desarrollo del Proyecto

En este apartado se informará del progreso del proyecto hasta completarlo pudiendo ver que se hará en cada parte del desarrollo. Quedarán reflejados en el fichero [Steps](https://github.com/XDavid1999/PacketService/blob/master/docs/Steps.md) los pasos para la consecución del objetivo, la app. En él se detallan los avances que se hacen en cada milestone.

- [Milestones](https://github.com/XDavid1999/PacketService/milestones).

- [Issues Abiertos](https://github.com/XDavid1999/PacketService/issues?q=is%3Aopen+is%3Aissue).

- [Issues Cerrados](https://github.com/XDavid1999/PacketService/issues?q=is%3Aissue+is%3Aclosed).

- [Historias de Usuario](https://github.com/XDavid1999/PacketService/issues?q=is%3Aissue+label%3Auser-stories).

## Enlaces a ubicaciones relevantes para el proyecto

- Enlace a la configuración del contenedor, [Dockerfile](https://github.com/XDavid1999/PacketService/blob/master/Dockerfile).
- Enlace al contenedor en [Dockerhub](https://hub.docker.com/r/xdavid1999/packetservice/tags).
- Enlace para acceder al contenedor en [GitHub Container Registry](https://github.com/users/XDavid1999/packages/container/package/packetservice). Con la ayuda de la [guía](https://docs.github.com/en/free-pro-team@latest/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images) oficial.
- Para acceder al [código](https://github.com/XDavid1999/PacketService/tree/master/src) fuente del proyecto.
- Para acceder al fichero [iv.yaml](https://github.com/XDavid1999/PacketService/blob/master/iv.yaml).
- Para acceder a los [test](https://github.com/XDavid1999/PacketService/blob/master/test/packetServiceTest.js) del código.

## Herramientas

Breve descripción de algunas de las herramientas de las que se hará uso en la realización del proyecto.

- **Gestor de Contenedores:** El principal propósito de los contenedores es poder desarrollar aplicaciones más portables. El único requisito para poder ejecutar en cualquier máquina las aplicaciones es tener instalado el software que los crea, independientemente del sistema operativo que la máquina que funcione como host, facilitando así también los despliegues. Como contenedor base haremos uso de [Docker](https://www.docker.com/). Una de las grandes ventajas que podemos destacar es que es posible encapsular todo el entorno de trabajo, de manera que los desarrolladores pueden estar trabajando en su servidor local con la seguridad de que, al llegar el momento de poner la aplicación en producción, se va a ejecutar con la misma configuración sobre la que se han hecho todas las pruebas. Lo elegimos además por que su uso es muy común para el despliegue de servicios y por tanto su documentación y su comunidad son muy extensas.
- **Imagen Base del Contenedor:** La imagen que utilizaremos será node-12.19.0-alpine3.10. Las decisiones que hemos tomado se basan en la explicación en el [archivo](https://github.com/XDavid1999/PacketService/blob/master/docs/comparacion-imagenes.md) en el que comparamos algunas imágenes base de entre las posibles. Además de explicar por qué elegimos el contenedor con alpine realizamos algunas comparaciones de velocidad de ejecución de los test.
-  **Lenguaje:** Utilizaremos [Node.js](https://nodejs.org/) como lenguaje para la realización de nuestro proyecto.
-  **Framework:** Se hará uso de [Hapi](https://hapi.dev/) para la gestión y organización del proyecto, por ser bastante conocido y estar bien documentado.
-  **BD:** Para la gestión de la información utilizaremos [Mysql](https://www.mysql.com/) por haberlo usado en otras asignaturas, ser bastante versátil y fácil de usar.
- **Test Framework:** Haremos nuestros tests con [Mocha](https://mochajs.org/). Desconocía de su existencia antes de hacer los test pero documentándome en google he podido ver su potencial y he aprendido a usarlo.
- **Librería de Aserciones:** Usaremos como librería de aserciones [Chai](https://mochajs.org/). Debido a que nuestro framework de pruebas no incluye librerías de aserciones la usaremos junto a mocha. Desconocía también de esta herrramienta  y tras ver que se usa en distintos casos junto a Mocha decidí usarla.
- **Herramienta de Construcción:** Elegimos [Gulp](https://gulpjs.com/) por su flexibilidad en JavaScript para automatizar flujos de trabajo lentos y repetitivos y componerlos en procesos de construcción eficientes. En principio se trató de usar Grunt pero tras buscar arduamente como integrarlo con Mocha sin éxito decidimos cambiar. Además su sintaxis a priori parece más sencilla ya que Grunt usa archivos de configuración de datos que son similares a JSON , mientras que Gulp usa JavaScript. El código Gulp suele ser mucho más corto que el código Grunt, según he podido encontrar documentándome. Parte de esto se debe a que debe declarar los archivos de origen y destino para cada tarea en Grunt.

## Documentación:

- [Pulse para ver como se realizó la configuración de git y GitHub inicial.](docs/Configuración.md)