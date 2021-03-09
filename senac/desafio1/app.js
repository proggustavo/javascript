const calculadora = require("./src/calculadora");
const express = require("express");
const app = express();

app.get("/somar", calculadora.maiorDeIdade);

module.exports(app);
// export { app };
