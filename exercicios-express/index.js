const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')

// app.use(saudacao('Guilherme'))

// app.use(bodyParser.json())

// app.post('/corpo', (req, res) => {
//     res.send(req.body.nome)
// })


// app.get('/opa', (req,  res, next) => {
//     console.log('Antes..')
//     next()
// })

// app.get('/clientes/:id', (req, res) => {
//     res.send(`Cliente ${req.params.id}  selecionado`)
// })

// app.get('/clientes/relatorio', (req, res) => {
//     res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
// })

app.get('/opa', (req, res, next) => {
    console.log('durante..')
    res.json({
        data: [
            {id: 7, name:'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position:3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    next()
    // res.json([
    //     {id: 7, name:'Ana', position: 1},
    //     {id: 34, name: 'Bia', position: 2},
    //     {id: 73, name: 'Carlos', position:3}
    // ])


    // res.json({
    //     name: 'iPad 32Gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })
    // res.send('estou bem');
})

// app.get('/opa', (req,  res, ) => {
//     console.log('Depois..')
    
// })

app.listen(3000,  () => {
    console.log('Backend executando...')
})