# 💰 Debt App Server

Servidor API REST construido con **Node.js** y **Express** para gestionar deudas. Utiliza **MongoDB** como base de datos y está preparado para ejecutarse en contenedores **Docker**.

---

## 🚀 Características

- ⚙️ API REST con Express.js
- 🔐 Autenticación con JWT (`jsonwebtoken`)
- 🗃️ Base de datos MongoDB
- ✅ Validación de datos con `express-validator`
<!-- - 🔒 Encriptación de contraseñas con `bcryptjs` -->
- 🌍 CORS habilitado
- ♻️ Hot-reload en desarrollo con `nodemon`

---

## 📋 Requisitos Previos

- 🐳 [Docker](https://www.docker.com/)
- 📦 [Docker Compose](https://docs.docker.com/compose/)

---

## ⚙️ Configuración del Entorno

1. Copia el archivo de variables de entorno de ejemplo:

   ```bash
   cp .env.example .env
   ```

2. Configura las variables de entorno en el archivo `.env` con tus valores:
   - `MONGO_INITDB_ROOT_USERNAME`
   - `MONGO_INITDB_ROOT_PASSWORD`
   - `MONGO_INITDB_DATABASE`
   - `PORT`
   - `MONGODB_PORT`
   - `MONGODB_AUTH_DATABASE`
   - `ACCESS_TOKEN_SECRET`
   - `REFRESH_TOKEN_SECRET`

🐳 **Ejecución con Docker**

### Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
docker-compose up -d
```

Esto iniciará:

- El servidor Node.js en el puerto 3001
- MongoDB en el puerto 27017

En modo desarrollo, el código se actualiza automáticamente gracias a `nodemon` (hot-reload), que está configurado en el script `npm run dev`. Los archivos del proyecto están montados como volúmenes en el contenedor, lo que permite ver los cambios en tiempo real.

### Producción

Para producción, utiliza el `Dockerfile.prod`:

```bash
docker build -f Dockerfile.prod -t debt-app-server .
docker run -p 3001:3001 debt-app-server
```

📜 **Scripts Disponibles**

- `npm run dev` : Inicia el servidor con nodemon para desarrollo
- `npm start` : Inicia el servidor en modo producción

📁 **Estructura del Proyecto**

El proyecto sigue una arquitectura MVC (Modelo-Vista-Controlador) con la siguiente estructura:

```ESCAPE
   /src
   ├── config/         # Configuraciones (base de datos, CORS, etc.)
   ├── controllers/    # Controladores de la API
   ├── middlewares/    # Middlewares personalizados
   ├── models/         # Modelos de MongoDB
   ├── routes/         # Rutas de la API
   ├── services/       # Lógica de negocio
   ├── utils/          # Utilidades
   └── validators/     # Validadores de datos
```

💻 **Desarrollo**

El entorno de desarrollo está configurado con `nodemon` para proporcionar hot-reload. Cuando se ejecuta con Docker Compose, los siguientes volúmenes están montados para desarrollo:

- `./src:/home/app/src` : Código fuente
- `./package.json:/home/app/package.json` : Archivo de dependencias
- `./package-lock.json:/home/app/package-lock.json` : Lock file de dependencias

Esto permite que los cambios en el código se reflejen inmediatamente sin necesidad de reconstruir el contenedor.
