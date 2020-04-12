'use strict';
require('./models');
const express = require('express');

const port = 8080;
const host = '0.0.0.0';


const app = express();
app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);