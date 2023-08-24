const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('users', {
    address: {
        type: Sequelize.STRING
    },
    cash1: {
        type: Sequelize.STRING
    },
    cash2: {
        type: Sequelize.STRING
    },
    cash3: {
        type: Sequelize.STRING
    },

},
    {
        timestamps: false,
        tableName: 'users'
    }
)

module.exports = User