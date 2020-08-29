// const db_connection=require('./db_connect');
const db = require('./db_connect');
// const app=require('express')();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json);

app.get('/', (req, res) => {
    res.json({
        res: 200,
        read: 'Successfully',
    })
});


app.get('/about', (req, res) => {
    let city = req.query.city;
    let username = req.query.username;
    let user = {
        city,
        username,
    }
    db.insertData(user);

    res.json({
        res: 200,
        read: 'About'
    })
});

app.post('/about',async (req, res) => {
    const input =req.body;
   await db.insertData(input);


    res.json({
        res: 200,
        read: 'About POST'
    })
});

app.listen(5600, () => {
    console.log("Port is listening on port 5600");
});