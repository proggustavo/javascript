//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7)// a função pega só os dois primeiros e ignora o restante
imprimirSoma()//aceita e retorna um not a number

// Funcao com retorno
//colocando valor padrão quando não for preenchido 
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))//o b fica padrão nesse caso
