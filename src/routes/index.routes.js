import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const PATH_ROUTES = path.dirname(__filename);

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

const loadRouter = async (file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    const routerModule = await import(`./${file}`);
    router.use(`/${name}`, routerModule.router);
  }
};

fs.readdirSync(PATH_ROUTES).filter((file) => loadRouter(file));

export default router;
