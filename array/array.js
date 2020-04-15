console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael' // as posições vazias ficam undefined
console.log(aprovados)
console.log(aprovados.length)


aprovados.sort();
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])// fica undefined

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) 
// excluir elementos, o primeiro parametro é o elemento que vai começar, e o segundo são quantos elementos deve excluir

aprovados.splice(1, 0, 'novoElemento1', 'Novoelemento2') 
// para adicionar basta colocar o que quer adicionar depois. 
//Coloquei 0 para que não exclua nada, mas pode excluir e adicionar ao mesmo tempo também
console.log(aprovados)
