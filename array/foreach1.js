const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// para ter acesso ao indice tem que adicionar o primeiro parâmetro, pois o indice sempre será o segundo
// a função callBack de um foreach recebem 3 parâmetros, valor, indice, array
// você pode retirar quantos parâmetros quiser

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado) // armazenando função em uma variável 