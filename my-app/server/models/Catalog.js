const Sequelize = require('sequelize')
const db = require('../db')

const Catalog = db.define('catalog', {
    ID: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    cost1: {
        type: Sequelize.STRING
    },
    cost2: {
        type: Sequelize.STRING
    },
    cost3: {
        type: Sequelize.STRING
    },
    req1: {
        type: Sequelize.STRING
    },
    req2: {
        type: Sequelize.STRING
    },
    req3: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },

},
    {
        timestamps: false,
        tableName: 'catalog'
    }
)

module.exports = Catalog