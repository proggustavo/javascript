// atribuindo um novo valor no campo nome
const pessoa = { nome: "Joao" };
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa recebe um novo objeto em outro endereço de memória
// pessoa = { nome: "Ana" }; // isso vai gerar um problema.. porque é uma constante
console.log(pessoa);

Object.freeze(pessoa);
// com isso não será mais possível alterar o objeto, torna o objeto constante
// e não só sua referência em endereço de memória

pessoa.nome = "Maria";

console.log(pessoa);
