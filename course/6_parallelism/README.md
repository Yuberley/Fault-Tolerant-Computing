# **Tutorial: Ejecutando un Programa de Chat en C**

En este tutorial, te guiaremos a través del proceso de ejecución de un sencillo programa de chat escrito en C. Este programa consiste en un servidor (`server.c`) y un cliente (`client.c`) que pueden comunicarse entre sí. También explicaremos el uso de la librería `pthread`.

## **Requisitos previos:**
- Un compilador de C (GCC recomendado)
- Conocimientos básicos de trabajo con el terminal

## **Paso 1: Compilar los Programas Cliente y Servidor**

Abra su terminal y navegue hasta el directorio donde se encuentran sus archivos `client.c` y `server.c`. Utiliza los siguientes comandos para compilar los programas cliente y servidor:

```bash
gcc cliente.c -pthread -o cliente
gcc servidor.c -pthread -o servidor
```

La bandera `-pthread` es necesaria porque los programas utilizan hilos POSIX (`pthread`) para multihilos. Esta bandera indica al compilador que enlace la librería `pthread`.

## **Paso 2: Ejecutar el Servidor**

Inicia el servidor ejecutando el siguiente comando:

```bash
./servidor
```

El servidor empezará escuchando en el puerto 2222 (puedes cambiar esto en el código si es necesario). Mostrará un mensaje como "Chatroom corre en el puerto: 2222"

## **Paso 3: Ejecutar un Cliente**

Abre una nueva ventana de terminal para el cliente. Navega al mismo directorio y ejecuta el programa cliente:

```bash
./cliente 127.0.0.1 2222
```

## **Paso 4: Chatear**

Una vez conectado el cliente, se te pedirá que introduzcas tu nombre. Después, podrás empezar a enviar mensajes. Escribe un mensaje y pulsa Intro para enviarlo. Otros clientes conectados al servidor recibirán tus mensajes, y tú también verás sus mensajes en tu terminal.

Lado del servidor](https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-wRLeOAVUAq19fX1KjQAYgo0veiiXmgtrWBufqSoDIhyYZaU1blxgoWZJlFjy2Wp6730ahgIlGwny7mNR7F7JznTCm9Bg=w1920-h937)

Cliente número uno](https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-wNotdquhggyVL1m_pzNBSjzp4olXfOcftRZCJCukHhcjaWgPSf8SFKMnZIP77cRZ_HIleWe6qGck6qtTnRQvNAc-fOSg=w1920-h937)

Cliente número dos](https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-xVCheUaq3m3gM3icusvz2MKg0b1V1L2iwDcjlXe8efoXetavdK-xZPr5liIzne66UFYPUBXubtzQm8GCBCAG0xVTLP=w1920-h937)

![Cliente número tres](https://lh3.googleusercontent.com/u/3/drive-viewer/AITFw-yl_6D_7lfl16EuuVPB9DFmlHiM37ELigj6EiafsJKbi6ou6yn14f1qAPr3QhYwtVP5ALwRim-eabo2g161Vv_OijFV=w1920-h937)

## **Paso 5: Salir**

Para salir del cliente, pulse Ctrl+C en el terminal donde se esté ejecutando el cliente. Esto desconectará el cliente del servidor.

# **Entendiendo la librería pthread:**

La librería `pthread` en C significa hilos POSIX y proporciona una forma de crear y gestionar hilos. Los hilos son procesos ligeros que pueden ejecutarse concurrentemente, haciendo más fácil realizar múltiples tareas simultáneamente. En el programa de chat, `pthread` se utiliza para crear dos hilos:

1. **Hilo para Recibir Mensajes:** Este hilo escucha constantemente los mensajes entrantes del servidor y los muestra en el terminal del cliente.

2. 2. **Hilo para enviar mensajes:** Este hilo permite al usuario introducir y enviar mensajes al servidor, a la vez que muestra un aviso para que el usuario introduzca sus datos.

Usando `pthread`, el programa de chat puede manejar tanto el envío como la recepción de mensajes sin bloquear la interfaz de usuario. Permite una multitarea eficiente, asegurando que el cliente pueda enviar y recibir mensajes simultáneamente.

Ya está. Ahora tienes un programa de chat básico funcionando, y entiendes el papel de la librería `pthread` en la consecución de la comunicación concurrente. Siéntete libre de explorar el código y modificarlo para adaptarlo a tus necesidades o añadir más características. ¡Feliz programación!
     