import express from "express";
import { maiorDeIdade, somar, nomeIdade, cidade } from "./src/calculadora.js";
// const bodyParser = require("body-parser");
const app = express();

// routes
import { CriarUserRouter } from "./src/criar-user.js";

app.use(express.json());
app.post("/idade", maiorDeIdade);
app.post("/nomeidade", nomeIdade);
app.post("/somar", somar);
app.post("/cidade", cidade);
app.use(CriarUserRouter);

app.listen(3000, () => {
  console.log("Running!");
});
