const { consultarCidade } = require("./infoCidade");

function maiorDeIdade(req, res) {
  const { idade } = req.body;
  res.send({ message: idade >= 18 ? "Maior de idade" : "Menor de idade" });
}

function somar(req, res) {
  const { n1, n2 } = req.body;
  res.send({ resultado: +n1 + +n2 });
}

function nomeIdade(req, res) {
  const { nome, idade } = req.body;
  res.send({ message: `Seu nome é ${nome} e sua idade é ${idade}` });
}

async function cidade(req, res) {
  const { cidade } = req.body;
  let info = {};
  await consultarCidade(cidade.toLowerCase()).then((e) => {
    info = `A cidade de ${e.nome} fica no estado de ${e.microrregiao.mesorregiao.UF.nome}, no ${e.microrregiao.mesorregiao.UF.regiao.nome} do Brasil. Na região de ${e.microrregiao.mesorregiao.nome}`;
  });
  res.send({ info });
}

module.exports = { maiorDeIdade, somar, nomeIdade, cidade };
