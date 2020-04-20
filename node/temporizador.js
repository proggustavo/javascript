const schedule = require('node-schedule');

// */5 executar de 5 em 5 segundos -- se eu colocasse assim >> 5 ele executaria no segundo 5 de todo minuto
// * qualquer minuto
// quando for 12 horas
// * * qualquer dia do mês e mês
// 2 dia da semana começando no 0 = domingo
// essa tarefa será executada a cada 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 1', function (){
    console.log('executando tarefa 1', new Date().getSeconds())
})

// quando passar 20 segundos a tarefa1 será cancelada
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 16
regra.second = 30


// a tarefa2 será iniciada aos 30 segundos de toda hora nos dias de semanas conforme sua regra
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})

