const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa saiu
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // remove o primeiro elemento da lista
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos)

// remover
pilotos.splice(3, 1);
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array iniciando do elemento indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // aqui posso determinar início e fim, mas a posição do fim não entra
console.log(algunsPilotos2)

