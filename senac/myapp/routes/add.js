var express = require("express");
var router = express.Router();

var Post = require("../models/Post");

router.get("/add", function (req, res, next) {
  res.render("add", { title: "Formulário inscrição" });
});

router.post("/add", (req, res, next) => {
  console.log(req.body);
  Post.create({
    name: req.body.name,
    phone: req.body.phone,
    date: req.body.date,
    gender: req.body.gender,
    email: req.body.email,
  })
    .then(function () {
      console.log("====================================");
      console.log("Postagem cadastrada");
      console.log("====================================");
      res.redirect("/form");
    })
    .catch(function (err) {
      res.send("Erro ao realizar inscrição. Erro: " + err);
    });
});

module.exports = router;
