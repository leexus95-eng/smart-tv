# TV Performance Center — diagnóstico

## Síntomas reportados
- Netflix, YouTube y otras aplicaciones tardan en iniciar.
- La respuesta a los botones del control remoto también es lenta.
- El problema lleva tiempo ocurriendo.

Estos síntomas pueden apuntar a lentitud general del sistema, pero también pueden coexistir problemas de red o fallos particulares de aplicaciones. No se debe asumir una causa sin medirla.

## Mediciones propuestas
- Modelo y versión del sistema.
- RAM total y disponible.
- Almacenamiento total y libre.
- Tiempo desde el último arranque.
- Información de CPU y procesos, cuando el dispositivo lo permita.
- Conectividad básica.
- Tiempo de inicio de cada app, con varias mediciones comparables.

Los datos no disponibles deben indicarse como no compatibles/no medidos. No presentar datos ficticios.

## Recomendaciones seguras iniciales
1. Desconectar la TV de la corriente durante 60 segundos y volver a encenderla.
2. Reiniciar el router si también hay lentitud de carga o buffering.
3. Comprobar si la lentitud afecta menús y ajustes, además de las aplicaciones.
4. Revisar almacenamiento disponible y actualizaciones.
5. Probar Netflix y YouTube por separado para identificar si es un problema de red o de una aplicación concreta.

No borrar datos de aplicaciones, restablecer de fábrica, deshabilitar servicios del sistema ni instalar limpiadores de terceros como primer paso.

## Límites técnicos
ADB puede proporcionar información útil en Android TV/Google TV, pero la disponibilidad de métricas y operaciones depende del fabricante, versión y permisos. ADB no garantiza medir directamente la latencia física del control remoto. Para medir respuesta de interfaz se pueden registrar tiempos de interacción dentro de una app de prueba, pero eso no equivale a medir el retardo del mando a distancia.
