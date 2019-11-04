let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) //é um array)
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 0))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // se estiver vazia fica falso (com espaço em branco já ´´e verdadeiro)
console.log(!!null)
console.log(!!NaN)// falso se não for número
console.log(!!undefined)
console.log(!!(isAtiivo = false))

console.log('pra finalizar.. ')
console.log(!!('' || null || 0 || ' '))

let nome = ''

console.log(nome || 'Desconhecido')