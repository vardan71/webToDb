const port = 3001
// const fs = require('fs')
// const path = require('path')
// import RandomNumber from "./RandomNumbers";
// const RandomNumber = require('../client/src/RandomNumbers')
const express = require('express')

// const addDiv = require("../client/src/App")

// console.log(RandomNumber)
const db = require('./db.js')
// const Catalog = require('./models/Catalog.js')
const Numbers = require('./models/Numbers.js')

const app = express()

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(error => console.error(error));


app.get('/', async (req, res) => {
    try {
        const user = await Numbers.findAll()
        res.end(JSON.stringify(user, null, 3));
    }
    catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
})

// let num = RandomNumber()

app.post('/add', (req, res) => {
    // const app = require('../client/src/App');
    // console.log(app);
    // console.log(res);
    const data = {
        nums:  req.query.random
    }

    // console.log(res)

let { id, nums } = data

Numbers.create({
    id,
    nums
})

})

app.listen(port, () => {
    console.log('Server is running ');
})