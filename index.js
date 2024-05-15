const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const moment = require('moment')
const Pedido = require('./models/Pedido.js')
const Produto = require('./models/Produto.js')
const { where } = require('sequelize')

const port = 3000

app.use(express.static('public'));

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
     }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/almoco', (req, res)=> {
    res.render('almoco')
})

app.get('/bebidas', (req, res)=> {
    res.render('bebidas')
})

app.get('/lanches', (req, res)=> {
    res.render('lanches')
})

app.get('/pedidos', (req, res)=> {
    Pedido.findAll().then((pedidos)=>{
        res.render('pedidos', {pedidos: pedidos})
    })})

app.get('/porcoes', (req, res)=> {
    Produto.findAll().then((produtos)=>{
        res.render('porcoes', {produtos: produtos})
    })
})

app.get('/salgados', (req, res)=> {
    res.render('salgados')
})

app.get('/cad-produtos', (req, res)=> {
    res.render('cad-produtos')
})

// Lista dos produtos
app.get('/lista-produtos', (req, res)=> {
    Produto.findAll().then((produtos)=>{
        res.render('lista-produtos', {produtos: produtos})
    })
})

// app.post Para cadastrar produto e mesa
app.post('/cad-produto', (req, res)=> {
    Produto.create({
        nome: req.body.nomeProduto,
        preco: req.body.precoProduto,
        img: req.body.imgProduto
    }).then(()=>{
        res.redirect('/cad-produtos')
    }).catch((err)=>{
        res.send('Erro ao cadastrar o produto ' + err)
    })
})

app.get('/del-produto/:id', (req, res)=>{
    Produto.destroy({
        where: {'id': req.params.id}
    }).then(()=>{
        res.redirect('/lista-produtos')
    }).catch(()=>{
        res.send('Erro ao excluir produto!!')
    })
})

app.post('/add-pedido', (req, res)=>{
    Pedido.create({
        numeroMesa: req.body.nMesa,
        nomeCliente: req.body.nomeCliente
    }).then(() => {
        res.redirect('/porcoes')
        //res.send('Cadastrado com sucesso!')
    }).catch((err) => {
        res.send('Erro ao cadastrar o Pedido ' + err)
    });
    //res.send('Número Mesa:' + req.body.numeroMesa + '<br> Cliente: ' + req.body.nomeCliente)
})

app.get('/del-pedido/:id', (req, res)=>{
    Pedido.destroy({
        where: {'id': req.params.id}
    }).then(()=>{
        res.redirect('/pedidos')
    }).catch(()=>{
        res.send('Erro ao excluir pedido!!')
    })
})

// 
app.listen(port)