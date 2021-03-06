# Despliegue con Vercel

Para ver en detalle como se realiza una configuración básica de vercel para un proyecto puede visitar [este enlace](https://github.com/XDavid1999/Exercises/blob/master/Ejercicios/ejercicio1-serverless/ejercicio1.md) en el que la realizamos para nuestro repositorio de ejercicios. En este caso procederemos a realizar los mismos pasos para nuestro proyecto aunque encontraremos algunas diferencias.

## Next.js

Además de lo que necesitamos para crear un proyecto como se explicó anteriormente en el proceso de despliegue de un nuevo proyecto deberemos instalar un framework de trabajo. En este caso elegimos Next.

Next.js es un marco de trabajo web de desarrollo front-end de React de código abierto que permite funcionalidades como la representación del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas en React. Es un marco listo para producción que permite a los desarrolladores crear rápidamente sitios web JAMstack estáticos y dinámicos y es ampliamente utilizado por muchas grandes empresas.

Para instalarlo deberemos seguir los siguientes pasos:
- En primer lugar instalaremos las dependencias de React y Next con el comando:

~~~
npm install --save next react react-dom
~~~

- A continuación modificaremos nuestro [package.json](https://github.com/XDavid1999/PacketService/blob/master/package.json) incluyendo en la parte de scripts las líneas:

~~~
"dev": "next",
"build": "next build",
"start": "next start"
~~~

- Más tarde crearemos en la raíz del proyecto la carpeta **pages**, y dentro de ella el archivo **index.js**. Dentro de esta carpeta Next buscará los archivos con extensión *.js* y los procesará renderizando las vistas.

## Despliegue de la función

Después de instalar lo necesario procederemos a desplegar nuestra función, cosa que no hicimos en la otra pequeña configuración.

- Crearemos la capeta **api**, en la cual tendremos el/los archivos para nuestras funciones. En nuestro caso tendremos la propia [función](https://github.com/XDavid1999/PacketService/blob/master/api/function.js) y un archivo JSON con [datos](https://github.com/XDavid1999/PacketService/blob/master/api/datos.js) que serán usados por la función a desplegar. 
- Vercel, tras ejecutar sobre el directorio que contiene nuestro proyecto los comandos **vercel** y **vercel --prod** nos dará una serie de enlaces con los que podremos hacer solicitudes a la función desplegada.

## ¿Qué hace nuestra función?

- En este caso implementaremos una historia de usuario con la que los usuarios del sistema podrán ver información acerca de sus paquetes, [HU21](https://github.com/XDavid1999/PacketService/issues/62). Esta historia de usuario es fundamental ya que, en un sistema de paquetería una de las funciones fundamentales, además de poder realizar envíos, es ver cuales tiene en curso e información acerca de los mismos.
- La función creada lee de la "BD"(el archivo JSON) los datos de todos los paquetes en el sistema para acto seguido buscar los paquetes que un usuario tiene tramitados proporcionando varios parámetros en la URL. Entre ellos el nick del usuario del que se pretenden consultar los paquetes, el nombre de la agencia que los transporta o el estado en el que sse encuentran. De este modo si el usuario tiene una cantidad considerable de paquetes en curso podrá acceder a los deseados con más facilidad.
- Para probar que funciona correctamente puede clicar en [este enlace](https://packet-service.vercel.app/api/function.js?Nickusuario=XDavid&estado=EN_OFICINA&agencia=MRW), en este caso se muestran los paquetes pertenecientes al usuario XDavid, que son transportados por la agencia MRW y que se encuentran en una de las oficinas, aunque podrian consultarse los de cualquier usuario variando el parámetro Nickusuario, agencia o estado en la URL.
- Respecto al despliegue continuo, gracias a la conexión entre GitHub y Vercel, no hará falta hacer nada especial y con cada push se hará un nuevo despliegue.