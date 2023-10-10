
# **Programa que revisa el estado de un servidor en Node.js** 

En este tutorial, les guaremos a través de la creación de un programa construido en Python para revisar el estado de un servidor en Node.js. Este programa revisa el estado del proceso del servidor, si no está funcionando, lo ejecuta.

## **Requisitos:**

Antes de empezar, asegúrate de que tienes los siguientes prerrequisitos:

- Python 3.6 o posterior
- Node.js 14.17.0 o posterior
- Un entorno virtual (opcional pero recomendado)
- Librería `psutil`


## **Pasos para ejecutar el programa**

1. **Creamos el programa en Python para ejecutar el servidor de Node.js**

El servidor en Node.js consulta en una pagina de venta de telefonos moviles una lista de telefonos dada, esto usando web scrapping, y en caso de que alguno de los telefonos esté disponible, abre una pestaña en el navegador con una canción.

![Imagen](https://github.com/Yuberley/Fault-Tolerant-Computing/blob/main/course/8_services_manager/img/2.png)

2. **Creamos el programa en Python para ejecutar el servidor de Node.js**
    
   En este caso el programa en Python se encarga de revisar el estado del proceso del servidor, si no está funcionando, lo ejecuta.

   ```python

   ...

    def is_nodejs_server_running(server_name):
        for proc in psutil.process_iter(attrs=['cmdline']):
            if proc.info.get('cmdline') and server_name in ' '.join(proc.info['cmdline']):
                return True
        return False

    ...resto del código
   ```

    Y lo probamos:

    ```bash
        C:\laragon\bin\python\python-3.10\python.exe .\process.py .\index.js
    ```

3. **Descargamos e instalamos el Non-Sucking Service Manager.**
    
    En mi caso lo intalaré con el administrador de paquetes Chocolatey, pero también se puede descargar desde su [página oficial](https://nssm.cc/download).

    ```bash
        choco install nssm
    ```

4. **Inicializamos el nssm.** con el siguiete comando:
    
    ```bash
    nssm.exe install service_clevercel
    ```

    Se abrirá el siguiente formulario:
    
![Imagen](https://github.com/Yuberley/Fault-Tolerant-Computing/blob/main/course/8_services_manager/img/1.png)
    
Se llenan los campos de la siguiente manera:
   - Path: Indica el path del intérprete de python. En mi caso: C:\Python38\python.exe

   - Startup directory: Indica el directorio en el que se encuentra proclocker.py: C:\custom-services

   - Arguments: Por ejemplo, si quieres que el servicio intercepte a Chrome y Firefox: proclocker.py chrome.exe firefox.exe. Como en el campo Startup directory hemos indicado el directorio en el que se encuentra el script proclocker.py no es necesario pasar el path absoluto del script como primer argumento, y en su lugar he indicado el path relativo: proclocker.py.
    
* Una vez instalado el servicio debes iniciarlo desde la consola:

      ```bash
        nssm.exe start service_clevercel
      ```

5. **Verificamos que el servicio se esté ejecutando.**

    ```bash
        nssm.exe status service_clevercel
    ```

    Como está funcionando, el resultado es que el servidor de Node.js se levantará y buscará los telefonos disponibles, como lo encuentra, abre una pestaña en el navegador con una canción.
    
    ![Imagen](https://github.com/Yuberley/Fault-Tolerant-Computing/blob/main/course/8_services_manager/img/3.png)

6. **Administramos el servicio.**

    ![Imagen](https://github.com/Yuberley/Fault-Tolerant-Computing/blob/main/course/8_services_manager/img/4.png)


