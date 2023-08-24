const port = 3001
const fs = require('fs')
const path = require('path')

const express = require('express')

const db = require('./db.js')
// const Catalog = require('./models/Catalog.js')
const Numbers = require('./models/Numbers.js')

const app = express()

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(error => console.error(error));


app.get('/', async (req, res) => {
    try {
        const user = await Numbers.findOne()
        res.end(JSON.stringify(user, null, 3));
    }
    catch (error) {
        res.status(404).json({
            error: error.message
        })

    }
})



app.listen(port, () => {
    console.log('Server is running ');
})