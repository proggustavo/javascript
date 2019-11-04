//criando var dentro de um bloco qualquer que não é função
{ { { { var sera = 'Sera??'} } } } 


console.log(sera)

// é visível mesmo fora do bloco (escopo)


//criando var dentro de função
function teste() {
    var local = 123
    
}
teste()
console.log(local)
//não é visível fora 

// cuidado ao criar var fora de função, elas ficam em escopo global e podem ser alteradas
// var só tem dois escopos possíveis, var global ou var no escopo de função