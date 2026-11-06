# Smart TV Manager

Aplicación web para administrar aplicaciones y consultar información de televisores compatibles. La primera integración prevista es Android TV / Google TV mediante ADB autorizado.

## Arquitectura

- `frontend/`: interfaz web React + TypeScript.
- `backend/`: API local Node.js + TypeScript.
- `docs/`: arquitectura, seguridad y compatibilidad.
- `CLAUDE.md`: instrucciones de desarrollo para Claude.

> Importante: un navegador por sí solo no puede ejecutar ADB ni controlar libremente una TV. Para operaciones reales se necesita ejecutar el backend/servicio local en un equipo de la misma red que la TV. Otros navegadores pueden abrir el panel a través de la red local, siempre que el equipo anfitrión esté encendido y la red lo permita.

## Requisitos previstos

- Node.js LTS
- Android Platform Tools (`adb`) instalado en el equipo anfitrión
- TCL Android TV / Google TV compatible
- Depuración ADB habilitada y autorización aceptada en la TV

## Desarrollo

Consulta `docs/architecture.md` y `CLAUDE.md` antes de implementar nuevas funciones.

El prototipo inicial no ejecuta desinstalaciones. Primero se debe comprobar la conexión, obtener inventario real y validar cada operación.
