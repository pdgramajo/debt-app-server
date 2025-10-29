import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "API REST - Debts & Users",
    description: "Documentación auto-generada con swagger-autogen",
    version: "1.0.0",
  },
  host: "localhost:3001",
  basePath: "/api",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/swagger-routes.js"]; // <-- Ajusta según tu punto de entrada

swaggerAutogen({
  openapi: "3.0.0",
  autoHeaders: true,
  autoQuery: true,
  autoBody: true,
})(outputFile, endpointsFiles, doc).then(() => {
  console.log("✅ Swagger JSON generado correctamente");
});
