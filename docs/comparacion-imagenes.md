# Comparación entre las distintas imágenes base para node

## Diferentes imágenes y tags

Dentro de las imágenes base que podemos utilizar es posible escoger, dentro de las imágenes oficiales para nuestro contenedor, entre muchas versiones y tipos. Escogeremos principalmente de entre las imágenes oficiales ya que tienen una comunidad mayor, se actualizan de forma más regular, etc. El nombre que reciben las imágenes describe algunas de sus características, en el sistema en que se basan, de que tipo son... Respecto a la versión de node que estas tengan no tiene mayor relevancia ya que la instalada en el PC desde el que trabajo es la 10.19.0 y las disponibles son superiores y, por tanto, compatibles. Respecto a las etiquetas que acompañan al nombre de la imagen hemos encontrado en [la web](https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d) su significado:
- Los tags *stretch/buster/jessie* solamente son nombres en clave para diferentes distribuciones Debian.
- La etiqueta *slim* significa que la imagen es una versión reducida de la imagen completa, con sólo lo esencial. Esto es útil cuando tenemos poco espacio.
- La marca *alpine* quiere decir que la imagen en cuestión está basada en el proyecto [alpine linux](https://alpinelinux.org/) que es un SO específico parausar en contenedores. Esta variante es una  de las más populares también por su tamaño reducido.
- La imágenes que en su nombre contienen el tag *windowsservercore* es usado cuando la aplicación solo corre sobre Windows o Windows Server.
- También como último consejo no se recomienda usar imágenes con el tag *latest* ya que esto siempre hará pull de la imagen más reciente y las dependencias podrían no ser compatibles con versiones futuras.  
    
Elegimos además de las oficiales probar otras dos distribuciones distintas: ubuntu y fedora. 

- Para el primer caso hacemos pull de una [imagen](https://hub.docker.com/r/tbaltrushaitis/ubuntu-nodejs) que se describe como un contenedor basado en ubuntu linux y con el entorno de node.js preinstalado. Elegimos de entre las disponibles la v9.9.0. En este caso no hay cambios en el Dockerfile
- Para el segundo elegimos la conocida distribución [fedora](https://hub.docker.com/_/fedora). En este caso elegiremos la imagen oficial y dentro de esta la versión 31, que será más estable que las más recientes. Lo único que tendremos que hacer será instalar *npm* y *node* y, para ello simplemente tenemos que añadir al dockerfile que ya teníamos el siguiente comando entre las órdenes *COPY* y *RUN npm install ...*.

~~~
RUN dnf -y install nodejs npm
RUN npm -g install npm
RUN npm -g install n
RUN n stable
~~~

El hecho de no concatenar las órdenes podría interpretarse como una mala práctica; pero si lo hacemos al construir docker nos lanza un fallo y, al no ser esta imagen la que realmente usaremos, lo consideramos menos relevante.

 ## Pull y pruebas a las imágenes

En este apartado del documento describiremos algunos de los resultados que hemos obtenido testeando las imágenes. Entre las disponibles elegimos tres con diferentes características de entre las oficiales: slim(node 14), buster(node 15, completa) y la basada en alpine(node 12.19.0). Además de estas utilizaremos las ya descritas en el apartado anterior.
Principalmente, tendremos en cuenta para elegir una dos aspectos: velocidad y espacio. Para comparar la velocidad de las imágenes hemos construido un simple script que hace que las distintas imágenes pasen los test 100 veces. Lo que haremos será simplemente medir el tiempo que tarda en ejecutarse el script con la orden [time](https://es.wikipedia.org/wiki/Time_(Unix)).

### Orden time
El comando Time de Linux es un comando utilizado para determinar el tiempo de ejecución de una operación específica. Gracias a este comando, podemos saber la duración exacta de un proceso en cualquier sistema operativo Linux.
La orden time informa sobre tres tiempos:

- **T Real**: El tiempo total transcurrido desde que ha invocado el comando. Se le denomina a veces como tiempo de reloj, porque es tiempo que ha transcurrido en nuestro reloj.
- **T User**: La cantidad de tiempo actualmente consumido en la CPU fuera del tiempo sys.
- **T Sys**: La cantidad de tiempo consumido en el kernel, que es el tiempo empleado en contestar peticiones del sistema.

Nosotros nos interesaremos principalmente en el t real, que se corresponde en nuestra tabla con Tiempo Total, que nos dará el tiempo total que ha tardado el script en ejecutarse.

### Tabla con tiempos y espacio

Se muestran en esta tabla los tiempos que la orden time nos devuelve y el espacio que cada imagen ocupa. 

| Nombre | Tiempo Total | User Time | System Time | Size |
|--------|--------|---------|---------|---------|
| node-14-stretch-slim | 2:21.80 | 2.73 | 2.29 | 253MB |
| node-15-buster | 2:22.13 | 2.69 | 2.21 | 922MB |
| node-12.19.0-alpine3.10 | 2:59.12 | 3.49 | 2.59 | 132MB |
| ubuntu-based | 2:39.01 | 2.66 | 2.44 | 675MB |
| fedora-31 | 2:17.31 | 2.70 | 2.43 | 795MB |


Después de realizar pruebas vemos que la diferencia entre hacer los test con una imagen u otra es mínima respecto a velocidad. Si consideramos además que los test son ejecutados 100 veces la diferencia es aún menor (del orden de unos pocos milisegundos por test). Daremos pues más relevancia al espacio que estas ocupan en disco, considerando entonces que la imagen con *buster* queda descartada por ser demasiado pesada junto a la imagen de fedora pese a ser la más rápida. Además de las dos anteriores también descartamos la imagen basada en ubuntu por no ser muy rápida y ser pesada. 
Finalmente, aunque la imagen con *slim* es la segunda más rápida consideramos que la diferencia no es suficiente ya que ocupa el doble de espacio. Nos quedamos entonces con la imagen basada en alpine ya que, a pesar de ser la más lenta, es extremadamente liviana y, por tanto, portable.