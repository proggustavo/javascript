//array é um vetor, no javascript ele é heterogêneo e sem tamanho fixo

const valores = [7.7 , 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) //não da erro, da indefinido 

valores[4] = 10
console.log(valores)//ele deixa vazio
console.log(valores.length)//numero de elementos

valores.push({id: 3}, false, null, 'teste')//adicionar valores
console.log(valores)

console.log(valores.pop())//tira o ultimo valor
delete valores[0]
console.log(valores)

console.log(typeof valores) //array é objeto 

