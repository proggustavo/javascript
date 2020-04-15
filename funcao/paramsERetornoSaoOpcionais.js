function area(largura, altura){
    const area = largura * altura
    if(area > 20 ){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) // not a number
console.log(area()) // not a number
console.log(area(2, 3, 4, 5)) // ele ignora os outros paramêtros
console.log(area(5, 5))