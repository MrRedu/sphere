# Concert Plaza (Prueba técnica)

## Descripción del Proyecto

Desarrolla una aplicación web que permita a los usuarios explorar el universo de Anilist API, ver lista de animes, detalles de los animes por cada card. Debes integrar la API de Anilist API para obtener toda la información necesaria.

## Funcionalidades Requeridas

- [x] Página de inicio con lista de animes
- [x] Consumir la API de Anilist API para obtener y mostrar una lista de animes.
- [+-] Implementar paginación para manejar grandes cantidades de datos.
- [ ] Mostrar información básica de cada anime (nombre, formato, episodios categorías, imagen, score y status).

## Barra de búsqueda multifuncional

- [ ] Implementar una funcionalidad de búsqueda que permita a los usuarios buscar: animes por nombre, por score, por categoría y por status.
- [ ] Mostrar los resultados de búsqueda de manera paginada.

## Página de detalles del anime

- [x] Implementar una vista de detalles que muestre la información completa del anime seleccionado, incluyendo: nombre, estado, episodios, score, categorías, temporada, studio y resumen
- [x] Imagen del anime
- [ ] Implementar sistema de animes favoritos
- [ ] Implementar una funcionalidad que permita a los usuarios marcar animes como favoritos y guardarlos en el navegador (local storage).
- [ ] Mostrar una lista de los animes favoritos guardados.
- [ ] Permitir filtrar favoritos por estado o categoría.

## Diseño y Responsividad

- [x] Tomar de guía este diseño: [hidden information]
- [ ] Incluir animaciones y transiciones suaves entre vistas.
- [ ] Implementación de estrategias de SEO
- [ ] Implementar las mejores prácticas de SEO, incluyendo meta tags y Open Graph tags.
- [ ] Utilizar técnicas de pre-rendering y SSR (Server-Side Rendering) para mejorar el SEO.
- [x] Implementar rutas amigables para SEO.

## Validaciones y manejo de errores

- [ ] Asegurar que todas las entradas del usuario y respuestas de la API sean validadas correctamente.
- [ ] Manejar estados de carga y errores de manera adecuada.
- [ ] Implementar mensajes de error informativos y amigables

## Requisitos Técnicos

### Framework

- [x] Utilizar Next.js o React para desarrollar la aplicación.

### Renderizado

- [ ] Implementar estrategias de server-side rendering y static site generation para mejorar el rendimiento.

### Lenguaje

- [x] Utilizar TypeScript con interfaces y tipos estrictos en todo el código.

### Calidad de Código

- [x] Configurar reglas de ESLint y Prettier para mantener un código limpio y consistente.

### Estilos

- [x] Utilizar CSS o una librería de componentes Ul para estilos. <br>
      _Se valorará el uso de Tailwind CSS o styled-components._

### Despliegue (Opcional)

- [x] Desplegar la aplicación en Cloudflare Pages, Vercel o Netlify.

## ¿Qué se espera de ti en esta prueba?

### Dominio de las tecnologías

- Next.js (Frontend) / React.js (Frontend)
- TypeScript
- Manejo de APIs REST

### Habilidades de documentación

- Redacción clara y concisa de la documentación del proyecto
- Estructura lógica del código y la arquitectura
- Diagramado del planteamiento de la solución

### Enfoque en la mejora continua:

- Identificar oportunidades de mejora en el rendimiento
- Proponer soluciones efectivas para la escalabilidad
- Documentar decisiones técnicas y su justificación

## Recursos

- Documentación oficial de Next.js
- GraphQL API: `https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fgraphql.anilist.co&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4TADpIAR4AKAhgOYJ474F6JgCWxluNNAzvSggKoBOANi1Z4UnfhSrCayUv3psAFkKlJiogG4JlNAL7aCYBGyi96AB1EQk2vdVs6QAGhDrip4gCNxbDFmy9cBx0gA&_gl=1*1k0007i*_gcl_au*ODQ5MTE4MTg1LjE3MzQ5OTg5NTI`
- Link diseño como referencia: [hidden information]
