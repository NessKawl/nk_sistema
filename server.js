const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Pedido = require('./models/Pedido.js')

const port = 8080

app.use(express.static('public'));

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
    res.render('pedidos')
})

app.get('/porcoes', (req, res)=> {
    res.render('porcoes')
})

app.get('/salgados', (req, res)=> {
    res.render('salgados')
})

app.post('/add-mesa', (req, res)=>{
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

app.listen(port)