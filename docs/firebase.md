# Firebase

Para ver en detalle como se realiza una configuración básica de firebase para un proyecto puede visitar [este enlace](https://github.com/XDavid1999/Exercises/blob/master/Ejercicios/ejercicio1-serverless/ejercicio1.md), en el que la realizamos para nuestro repositorio de ejercicios. En este caso procederemos a realizar los mismos pasos para nuestro proyecto aunque encontraremos algunas diferencias.

## Desplegando una nueva función

- Agregaremos un nuevo proyecto en la consola de firebase y l¡estableceremos un nombre para el mismo.
- Dremos a continuar a menos que quieramos establecer un ID específico para el proyecto, en cuyo caso lo escribiremos y clickaremos en continuar.+
- Configuraremos Google Analytics y crearemos el proyecto.
- Instalaremos firebase y haremos login, como se explicó en [este enlace](https://github.com/XDavid1999/Exercises/blob/master/Ejercicios/ejercicio1-serverless/ejercicio1.md).
- Estando sobre el directorio del proyecto ejecutaremos **firebase init**, con lo que se nos preguntará que tipo de proyecto queremos realizar, en nuestro caso seleccionaremos función. Se nos preguntará que proyecto usar, usaremos el que hemos creado, que lenguaje usar, en nuestro caso node, y si queremos usar un lint, a lo que responderemos que sí al igual que cuando se nos pregunte instalar las dependencias.
- Hecho esto simplemente crearemos nuestra función en el fichero [index](https://github.com/XDavid1999/PacketService/blob/master/functions/index.js), o primeramente descomentaremos la de prueba. Una vez creada solo tendremos que ejecura **firebase deploy** para que esta se despliegue. Al final de la ejecución del comando se nos proporcionará una URL en donde se accede al resultado de la función.

## Creando un bot en Telegram

En este apartado explicaremos brevemente qué hace nuestra función y como hemos creado nuestro pequeño bot. En este caso, tras consultar distintos tutoriales, conseguimos desplegar un pequeño bot en telegram que es capaz de cubrir la HU20. En esta HU un administrador de una agencia tratará de consultar que oficinas de su agencia figuran en el sistema y sus datos.

- En primer lugar creamos el bot de telegram con botfather y establecemos un nick, descripción, etc.
- Acto seguido crearemos la función que se ejecutará en firebase y que dará vida a nuestro bot. En este caso creamos dentro del fichero index varias funciones:
    - La función *sendMessage*, que se encargará, como su nombre indica, del envío de mensajes proporcionado el id del chat y el mensaje a enviar.
    - La función *listOffice*, que listará las oficinas del sistema.
    - La función *agencyOffices*, que será la principal, ya que buscará las oficinas de una agencia proporcionado su nombre.
    - Y finalmente la función maestra, que recogerá los datos de las peticiones https que nos lleguen y hará lo deseado dependiendo de los que el usuario responda. En este caso solamente implementamos unos pocos comandos y respuestas con un switch.
- Finalmente, teniendo los dos principales ingredientes de este proyecto: el propio bot y su código, los conectaremos con un *webhook*.
    - El flujo de trabajo será el siguiente: un mensaje se envía por telegram al bot, nuestro webhook lo "redireccionará" a nuestra función en firebase,  esta responderá al usuario en función de lo que dijo y responderemos al servidor (req) con 200 (éxito).
    - Asociar el webhook a nuestro bot es muy sencillo, simplemente tendremos que poner, por ejemplo en nuestro navegador, la url **https://api.telegram.org/bot<token-del-bot>/setwebhook?url=<url-de-nuestra-función-en-firebase>**. Hecho esto se procederá como en el paso anterior se explicó cada vez que se envie un mensaje al bot.
    - Si queremos comprobar que se ha establecido correctamente simplemente podremos en el navegador: **https://api.telegram.org/bot<token-del-bot>/getwebhookinfo**, con lo que deberíamos ver en la página a la que se nos redirige algo así:
    ~~~
    {
        "ok":true,
        "result": 
        {
            "url":"https://www.example.com/my-telegram-bot/",
            "has_custom_certificate":false,
            "pending_update_count":0,
            "max_connections":40
        }
    }
    ~~~
- Para probar el bot puede buscarlo en telegramo como: **PackageManager_Bot**

## Despliegue continuo de la función

En este caso, a diferencia de vercel, no es trivial el realizar un despliegue con cada push. Es por ello que, tras buscar distintas soluciones en la web, decidimos apoyarnos en una de nuestras herramientas CI, Travis. En este caso tendremos que modificar el archivo [travis.yml](https://github.com/XDavid1999/PacketService/blob/master/.travis.yml) para que este lo haga, ya que cada vez que hacemos push Travis se dispara.

- En primer lugar tendremos que obtener un token de firebase para que nuestro CI pueda hacer deploy con el comando:

~~~
firebase login:ci
~~~

- Estableceremos este token como una variable de entorno "privada" ya que nos hará falta más tarde.
- En este caso la versión de node que usemos con travis deberá ser la misma que en nuestra función en firebase.
- Simplemente instalaremos antes de los scripts las herramientas de firebase con la orden:

~~~
before_script:
  - npm install -g firebase-tools
~~~
- Después de ello instalaremos las dependencias de nuestra función con **cd functions && npm install**.
- Por último en la parte de scripts haremos que se ejecute la función de despliegue **firebase deploy --token $FIREBASE_TOKEN**.