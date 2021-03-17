var express = require("express");
var router = express.Router();

var Post = require("../models/Post");

router.get("/edit/:id", function (req, res, next) {
  Post.findByPk(req.params.id)
    .then((post) => {
      res.render("edit", {
        title: "Formulário Edição",
        id: req.params.id,
        name: post.name,
        phone: post.phone,
        date: post.date,
        gender: post.gender,
        email: post.email,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("Erro ao localizar a postagem no edit" + error);
    });
});

router.post("/edition/:id", (req, res, next) => {
  Post.update(
    {
      name: req.body.name,
      phone: req.body.phone,
      date: req.body.date,
      gender: req.body.gender,
      email: req.body.email,
    },
    { where: { id: req.params.id } }
  )
    .then(function () {
      console.log("====================================");
      console.log("Inscrição atualizada com sucesso");
      console.log("====================================");
      res.redirect("/list");
    })
    .catch(function (err) {
      res.send("Erro ao atualizar inscrição. Erro: " + err);
    });
});

module.exports = router;
