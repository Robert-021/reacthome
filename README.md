# HomePlay - Catálogo React

Este proyecto es la interfaz de catálogo de **HomePlay** desarrollada en React con Vite. Aquí encontrarás las instrucciones paso a paso para ejecutar el proyecto en tu entorno local después de haberlo clonado.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas en tu entorno:
- [Node.js](https://nodejs.org/) (versión 16 o superior).
- [npm](https://www.npmjs.com/) (usualmente viene instalado junto con Node.js), o alternativamente puedes usar `yarn` o `pnpm`.

## Instalación y Configuración Única

1. Abre tu terminal o consola de comandos.
2. Clona este repositorio o navega hasta el directorio del proyecto si ya lo has descargado:
   ```bash
   git clone <url-del-repositorio>
   cd homeplay-react
   ```
3. Instala todas las dependencias necesarias. Puedes utilizar `npm install`. Este comando leerá el archivo `package.json` y descargará todas las librerías necesarias para que el proyecto funcione:
   ```bash
   npm install
   ```
   *(Si utilizas otro gestor de paquetes puedes usar `yarn install` o `pnpm install`).*

## Ejecutando el servidor de desarrollo

Una vez instaladas las dependencias, podrás iniciar el servidor en modo desarrollo con recarga rápida (HMR):

1. En la consola, sin salir de la carpeta del proyecto, ejecuta:
   ```bash
   npm run dev
   ```
2. La consola mostrará un enlace local, por lo general `http://localhost:5173/`. Abre ese enlace en tu navegador web para ver el proyecto corriendo. Todos los cambios que hagas y guardes en el código serán reflejados inmediatamente en la pestaña del navegador.

## Scripts Adicionales

- `npm run build`: Empaqueta la aplicación para producción de forma optimizada en la carpeta `dist`.
- `npm run preview`: Levanta un servidor local que sirve los archivos que generaste en el comando de 'build', perfecto para comprobar cómo se visualizará el proyecto antes de desplegarlo.

## Tecnologías Principales Utilizadas

- **React** (Biblioteca de interfaz de usuario)
- **Vite** (Embalaje y servidor de desarrollo ágil)
- **Lucide-React** (Para la extensa colección de íconos)
- **React-Router-Dom** (Para el enrutamiento y la navegación PWA)
