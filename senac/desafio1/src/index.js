import express from "express";
import {
  maiorDeIdade,
  somar,
  nomeIdade,
  cidade,
} from "./routes/calculadora.js";
import { body } from "express-validator";
import { app } from "./app.js";

try {
  app.listen(3000, () => {
    console.log("Running!");
  });
} catch (e) {
  console.log("====================================");
  console.log("--------- Error starting -----------");
  console.log("====================================");
}
