
# Universidad de Guadalajara
![Logo de la Universidad de Guadalajara](http://www.cusur.udg.mx/es/sites/default/files/adjuntos/logo_udeg_color_horizontal_1.png)

## Centro Universitario de Ciencias Exactas e Ingenierías

## Programación Tolerante a Fallos

¡Bienvenido al repositorio del apuntes del curso de Programación Tolerante a Fallos en el Centro Universitario de Ciencias Exactas e Ingenierías de la Universidad de Guadalajara!

En este curso, exploraremos los conceptos fundamentales de los sistemas tolerantes a fallos, aprendiendo cómo diseñar y desarrollar software y sistemas que sean capaces de mantener su funcionalidad y disponibilidad incluso en presencia de fallas.

¡Que disfrutes del curso y encuentres valiosa esta introducción a la programación tolerante a fallos en el entorno académico de la Universidad de Guadalajara!


---


| Número | Actividad | Visualizar |
| --- | --- | --- |
| `01` | Sistemas Tolerantes a Fallos - Conceptos | [Visitar](https://midu-react-01.surge.sh) |
| `02` | Reporte de Herramientas para el Manejo de Errores en Programación | [Visitar](https://midu-react-02.surge.sh) |


## Sistemas Tolerantes a Fallos

### ¿Qué son?
Los sistemas tolerantes a fallos son aquellos que están diseñados y pensados para sostener redundancia continuar funcionando correctamente, incluso cuando uno o varios de sus componentes o subsistemas experimentan fallas. Estos sistemas están diseñados para mantener un nivel aceptable de funcionalidad y disponibilidad a pesar de las posibles fallas en el hardware, software o cualquier otro elemento crítico.

### ¿Qué es un fallo?
Es la pérdida de repuesta de un sistemas un servicio, en este caso informático. Los fallos se pueden dar por diversos factores, como defectos de diseño, daños en el hardware, problemas de software, entre otros mas.

### ¿Qué es un error?
Un error es un mal comportamiento, estado o condición en un sistema o programa que puede provocar un comportamiento inesperado o incorrecto. Estos problemas suelen ser el resultado de errores humanos, problemas de diseño o implementación de software y si no se manejan adecuadamente, pueden provocar fallas.

### ¿Qué es la latencia de un fallo?
Se refiere al tiempo transcurrido entre el momento en que ocurre una falla en un sistema y el momento en que la falla se hace evidente en la operación del sistema. En otras palabras, es el lapso de tiempo entre la ocurrencia real del fallo y su detección o manifestación.

### ¿Qué es la latencia de un error?
Es el tiempo transcurrido entre el momento en que se introduce un error en un sistema (por ejemplo, a través de una acción humana o un error de programación) y el momento en que dicho error causa un fallo o un comportamiento no deseado en el sistema. Es el tiempo que transcurre desde que se comete el error hasta que sus consecuencias se hacen evidentes.


---


## Reporte de Herramientas para el Manejo de Errores en Programación

El manejo de errores en programación es esencial para garantizar la estabilidad, seguridad y fiabilidad de las aplicaciones. Existen diversas herramientas y técnicas que los desarrolladores pueden utilizar para identificar, gestionar y corregir errores en su código. A continuación, se presenta un reporte que destaca algunas de las herramientas más populares para el manejo de errores en programación:

### 1. **Lenguajes de Programación con Manejo de Excepciones Integrado:**

Algunos lenguajes de programación incorporan mecanismos de manejo de excepciones que permiten a los desarrolladores capturar y manejar errores de manera más estructurada. Ejemplos de lenguajes con manejo de excepciones integrado incluyen Python, Java y C#. Estos lenguajes proporcionan palabras clave como `try`, `catch`, `throw` y `finally` para gestionar las excepciones y realizar acciones específicas en caso de errores.

### 2. **Depuradores:**

Las herramientas de depuración permiten a los desarrolladores examinar el flujo de ejecución de su código, identificar variables y valores en tiempo real, y rastrear la causa raíz de los errores. Ejemplos populares de depuradores son el **Visual Studio Debugger** para aplicaciones .NET, **GDB** para programas en C/C++, y las herramientas de depuración integradas en IDEs como **Visual Studio Code**.

### 3. **Registradores de Errores (Logging):**

Los registradores de errores son herramientas que permiten a los desarrolladores registrar eventos y mensajes de error durante la ejecución de una aplicación. Estos mensajes se almacenan en archivos de registro que pueden ser útiles para el diagnóstico de problemas en entornos de producción. Ejemplos notables son **Log4j** y **Logback** para Java, y el módulo `logging` en Python.

### 4. **Herramientas de Análisis Estático:**

Las herramientas de análisis estático examinan el código fuente sin ejecutarlo y buscan patrones, prácticas y posibles problemas que podrían conducir a errores. Ejemplos de herramientas de análisis estático incluyen **ESLint** para JavaScript, **Pylint** para Python y **SonarQube** para varios lenguajes.

### 5. **Sistemas de Control de Versiones:**

Los sistemas de control de versiones, como **Git**, no solo son herramientas para el seguimiento de cambios en el código, sino que también pueden ayudar a revertir errores y restaurar versiones anteriores en caso de problemas.

### 6. **Pruebas Unitarias y de Integración:**

Si bien no son herramientas en el sentido tradicional, las pruebas unitarias y de integración son prácticas esenciales para detectar errores tempranos en el ciclo de desarrollo. Frameworks como **JUnit** para Java, **pytest** para Python y **JUnit** para C# facilitan la escritura y ejecución de pruebas automatizadas.

### 7. **Monitoreo de Aplicaciones:**

En producción, el monitoreo constante de aplicaciones en tiempo real puede ayudar a identificar y abordar errores en situaciones reales. Herramientas como **New Relic**, **Datadog** y **Prometheus** ofrecen capacidades de monitoreo y alertas.

### 8. **Servicios de Seguimiento de Errores:**

Plataformas como **Sentry**, **Bugsnag** y **Rollbar** permiten a los desarrolladores rastrear automáticamente los errores que ocurren en sus aplicaciones, proporcionando información detallada sobre el contexto y la traza de ejecución.

Estas son solo algunas de las muchas herramientas disponibles para el manejo de errores en programación. La elección de herramientas depende de factores como el lenguaje de programación, el entorno de desarrollo y las necesidades específicas del proyecto. Un enfoque integral que combine varias de estas herramientas puede ayudar a los desarrolladores a identificar, solucionar y prevenir errores de manera efectiva.
