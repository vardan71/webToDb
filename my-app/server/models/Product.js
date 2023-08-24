const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING
    },

},
    {
        timestamps: false,
        tableName: 'product'
    }
)

module.exports = Product