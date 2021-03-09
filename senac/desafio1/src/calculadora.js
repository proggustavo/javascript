function maiorDeIdade(req, res) {
  const { idade } = req.body;
  res.send({ message: idade >= 18 ? "Maior de idade" : "Menor de idade" });
}

function somar(req, res) {
  const { n1, n2 } = req.body;
  res.send({ resultado: +n1 + +n2 });
}

module.exports = { maiorDeIdade, somar };
