const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const funcionarioChines = funcionario => funcionario.pais === 'China'
const funcionariaMulher = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}


// mulher chinesa com o menor salário

axios.get(url).then(response => {
    const funcionarios = response.data

    const resultado = funcionarios.filter(funcionarioChines).filter(funcionariaMulher).reduce(menorSalario)
    console.log(resultado)

})


