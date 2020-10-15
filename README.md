# PacketService

![](/docs/images/box.png)
## Uso del proyecto

El proyecto desarrollado cuenta con un task runner, **Gulp**, el cual automatiza algunas de las tareas más frecuentes. Entre ellas se han añadido instalar las dependencias necesarias y probar las funciones con los test unitarios desarrollados.

#### Ejecución de test
Orden para ejecutar los tests unitarios.
`gulp test`

#### Instalación de dependencias
Orden para instalar las dependencias.
`gulp install`

#### Default
Si ejecutamos gulp sin parámetros se nos mostrarán en la consola las tareas disponibles.
`gulp`

## Motivación

### ¿Por qué este proyecto?

El problema que este microservicio trata de solventar lo motivan y describen principalmente las historias de usuario que se incluyen en algunos de los issues que se han creado.
Hoy en día el transporte y la logística están entre las actividades comerciales más importantes ya que todos necesitamos de sus servicios para aprovisionarnos de distintos artículos. El aumento de las compras en las tiendas en la web ha motivado que sea aún mayor el tráfico de paquetes que circulan todos los días.

### ¿De qué trata el proyecto?

####  Breve Descripción
La aplicación que se pretende desarrollar permitirá a los usuarios de la misma tener un control de los paquetes que vayan a enviar/recibir en una agencia de transporte. A grandes rasgos podrían saber cual es su punto de partida, su destino, peso, procedencia, etc.

#### Concreción de rasgos de la aplicación
Tras revisar las historias de usuarios que se nos han planteado podemos ver que el servicio que se desarrollará será una parte de un sistema mayor y ayudará a un usuario a poder gestionar además de consultar sus envíos. De este modo, con nuestro servicio podrá modificarse información relativa a paquetes pertenecientes a un usuario, borrarla, crear nuevos paquetes, etc. También se permitirá a los transportistas actualizar la ubicación de los envíos en curso para que los usuarios puedan saber donde están en todo momento.

## Desarrollo del Proyecto

En este apartado se informará del progreso del proyecto hasta completarlo pudiendo ver que se hará en cada parte del desarrollo. Quedarán reflejados en el fichero [Steps](docs/Steps.md) los pasos para la consecución del objetivo, la app. En él se detallan los avances que se hacen en cada milestone.

- [Milestones](https://github.com/XDavid1999/PacketService/milestones) 

- [Issues Abiertos](https://github.com/XDavid1999/PacketService/issues?q=is%3Aopen+is%3Aissue)

- [Issues Cerrados](https://github.com/XDavid1999/PacketService/issues?q=is%3Aissue+is%3Aclosed)

- [Historias de Usuario](https://github.com/XDavid1999/PacketService/issues?q=is%3Aissue+label%3Auser-stories)

## Enlaces a ubicaciones del proyecto

- Para acceder al [código](https://github.com/XDavid1999/PacketService/tree/master/src) fuente del proyecto.
- Para acceder al fichero [iv.yaml](https://github.com/XDavid1999/PacketService/blob/master/iv.yaml).

## Herramientas

Breve descripción de algunas de las herramientas de las que se hará uso.

-  **Lenguaje:** Utilizaremos [Node.js](https://nodejs.org/) como lenguaje para la realización de nuestro proyecto.
-  **Framework:** Se hará uso de [Hapi](https://hapi.dev/) para la gestión y organización del proyecto, por ser bastante conocido y estar bien documentado.
-  **BD:** Para la gestión de la información utilizaremos [Mysql](https://www.mysql.com/) por haberlo usado en otras asignaturas, ser bastante versátil y fácil de usar.
- **Test Framework:** Haremos nuestros tests con [Mocha](https://mochajs.org/). Desconocía de su existencia antes de hacer los test pero documentándome en google he podido ver su potencial y he aprendido a usarlo.
- **Librería de aserciones:** Usaremos como librería de aserciones [Chai](https://mochajs.org/). Desconocía también de esta herrramienta  y tras ver que se usa en distintos casos junto a Mocha decidí usarla.
- **Herramienta de construcción:** Elegimos [Gulp](https://gulpjs.com/) por su flexibilidad en JavaScript para automatizar flujos de trabajo lentos y repetitivos y componerlos en procesos de construcción eficientes. En principio se trató de usar Grunt pero tras buscar arduamente como integrarlo con Mocha sin éxito decidimos cambiar. Además su sintaxis a priori parece más sencilla ya que Grunt usa archivos de configuración de datos que son similares a JSON , mientras que Gulp usa JavaScript. El código Gulp suele ser mucho más corto que el código Grunt, según he podido encontrar documentándome. Parte de esto se debe a que debe declarar los archivos de origen y destino para cada tarea en Grunt.

## Documentación:

- [Pulse para ver como se realizó la configuración de git y GitHub inicial.](docs/Configuración.md)