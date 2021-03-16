import express from "express";

const app = express();

app.get("/", () => "Hello");

app.listen(3000, () => console.log("Running"));
