// const app = require("./app");
const express = require("express");
const calculadora = require("./src/calculadora");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.post("/idade", calculadora.maiorDeIdade);
app.post("/nomeidade", calculadora.nomeIdade);
app.post("/somar", calculadora.somar);

app.listen(3000, () => {
  console.log("Running!");
});
