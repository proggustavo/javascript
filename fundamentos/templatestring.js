const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + "!"
// aqui embaixo se inicia com acento grave
const template = `
    Olá
    ${nome}!` 

console.log(concatenacao, template)

//expressoes 

console.log(`1 + 1 = ${1+ 1}`) // mostrando como somar

const up = texto => texto.toUpperCase() // letra maiuscula

console.log(`Ei... ${up('Cuidado')}!`) // atenção, no inicio é acento grave e não aspas simples