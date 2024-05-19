// CONEXÃO DB sequelize
const Sequelize = require('sequelize')

// realiza a conexão com o banco de dados
const sequelize = new Sequelize('nksystem', 'nesskawl', 'Nk_2102*', {
    host: 'localhost',
    dialect: 'mysql'
});

// exporta o sequelize
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}