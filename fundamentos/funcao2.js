// Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
// Arrow function

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito 

const subtracao = (a, b) => a - b // quando é só uma linha não precisa de chaves
console.log(subtracao(2,3 ))