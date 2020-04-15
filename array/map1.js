const nums = [1, 2, 3, 4, 5]

// o map não transforma o array atual, ele gera um novo array
// retornando um array com o dobro desses números
// for com propósito, no map sempre é gerado um novo array como mesmo tamanho

let resultado = nums.map(function(elemento){
    return elemento * 2
})

console.log(resultado)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)