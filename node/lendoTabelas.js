const fs = require("fs");
const { Interface } = require("readline");

//vendo conteúdo da pasta

let conteudo = fs.readFileSync(
  "/home/gustavo/Área de Trabalho/textoInscricoes.txt",
  "utf-8"
);

// console.log(conteudo);

// conteudo.replace("/\D/g", "");

conteudo = conteudo.replace(/[^0-9\s]/g, "");

let linhas = conteudo.split(/\n/g);

let cnpjCpf = linhas[0].split(/\s/g);

console.log(cnpj[1]);

export Interface importacao {
  ola

}

// console.log("Regex ", conteudo.match(/\w/g));

// const excluiu = fs.unlink("/home/gustavo/reuniao.txt");

// console.log(excluiu);
