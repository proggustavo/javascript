var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero) 

// os resultados são iguais pq as duas acabam no escopo global
//fuja do escopo global