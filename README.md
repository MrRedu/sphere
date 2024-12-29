<p align="center">
   <br/>
   <a href="https://sphere-mrredu.vercel.app/" target="_blank">
    <img src="./public/logo.svg" width="250" alt="">
   </a>
   <h3 align="center">Sphere</h3>
   <p align="center">
    嘘を言わないで
   </p>
</p>

## Descripción

Aplicación web que permite a los usuarios explorar el universo de Anilist API, ver lista de animes, detalles de los animes por cada card. Debes integrar la API de Anilist API para obtener toda la información necesaria.

## Tabla de Contenidos

<details open>
  <summary>Tabla de contenidos</summary>
  <ul>
    <li><a href="#-características">Características</a></li>
    <li><a href="#-tecnologías">Tecnologías</a></li>
    <li><a href="#-instalación">Instalación</a></li>
    <li><a href="#-uso">Uso</a></li>
    <li><a href="#-contribución">Contribución</a></li>
    <li><a href="#-licencia">Licencia</a></li>
  </ul>
</details>

## Características

- Renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).
- Enrutamiento basado en archivos.
- Optimización automática de imágenes.

## Tecnologías

![Next.js][Next.js]![GraphQL][GraphQL]![Zustand][Zustand] <br>
![React.js][React.js]![TypeScript][TypeScript]![TailwindCSS][TailwindCSS]<br>
![Framer][Framer] <br>
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
[Framer]: https://img.shields.io/badge/framer-0055FF?style=for-the-badge&logo=framer&logoColor=white
[GraphQL]: https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
