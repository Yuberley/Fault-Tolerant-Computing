# **Tutorial: Rastreador de precios de ETH en tiempo real con trazado**

En este tutorial, le guiaremos a través de la creación de un rastreador de precios de ETH en tiempo real en Python. Este programa obtiene los precios de ETH de Binance, los almacena en una base de datos SQLite, y traza un gráfico de precios en tiempo real. Usaremos la librería `ccxt` para los datos de criptomonedas, `matplotlib` para el trazado, y `sqlite3` para la gestión de la base de datos.

## **Requisitos:**

Antes de empezar, asegúrate de que tienes los siguientes prerrequisitos:

- Python 3.6 o posterior
- Un entorno virtual (opcional pero recomendado)
- Librería `ccxt
- Librería `matplotlib
- Biblioteca `sqlite3
- `python3-tk` para soporte GUI backend

Este tutorial fue desarrollado y probado en Ubuntu 20.04, pero debería funcionar también en otros sistemas.

Puedes crear un entorno virtual, activarlo, e instalar las librerías Python necesarias usando `pip` y el paquete de sistema necesario con `apt`:

```bash
# Crear un entorno virtual (opcional)
python3 -m venv ETH-tracker-env

# Activar el entorno virtual
source ETH-tracker-env/bin/activate

# Instalar paquete de sistema para tkinter
sudo apt-get install python3-tk

# Instalar paquete de sistema para sqlite3
sudo apt-get install sqlite3

# Instalar paquetes Python desde requirements.txt
pip install -r requirements.txt
```
## **Pasos para ejecutar el programa**

1. **Iniciar el servidor de Prefect:**

   Antes de ejecutar el programa, asegúrese de iniciar el servidor Prefect si aún no lo ha hecho. Utilice el siguiente comando:

   ```bash
   prefect server start
   ```

2. **Ejecutando el Script:**

   - Cree un script Python para su flujo Prefect. Guarde el script como `etl-workflow.py`. Este script contendrá las tareas y la definición del flujo.

   - Copie y pegue el código para las tareas y el flujo del tutorial en `etl-workflow.py`. El código define las tareas para obtener, almacenar y trazar los precios de ETH.

   - Guarda el script.

3. **Ejecutar el programa

   Abra un terminal y navegue hasta el directorio donde se encuentra `etl-workflow.py`. Ejecute el script con el siguiente comando:

   ```bash
   python3 etl-workflow.py
   ```

4. **Observación de datos en tiempo real:**

   El programa comenzará a obtener los precios de ETH en tiempo real, los almacenará en la base de datos y trazará un gráfico en tiempo real. Puede ajustar la programación `cron` en la tarea `ETH_info` para controlar la frecuencia de actualización de los datos.

![Prefecto del panel de control](https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaDluZWm453udOh_S7_xD38OcSVvM9iksppu88vXR_JO28GRC1-WathlR2tS9toVpmPHOwi06JCNJnWfV9FGJ-lc_rHD=w1848-h976)
![Registros y visualización de gráficos](https://lh3.googleusercontent.com/u/2/drive-viewer/AK7aPaCmwTs4ptktjMDQW2tLz5cDf2dKRwYqJRqv-iBzoLpDKo3RqtFCCJcl5wH5MN7ftL8M0jxeTOG257QuWg0oxafr_BTX=w1848-h976)


6. **Cierre de ventanas de gráficos

   Para asegurar que las ventanas de ploteo se cierran antes de crear otras nuevas, el script utiliza `plt.close('all')` en la tarea `plot_ETH_prices`.

Ya está. Ahora tiene un rastreador de precios de ETH en tiempo real con capacidades de trazado dinámico.

Siéntase libre de personalizar el programa para adaptarlo a sus necesidades, como ajustar el intervalo de trazado o implementar características adicionales. ¡Feliz programación!