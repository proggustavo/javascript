const anonimo = process.argv.indexOf('-a') !== -1 // pegando flag de comando no terminal
// node entradaESaida.js -a
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo! \n')
}