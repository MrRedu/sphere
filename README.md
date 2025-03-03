<p align="center">
   <br/>
   <a href="https://sphere-mrredu.vercel.app/" target="_blank">
    <img src="./public/logo.svg" width="150" >
   </a>
   <h3 align="center">Sphere</h3>
   <p align="center">
    嘘を言わないで
   </p>
</p>

<details open>
  <summary>
  <h2>Tabla de contenidos</h2>
  </summary>
  <ul>
    <li><a href="#-descripción">Descripción</a></li>
    <li><a href="#-características">Características</a></li>
    <li><a href="#-demo">Demo</a></li>
    <li><a href="#-tecnologías">Tecnologías</a></li>
    <li><a href="#-instalación">Instalación</a></li>
    <li><a href="#-uso">Uso</a></li>
    <li><a href="#-contribución">Contribución</a></li>
    <li><a href="#-licencia">Licencia</a></li>
  </ul>
</details>

## Descripción del Proyecto

Bienvenido a Sphere, tu portal definitivo al fascinante universo del anime. Con nuestra aplicación web, podrás explorar una vasta colección de animes que abarcan desde los clásicos hasta los últimos estrenos. La interfaz intuitiva y responsiva te permite buscar tus series favoritas por nombre, puntuación o categoría, facilitando el descubrimiento de nuevos títulos que se ajusten a tus gustos personales.

Además, podrás guardar tus animes preferidos en una lista de favoritos, lo que te permitirá acceder a ellos en cualquier momento. La experiencia de navegación es fluida y agradable, diseñada para que disfrutes al máximo mientras te sumerges en el mundo del anime. Únete a nosotros y transforma tu forma de disfrutar el anime con Sphere.

## Características

- **Página de Inicio**:

  - Tenemos una sección principal con un deslizador horizontal con los animes más visto de todos los tiempos
  - Una sección en grilla con los 4 animes más populares en el momento
  - Por último, tenemos una galería de animes; en el que podemos filtrar por nombre, género, estado, score; además podemos agregar a favoritos

- **Página de Detalles del Anime**:

  - Detalle del anime con información completa: nombre (inglés y nativo), estado, episodios, puntuación, categorías, formato, fecha de salida con fecha de culminación y resumen.
  - Imagen del anime incluida con animación de carta holográfica al hacerle hover.
  - Botones; uno para agregar a favoritos y otro para ir al trailer directamente.

- **Sistema de Favoritos**:

  - Los usuarios pueden marcar animes como favoritos y almacenarlos en el almacenamiento local del navegador.
  - Opción para filtrar favoritos por género, estado, score y también por nombre.

- **Diseño Responsivo**:

  - Todas las pantallas están adaptadas a diferentes dispositivos para una experiencia óptima en móviles y computadoras de escritorio.

- **SEO Optimizado**:

  - Implementación de estrategias efectivas de SEO con meta tags y rutas amigables para el usuario.
  - Uso de técnicas de pre-rendering y Server-Side Rendering (SSR) para mejorar el rendimiento.
  - Cada enlace de anime específico tiene sus meta-tags de SEO; para asi ver su información al compartir su enlace.

- **Manejo de Errores**:

  - Validación adecuada de entradas del usuario y respuestas de la API.
  - Estados de carga y mensajes de error informativos.

- **Calidad del Código**:

  - Reglas de ESLint y Prettier configuradas para mantener un código limpio.
  - Uso estricto de TypeScript con interfaces y tipos definidos.

## Demo

¡Descubre <em>Sphere</em> directamente desde tu navegador! <br>
[![Ver Deploy](https://img.shields.io/badge/Ver%20Deploy-Sphere-5fdd9d?style=for-the-badge&logo=vercel)](https://sphere-mrredu.vercel.app/)

## Tecnologías

![Next.js][Next.js]![GraphQL][GraphQL]![Zustand][Zustand] <br>
![React.js][React.js]![TypeScript][TypeScript]![TailwindCSS][TailwindCSS]<br>
![Motion][Motion] <br>
![ESLint][ESLint]![Prettier][Prettier]<br>

## Instalación

Instrucciones paso a paso para instalar el proyecto en un entorno local.

1. Clona el repositorio:

```bash
git clone https://github.com/MrRedu/sphere.git
```

2. Navega al directorio del proyecto:

```bash
cd sphere
```

3. Instala las dependencias:

```bash
npm install
```

4. Configura las variables de entorno:

   4.1 Crea un archivo `.env` en la raíz del proyecto:

   ```bash
   touch .env
   ```

   4.2 Rellena los campos del archivo `.env` utilizando el formato basado en el archivo `.env.template`:

   ```bash
   # Anilist API
   ANILIST_API_URL=https://graphql.anilist.co

   # Next Auth Provider
   NEXTAUTH_URL='http://localhost:3000'
   NEXTAUTH_SECRET='<openssl rand -base64 32>'

   # Google Auth Provider
   GOOGLE_CLIENT_ID=<string>
   GOOGLE_CLIENT_SECRET=<string>
   ```

## Uso

Instrucciones sobre cómo ejecutar la aplicación localmente.

1. Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

2. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en acción.

## Contribución

Instrucciones sobre cómo contribuir al proyecto.

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b nombre-de-la-rama`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir una nueva característica'`).
4. Envía tus cambios (`git push origin nombre-de-la-rama`).
5. Abre un Pull Request.

## Licencia

Sphere está bajo la [Licencia MIT](LICENSE).

<hr>
<br>
<br>
<br>

![Logotipo](./public/logotype.svg)

<!-- -->
<!--  -->
<!--   -->
<!--    -->
<!--     -->
<!--      -->

<!-- MARKDOWN LINKS-->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Zustand]: https://img.shields.io/badge/Zustand-3e432d?style=for-the-badge&logo=zustand&logoColor=white
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-06b6d4?style=for-the-badge&logo=tailwind-css&logoColor=white
[ESLint]: https://img.shields.io/badge/eslint-4b32c3?style=for-the-badge&logo=eslint&logoColor=white
[Prettier]: https://img.shields.io/badge/prettier-f7b93e?style=for-the-badge&logo=prettier&logoColor=white
[Motion]: https://img.shields.io/badge/motion-F6EC2E?style=for-the-badge&logo=motion&logoColor=white
[GraphQL]: https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
