function saudacao(nome){ // se colocar só com essa function ele vai tentar procurar a req e res nesses parametros, fazendo o nome virar a req
    return function(req, res, next){
        console.log(`Seja Bem vindo ${nome}`)
        next()
    }
}

module.exports = saudacao