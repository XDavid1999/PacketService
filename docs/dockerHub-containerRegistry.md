# Configuración de DockerHub y GitHub Container Resgistry

En este documento se describe como se realizó la configuración de DockerHub y Github Container Registry para subir el contenedor que creamos a ambas plataformas.

## DockerHub

1. Creamos un repositorio en nuestra cuenta de DockerHub estableciendo nuestro nombre de usuario y repo, en mi caso xdavid1999/packetservice.
2. Configuraremos también el repositorio como público y conectamos nuestra cuenta GitHub con DockerHub.
3. Para subir la imagen deberemos seguir la sintaxis: *docker tag local-image:tagname new-repo:tagname* y seguidamente: *docker push new-repo:tagname*.
4. Una vez la imagen está subida configuraremos *build* en el repositorio que hemos creado en DockerHub, consiguiendo que cuando hagamos push a nuestro repositorio de GitHub se construya la imagen con el dockerfile en nuestro proyecto en GitHub. Podemos ver que está correctamente sincronizada en [mi perfil](https://hub.docker.com/repository/docker/xdavid1999/packetservice/general) ya que se muestra el readme de mi proyecto en GitHub en DockerHub.
5. Configurar *build* es tan sencillo como activar build en la pestaña con el mismo nombre y completar los datos que se nos solicitan, tras haber conectado como dijimos nuestra cuenta de GitHub, claro.

## GitHub Container Resgistry

1. Crear un [token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) para identificarnos como se especifica en la guia oficial. Simplemente tendremos que acceder a **SETTINGS -> DEVELOPPER SETTINGS -> PERSONAL ACCESS SETTINGS** y crear uno nuevo con los permisos que se nos especifican en la guia.
2. Se recomienda guardar el token como una variable de entorno.
~~~
$ export CR_PAT=TOKEN_CREADO
~~~
3. Iniciar sesión en el servicio de registro de contenedores, que está en ghrc.io
~~~
echo $CR_PAT | docker login ghcr.io -u TUNOMBREDEUSUARIO --password-stdin
~~~
4. "Retaggearemos" nuestra imagen con el comando:
~~~
$ docker tag NOMBRELOCALIMAGEN ghcr.io/TARGET_OWNER/TARGET_IMAGE_NAME:VERSION
~~~
5. Para terminar simplemente ejecutaremos el comando *push* para subirla al GitHub Container Registry con:
~~~
docker push ghcr.io/OWNER/IMAGE_NAME:VERSION
~~~
6. Una vez aquí solamente tendremos que cambiar la visibilidad del paquete a pública y sincronizarlo con nuestro repo. Para ello simplemente tendremos que pulsar **Connect Repository** y seguir los pasos que se nos indican.