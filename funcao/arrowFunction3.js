// O THIS de uma função arrow é associado ao contexto de onde a função foi escrita e nunca mudará

let comparaComThis = function (param){
    console.log(this === param)
}// em uma função normal o this aponta para o global

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj) // alterando pra onde o this aponta

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // na função arrow o this não aponta para o global
comparaComThisArrow(global)
comparaComThisArrow(module.exports) 
// cada arquivo no node é um módulo, no caso da função arrow ela aponta para 
//o módulo que ele foi criada

comparaComThisArrow = comparaComThisArrow.bind(obj) 
// mesmo tentando mudar a referência do this com o bind não funcionará,
// a função arrow será mais forte e continuará apontando para o contexto que foi criada
comparaComThisArrow(obj)