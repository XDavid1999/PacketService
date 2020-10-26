# Comparación entre las distintas imágenes base para node

## Diferentes imágenes y tags

Dentro de las imágenes base que podemos utilizar es posible escoger, dentro de las imágenes oficiales para nuestro contenedor, entre muchas versiones y tipos. Escogeremos principalmente de entre las imágenes oficiales ya que tienen una comunidad mayor, se actualizan de forma más regular, etc. El nombre que reciben las imágenes describe algunas de sus características, en el sistema en que se basan, de que tipo son... Respecto a la versión de node que estas tengan no tiene mayor relevancia ya que la instalada en el PC desde el que trabajo es la 10.19.0 y las disponibles son superiores y, por tanto, compatibles. Respecto a las etiquetas que acompañan al nombre de la imagen hemos encontrado en [la web](https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d) su significado:
- Los tags *stretch/buster/jessie* solamente son nombres en clave para diferentes distribuciones Debian.
- La etiqueta *slim* significa que la imagen es una versión reducida de la imagen completa, con sólo lo esencial. Esto es útil cuando tenemos poco espacio.
- La marca *alpine* quiere decir que la imagen en cuestión está basada en el proyecto [alpine linux](https://alpinelinux.org/) que es un SO específico parausar en contenedores. Esta variante es una  de las más populares también por su tamaño reducido.
- La imágenes que en su nombre contienen el tag *windowsservercore* es usado cuando la aplicación solo corre sobre Windows o Windows Server.
También como último consejo no se recomienda usar imágenes con el tag *latest* ya que esto siempre hará pull de la imagen más reciente y las dependencias podrían no ser compatibles con versiones futuras.  
    
 ## Pull y pruebas a las imágenes

En este apartado del documento describiremos algunos de los resultados que hemos obtenido testeando las imágenes. Entre las disponibles elegimos tres con diferentes características. Principalmente, tendremos en cuenta para elegir una dos aspectos: velocidad y espacio. Para comparar la velocidad de las imágenes hemos construido un simple script que hace que las distintas imágenes pasen los test 100 veces. Lo que haremos será simplemente medir el tiempo que tarda en ejecutarse el script con la orden [time](https://es.wikipedia.org/wiki/Time_(Unix)).

### Orden time
El comando Time de Linux es un comando utilizado para determinar el tiempo de ejecución de una operación específica. Gracias a este comando, podemos saber la duración exacta de un proceso en cualquier sistema operativo Linux.
La orden time informa sobre tres tiempos:

- **T Real**: El tiempo total transcurrido desde que ha invocado el comando. Se le denomina a veces como tiempo de reloj, porque es tiempo que ha transcurrido en nuestro reloj.
- **T User**: La cantidad de tiempo actualmente consumido en la CPU fuera del tiempo sys.
- **T Sys**: La cantidad de tiempo consumido en el kernel, que es el tiempo empleado en contestar peticiones del sistema.

Nosotros nos interesaremos principalmente en el t real, que se corresponde en nuestra tabla con Tiempo Total, que nos dará el tiempo total que ha tardado el script en ejecutarse.

### Tabla con tiempos y espacio

Se muestran en esta tabla los tiempos que la orden time nos devielve y el espacio que cada imagen ocupa. El nombre que las imágenes creadas han recibido es el mismo que la original añadiendo "gulp-test" al final.

| Nombre | Tiempo Total | User Time | System Time | Size |
|--------|--------|---------|---------|---------|
| node-15-stretch-slim-gulp-test | 2:21.80 | 2.73 | 2.29 | 253MB |
| node-15-buster-gulp-test | 2:22.13 | 2.69 | 2.21 | 922MB |
| node-15-alpine3.10-gulp-test | 2:25.07 | 2.66 | 2.30 | 126MB |

Después de realizar pruebas vemos que la diferencia entre hacer los test con una imagen u otra es mínima respecto a velocidad. Daremos pues más relevancia al espacio que estas ocupan en disco, considerando entonces que la imagen con *buster* queda descartada por ser demasiado pesada. Finalmente, aunque la imagen con *slim* es la más rápida consideramos que la diferencia no es suficiente ya que ocupa el doble de espacio. Nos quedamos entonces con la imagen con alpine por ser casi tan rápida como las demás y extremadamente liviana y, por tanto, portable.