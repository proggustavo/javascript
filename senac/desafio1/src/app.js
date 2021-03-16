import express from "express";

//routes
import { CriarUserRouter } from "./routes/createUser.js";
import {
  maiorDeIdade,
  somar,
  nomeIdade,
  cidade,
} from "./routes/calculadora.js";
import { errorHandler } from "./middlewares/errorHandler.js";
const app = express();
app.use(express.json());

app.post("/idade", maiorDeIdade);
app.post("/nomeidade", nomeIdade);
app.post("/somar", somar);
app.post("/cidade", cidade);

app.use(CriarUserRouter);

app.all("*", async () => {
  throw Error("Not Found");
});

app.use(errorHandler);

export { app };
