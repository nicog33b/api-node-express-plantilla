const express = require('express');
const ConnectDB = require('./db')
const app = express();
const port = 3000;

ConnectDB();
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('Home de la api.');
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})