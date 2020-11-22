# Despliegue con Vercel

Para ver en detalle como se realiza una configuración básica de vercel para un proyecto puede visitar [este enlace](https://github.com/XDavid1999/Exercises/blob/master/Ejercicios/ejercicio1-serverless/ejercicio1.md) en el que la realizamos para nuestro repositorio de ejercicios. En este caso procederemos a realizar los mismos pasos para nuestro proyecto aunque encontraremos algunas diferencias.

## Next.js

Además de lo que necesitamos para crear un proyecto como se explicó anteriormente en el proceso de despliegue de un nuevo proyecto deberemos instalar un framework de trabajo. En este caso elegimos Next.

Next.js es un marco de trabajo web de desarrollo front-end de React de código abierto que permite funcionalidades como la representación del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas en React. Es un marco listo para producción que permite a los desarrolladores crear rápidamente sitios web JAMstack estáticos y dinámicos y es ampliamente utilizado por muchas grandes empresas.

Para instalaro deberemos seguir los siguientes pasos:
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