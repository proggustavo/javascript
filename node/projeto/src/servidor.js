const porta = 3003

const express = require('express')
// instânciando o express
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

// app.get('/produtos', (req, res, next) => {
//    console.log('Middleware 1...') // vai converter para json
//    next() // passa para o próximo método
// })

app.use(bodyParser.urlencoded({ extended: true })) 
// para qualquer requisição ele vai obrigatoriamente passar por aqui, 
// se o padrão for urlencoded ele vai fazer o parse para objeto

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // vai converter para json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})