# Optimización de la imagen

En este caso partimos de una imagen que ya de por sí es liviana, ya que es del tipo alpine y por ello cuenta con bastante optimización de base respecto a espacio, ya que solamente pesa 89.3MB.

## Utilizar menos capas

Aunque parezca una optimización irrelevante el hecho de fusionar órdenes **RUN** hace que se creen menos capas que ejecutando una sola. Así el simple hecho de ejecutar:
~~~
RUN npm install && \
npm install --global gulp-cli
~~~
en lugar de:
~~~
RUN npm install
RUN npm install --global gulp-cli
~~~
haría que solo se ocupe una capa en lugar de dos.


## Eliminar archivos innecesarios

Eliminaremos archivos que no nos son de utilidad dentro de la imagen ya que son temporales o de dependencias y una vez instaladas no lo necesitaremos. Para ello simplemente añadiremos:
~~~
RUN rm ./package*.json && rm -rf /var/lib/apt/lists/*
~~~
También eliminaremos la etiqueta **LABEL** ya que esta añde metadatos a nuestra imagen y no aporta nada en nuestro caso, aunque los metadatos son utilizados a veces por programas externos, por ejemplo nvidia-docker requiere la etiqueta com.nvidia.volumes.needed para funcionar correctamente.

## Usar el archivo .dockerignore

Se recomienda en algunas [páginas](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) que documentan buenas prácticas el uso de un archivo [.dockerignore](https://github.com/XDavid1999/PacketService/blob/master/.dockerignore) que se evite que los módulos locales y registros de depuración se copien en la imagen de Docker y posiblemente sobrescriban los módulos instalados dentro de la imagen. Añadiremos pues estas líneas a nuestro archivo:
~~~
node_modules
npm-debug.log
~~~

## No instalar dependencias opcionales

Si al comando que instala nuestras dependencias **npm install** le añadimos **A --no-optional** no se instalarán dependencias opcionales, solamentes las necesarias.

## Uso de otras herramientas

En nuestro caso tratamos de usar [docker-squash](https://github.com/jwilder/docker-squash). Lo que esta herramienta trata de hacer con nuestra imagen docker es "aplastarla". Esta utilidad trata de fusionar varias capas de las que componen una imagen docker en una sola para crear imágenes más livianas, tratando de que funcionen con total normalidad, evidentemente. 
Para instalarla simplemente haremos:
~~~
wget https://github.com/jwilder/docker-squash/releases/download/v0.2.0/docker-squash-linux-amd64-v0.2.0.tar.gz
sudo tar -C /usr/local/bin -xzvf docker-squash-linux-amd64-v0.2.0.tar.gz
~~~
Para ejecutarla se nos muestran distintos modos los cuales hacen que se generen más o menos paquetes, incluso podemos almacenar en RAM los archivos intermedios con: 
~~~
docker save <image_id> | sudo TMPDIR=/var/run/shm docker-squash -t newtag | docker load
~~~
En nuestro caso tratamos de hacer uso de la misma sin éxito tras varias horas ya que pese a ejecutarse, el programa no nos producía ninguna imagen de salida, solo arrojaba un id que no pertenecía a ninguna de las imágenes en nuestra máquina.