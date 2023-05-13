const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'hellouncle',
    'root',
    'Sahil3453%%',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = sequelize;
