const Sequelize = require('sequelize')
const db = require('../db')

const Asset = db.define('asset', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING
    },
    level: {
        type: Sequelize.STRING
    },
    catalog_address: {
        type: Sequelize.STRING
    },

},
    {
        timestamps: false,
        tableName: 'asset'
    }
)

module.exports = Asset