function Pessoa (){
    this.idade = 0

    const self = this
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)

}

new Pessoa



// aqui eu não estou invocando a função, a função está sendo 
// invocada pelo temporizador do setinterval, por isso o contexto do this mudou
// por isso eu preciso colocar o bind, passando o contexto atual do setInterval, 
// que ai sim é a função pessoa

//outra opção é usar o self e acessar através do self