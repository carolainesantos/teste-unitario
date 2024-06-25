const express = require("express");
const routers = require("./src/routes/route.js");

const app = express();

app.use(express.json());

app.use(routers);

const PORT = "3000";

if (process.env.NODE_ENV != "test") {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
module.exports = app;
