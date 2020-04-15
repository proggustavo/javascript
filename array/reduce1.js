const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// poderia também passar um valor inicial para o acumulador
// ele ficaria  depois da function
// caso não passe ele funciona como aqui em cima utilizando o primeiro valor como inicial

// reduce(function(acumulador, atual){
//     console.log(acumulador, atual)
//     return acumulador + atual
// }, 10)