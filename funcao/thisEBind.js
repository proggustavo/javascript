const pessoa = {
    saudacao: 'Bom dia', 
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() //aqui estou chamando a função a partir do objeto pessoa, por isso o this funciona

const falar = pessoa.falar 
falar() // aqui o this não funciona pq mudou o contexto
// conflito entro paradigmas: funcional e OO

// solução para essa situação

const falarDePessoa = pessoa.falar.bind(pessoa) // no bind você passa o objeto no qual você quer que o this resolva

falarDePessoa()