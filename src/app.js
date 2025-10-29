import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const swaggerFile = require('../swagger-output.json');
import corsOptions from "./config/corsOptions.js";
import credentials from "./middlewares/credentials.js";
import routes from './routes/index.routes.js'

const app = express();

// configuration
app.set("port", process.env.PORT || 3001);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("welcome to my api rest dockerized edited from development");
});

// loading all routes
app.use('/api', routes)

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
