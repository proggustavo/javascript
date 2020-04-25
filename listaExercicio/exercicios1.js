//01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

/*
function somar(x, y){
    console.log("Soma " + x + y)
    console.log("Subtração " + (x - y))
    console.log("Divisão " + x/y)
    console.log("Multiplicação " + x * y)
}

somar(2, 4)

*/

// 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo)
 
/*
function identificaTriangulo(l1, l2, b){
    if(l1 == l2 && l2 == b ){
        return "Equilátero"
    }else if(l1 !== l2 && l1 !== b && l2 !== b){
        return "Isóceles"
    }else{
        return "Escaleno"
    }
}

console.log(identificaTriangulo(4, 4, 4))
console.log(identificaTriangulo(4, 4, 3))
console.log(identificaTriangulo(4, 2, 3))
*/

// 03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

/*
const result = (base, exp) => Math.pow(base, exp)
console.log(result(2, 4))
*/

// 04) ​ Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.
/*
function divisao(dividendo, divisor){
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4);
*/

function dinheiro(x){
    return `R$ ${x.toFixed(2).toString().replace(".", ",")}`
}

console.log(dinheiro(1100.30000000000000004))