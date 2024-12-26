# Concert Plaza (Prueba técnica)

## Descripción del Proyecto

Desarrolla una aplicación web que permita a los usuarios explorar el universo de Anilist API, ver lista de animes, detalles de los animes por cada card. Debes integrar la API de Anilist API para obtener toda la información necesaria.

## Funcionalidades Requeridas

- [ ] Página de inicio con lista de animes
- [ ] Consumir la API de Anilist API para obtener y mostrar una lista de animes.
- [ ] Implementar paginación para manejar grandes cantidades de datos.
- [ ] Mostrar información básica de cada anime (nombre, formato, episodios categorías, imagen, score y status).

## Barra de búsqueda multifuncional

- [ ] Implementar una funcionalidad de búsqueda que permita a los usuarios buscar: animes por nombre, por score, por categoría y por status.
- [ ] Mostrar los resultados de búsqueda de manera paginada.

## Página de detalles del anime

- [ ] Implementar una vista de detalles que muestre la información completa del anime seleccionado, incluyendo: nombre, estado, episodios, score, categorías, temporada, studio y resumen
- [ ] Imagen del anime
- [ ] Implementar sistema de animes favoritos
- [ ] Implementar una funcionalidad que permita a los usuarios marcar animes como favoritos y guardarlos en el navegador (local storage).
- [ ] Mostrar una lista de los animes favoritos guardados.
- [ ] Permitir filtrar favoritos por estado o categoría.

## Diseño y Responsividad

- [x] Tomar de guía este diseño: [hidden information]
- [ ] Incluir animaciones y transiciones suaves entre vistas.
- [ ] Implementación de estrategias de SEO
- [ ] Implementar las mejores prácticas de SEO, incluyendo meta tags y Open Graph tags.
- [ ] Utilizar técnicas de pre-rendering y SSR (Server-Side Rendering) para mejorar el SEO. Implementar rutas amigables para SEO.

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

- [ ] Utilizar TypeScript con interfaces y tipos estrictos en todo el código.

### Calidad de Código

- [x] Configurar reglas de ESLint y Prettier para mantener un código limpio y consistente.

### Estilos

- [ ] Utilizar CSS o una librería de componentes Ul para estilos. <br>
      _Se valorará el uso de Tailwind CSS o styled-components._

### Despliegue (Opcional)

- [x] Desplegar la aplicación en Cloudflare Pages, Vercel o Netlify.
