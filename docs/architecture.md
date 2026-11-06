# Arquitectura

## Acceso desde cualquier navegador
La interfaz puede abrirse desde cualquier navegador que alcance la dirección del equipo anfitrión en la red local. El backend y ADB deben ejecutarse en ese equipo. No es una conexión mágica desde una web pública: el equipo anfitrión debe permanecer encendido y en la misma red que la TV.

## Flujo Android/Google TV
1. El usuario habilita las opciones de desarrollador y ADB en la TV, si el modelo lo admite.
2. El backend local detecta si `adb` está instalado.
3. El usuario autoriza explícitamente la clave del equipo en la TV.
4. El backend consulta información del dispositivo y paquetes instalados.
5. El frontend muestra únicamente datos recibidos realmente.

## Red
Por defecto, el backend debe escuchar en `127.0.0.1`. Para acceso desde otro navegador de la LAN, se debe habilitar explícitamente escucha en la interfaz de red, autenticación y protección CSRF/origen. No publicar puertos del servicio directamente en Internet.

## Compatibilidad
La marca TCL no determina por sí sola el sistema operativo. Confirmar en Ajustes > Sistema > Acerca de. Android TV y Google TV pueden compartir ADB, sujeto a versión, configuración y permisos.
