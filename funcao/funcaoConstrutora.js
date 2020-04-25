function Carro(maxVelo = 200, delta = 5){

    //atributo privado
    let velocidadeAtual = 0

    // metodo publico o this serve pra deixar esse método público
    this.acelerar = function (){
        if(velocidadeAtual + delta <= 200){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = maxVelo
        }
    }

    //metodo publico para retornar o valor do atributo privado

    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }

}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)// a função funciona como uma classe (molde) lembrar O.O
console.log(typeof ferrari) // aqui o objeto instanciado a partir da função/classe