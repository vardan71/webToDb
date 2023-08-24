const Sequelize = require('sequelize')
const db = require('../db')

const Numbers = db.define('numbers', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    randomNum: {
        type: Sequelize.STRING
    },

},
    {
        timestamps: false,
        tableName: 'Numbers'
    }
)

module.exports = Numbers