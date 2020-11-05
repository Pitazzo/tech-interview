## Introducción
La app está implementada haciendo uso del framework NestJS y actúa como backend de un caso de uso muy simplificado que se detalla a continuación.
El proyecto contiene múltiples errores de diseño y estilo, además de no respetar criterios de buenas prácticas de desarrollo, principios SOLID, estándares, etc. El objetivo de la prueba es localizarlos y, en su caso, comentar una solución.

## Puesta en marcha
Como consecuencia de alguno de los errores introducidos, la app no arranca. En caso de localizarse el problema que impide el arranque y se desee iniciar el sistema, la sencuencia de arrance será la que se incluye a continuación

```shell
npm install
docker-compose up -d
npm run start:dev
```

### Requisitos previos
Como paso previo a la puesta en marcha, se requiere la existencia de una instalación válida de
 - Docker y la herramienta `docker-compose`
 - NodeJS

## Dominio del problema
El sistema busca dar soporte a la empresa Uberfy, de reserva de coches autónomos para trayectos urbanos. Actualmente, el sistema cuenta únicamente dos funcionalidades:
- **Gestión de flota**: utilidad de uso interno en el departamento de mantenimiento para tener control sobre los vehículos que gestiona la empresa. Se les da de alta en el momento de su adquisición, tras lo que pueden ser actualizados o enviados al desguace.
- **Reserva de trayectos**: utilidad para la futura app cliente de la empresa. Debe permitir reservar trayectos para el momento temporal más cercano posible, indicando direcciones de incio y fin del trayecto. Aún teniendo en cuenta la capacidad limitada de los vehículos eléctricos, cada trayecto es realizado por un único vehículo.