# Instrucciones para Claude — Smart TV Manager

## Objetivo
Construir una aplicación web accesible desde navegadores de celular y computadora para administrar aplicaciones de una TCL cuyo modelo y sistema exactos aún se desconocen. Primera hipótesis: Android TV o Google TV; debe verificarse antes de ejecutar operaciones.

## Arquitectura obligatoria
1. Frontend React + TypeScript.
2. Backend Node.js + TypeScript ejecutado en el equipo anfitrión de la red local.
3. Adaptador Android/Google TV mediante ADB, activado solo tras confirmar compatibilidad y autorización.
4. API autenticada para que otros navegadores de la red accedan al panel.

Un navegador no puede ejecutar ADB directamente. No simules una conexión ni presentes datos ficticios como datos reales.

## Fases
1. Crear dashboard responsive con estados "sin conectar" y "datos no disponibles".
2. Implementar servicio local y comprobación de disponibilidad de ADB.
3. Implementar emparejamiento/conexión autorizada y lectura de modelo, fabricante y versión.
4. Obtener inventario de paquetes y clasificarlos como usuario/sistema cuando los datos permitan hacerlo.
5. Implementar vista previa de acciones y confirmación explícita.
6. Añadir desinstalación solo para paquetes que Android permita desinstalar de forma segura y que el usuario seleccione.
7. Añadir consultas de almacenamiento y herramientas compatibles, sin prometer mejoras no medidas.

## Seguridad
- No abrir un servidor de control a Internet por defecto.
- Escuchar en localhost por defecto; para acceso desde otros dispositivos de la LAN, requerir configuración explícita, autenticación y aviso de exposición en red.
- No aceptar comandos shell arbitrarios desde el frontend.
- Usar lista cerrada de operaciones y validación estricta de parámetros.
- No borrar, deshabilitar ni modificar componentes esenciales del sistema.
- No desinstalar automáticamente.
- Mostrar paquete, TV objetivo y efecto esperado antes de cada acción.
- Registrar resultados y errores.
- No almacenar claves privadas ADB ni contraseñas en el repositorio.
- No eludir restricciones del fabricante o del sistema operativo.

## Calidad
- TypeScript estricto.
- Pruebas unitarias para clasificación y validación.
- Manejo de errores explícito.
- Documentar compatibilidad real por fabricante/modelo/versión.
- Nunca afirmar soporte de Tizen, webOS o Roku sin adaptadores verificados.

## Primera tarea
Inspecciona el repositorio, implementa el dashboard y una API de estado sin operaciones destructivas. Después presenta plan y pruebas antes de continuar.


## 12. Módulo de rendimiento: TV Performance Center

El usuario reporta que Netflix, YouTube y otras aplicaciones tardan en abrirse, y que los botones del control remoto también responden lentamente desde hace tiempo. Prioriza investigar lentitud general del sistema, no asumir que es únicamente un problema de Internet.

Implementa un módulo de diagnóstico de solo lectura que, cuando el dispositivo y ADB lo permitan, recopile:
- Modelo, fabricante, versión de Android/Google TV y tiempo desde el último arranque.
- Memoria RAM total y disponible, con método y limitaciones documentados.
- Almacenamiento total, usado y libre.
- Información de CPU y procesos, sin matar procesos automáticamente.
- Estado de conectividad básico.
- Tiempos de inicio de aplicaciones medidos con metodología reproducible, dejando claro que el tiempo incluye carga de red cuando aplique.
- Historial de mediciones para comparar antes/después.

No inventes métricas ni uses valores de demostración como si fueran reales. Si un dato no está disponible, muestra "No compatible" o "No medido".

Añade recomendaciones graduadas:
1. Reiniciar la TV desde sus controles normales.
2. Comprobar espacio libre.
3. Revisar actualizaciones de sistema y aplicaciones.
4. Probar una aplicación tras otra para distinguir problema general de problema individual.
5. Revisar Wi-Fi / Ethernet y DNS únicamente como diagnóstico, sin cambiar la configuración automáticamente.
6. Revisar caché por aplicación cuando el sistema lo permita; nunca borrar datos de usuario sin consentimiento explícito.
7. Sugerir desinstalación solo para aplicaciones seleccionadas por el usuario y que sean realmente desinstalables.

No implementar "RAM booster", limpieza automática de memoria, task killer, cierre forzado masivo ni promesas de acelerar el procesador. Android administra memoria automáticamente y matar procesos puede empeorar los tiempos de apertura.

Añade una pantalla de diagnóstico con resultados, nivel de confianza, explicación y pasos recomendados. Mantén todas las acciones modificadoras detrás de una confirmación clara y deja el módulo de diagnóstico en modo lectura por defecto.
