let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//pode tirar os parênteses no caso de ter somente um paramêtro
// sem o bloco o retorno é implícito 
dobro = a => 2 * a

console.log(dobro(2))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá' 
ola = _ => 'Olá' 

console.log(ola())