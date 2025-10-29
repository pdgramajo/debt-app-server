// Este archivo solo sirve para que swagger-autogen detecte tus rutas correctamente
// No se usa en producción, solo en "node swagger.js"

import express from 'express';
import debtsRoutes from './routes/debts.routes.js';
import usersRoutes from './routes/users.routes.js';

const app = express();

app.use('/api/debts', debtsRoutes.router);
app.use('/api/users', usersRoutes.router);

export default app;