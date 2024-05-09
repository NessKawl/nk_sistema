const db = require('./db')
const Pedido =  db.sequelize.define('pedidos', {
    numeroMesa: {
        type: db.Sequelize.DOUBLE
    },
    nomeCliente: {
        type: db.Sequelize.STRING
    }
});

//Pedido.sync({force: true})

module.exports = Pedido