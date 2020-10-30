#Con la palabra reservada FROM elegimos cual es la imagen que utilizaremos
#como base de nuestro contenedor. Por supuesto debemos haber hecho antes
#docker pull <imagen>
FROM node:12.19.0-alpine3.10

#La instrucción LABEL agrega metadatos a la imagen que se creará, en este
#caso mi nombre, como autor
#LABEL maintainer="David Heredia Cortés"

#Copiamos los archivos de dependencias
COPY package*.json ./

#La palabra reservada RUN es utilizado en la construcción del contenedor y,
#por ello, se instalarán en este caso las dependencias de nuestro proyecto.
#Además crea una imagen después de haberse ejecutado.
RUN npm install  A --no-optional && \
npm install --global gulp-cli && \
rm ./package*.json && \
rm -rf /var/lib/apt/lists/*
#Borrar archivos innecesarios

#Establecemos el valor de la variable de entorno para que nos encuentre el
#directorio node_modules
ENV PATH=/node_modules/.bin:$PATH

#Con el comando ARG podemos crear un valor por defecto, lo que
#guardaremos será el nombre del directorio /test
ARG DIRECTORIO_TEST=/test

#Nos cambiamos al directorio de test para realizarlos
WORKDIR $DIRECTORIO_TEST

#Usaremos el usuario no root que las imágenes node traen por defecto, node
USER node

#El comando CMD se encarga de pasar valores por defecto a un contenedor, 
#aunque entre los mismos pueden ir ejecutables. Haremos que se ejecuten los
#test en este apartado
CMD ["gulp","test"]
