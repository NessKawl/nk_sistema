const Sequelize = require('sequelize')

// realiza a conexão com o banco de dados
const sequelize = new Sequelize('nksystem', 'root', '10072005', {
    host: 'localhost',
    dialect: 'mysql'
});

// verifica a conexão com o banco de dados
sequelize.authenticate().then(()=>{ 
    console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch((err)=>{
    console.log("Erro: Não foi possível se conectar ao banco de dados!" + err)
})

// Define a tabela
const Pedido = sequelize.define('pedidos', {
    numeroMesa: {
        type: Sequelize.DOUBLE
    },
    nomeCliente: {
        type: Sequelize.STRING 
    }
})

// Cria a tabela especificada
// Pedido.sync({force: true})

// Insere dados na tabela
// Pedido.create({
//     numeroMesa: 5,
//     nomeCliente: 'Maria'
// })