let valor // não inicializada
console.log(valor)

valor = null //ausência de valor

// console.log(valor.toString()) // erro, não consigo acessar quando o de antes está undefined!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // evitar atribuir undefined .. para limpar utilize 0 ou null
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco) // não setado o boolean responde falso


