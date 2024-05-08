const express = require('express')
const app = express()

const port = 8080

// CONEXÃO DATABASE 
const mysql = require('mysql')
const { pid } = require('process')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '10072005',
    database: 'nksystem'
})

connection.connect((err) => {
    if (err) {
        console.log('erro de conexão' + err.stack)
        return
    }

    console.log('Conectado com sucesso');
})

connection.query('SELECT * from pedido', (err, row, fields) => {
    if (!err) {
        console.log('Resultado Pedido', row);
    } else {
        console.log('Erro ao fazer a consulta');
    }
})

connection.query('SELECT * from produto', (err, row, fields) => {
    if (!err) {
        console.log('Resultado Produto', row);
    } else {
        console.log('Erro ao fazer a consulta');
    }
})



// connection.query("INSERT INTO produto (nome, valor) VALUES ('Batata Frita', 18)", (err, result)=>{
//     if(!err) {
//         console.log('Pedido cadastrado com sucesso');
//     } else {
//         console.log('Erro ao criar o pedido');
//     }
// })

// connection.query("UPDATE pedido SET nome_cliente = 'Marcos' WHERE idpedido = 1", (err, result)=>{
//     if(!err) {
//         console.log('Pedido atualizado com sucesso');
//     } else {
//         console.log('Erro ao atualizar o pedido');
//     }
// })


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port)