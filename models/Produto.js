const db = require('./db')
const Produto =  db.sequelize.define('produtos', {
    nome: {
        type: db.Sequelize.STRING
    },
    preco: {
        type: db.Sequelize.DOUBLE
    },
    img: {
        type: db.Sequelize.STRING
    }
});

//Produto.sync({force: true})

module.exports = Produto