const express = require('express');
const bodyParser = require('body-parser');

const getInformation = require('./routes/query');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/query', getInformation);

module.exports = app;