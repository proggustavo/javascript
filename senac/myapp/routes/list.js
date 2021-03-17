var express = require("express");
var router = express.Router();

var Post = require("../models/Post");

router.get("/list", function (req, res, next) {
  Post.findAll({ order: [["id", "DESC"]] })
    .then((posts) => {
      res.render("list", {
        title: "Formulário Lista",
        posts: posts,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send("Nenhum inscrição encontrada " + error);
    });
});

module.exports = router;
