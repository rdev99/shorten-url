const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server Started on port : ${PORT}`) );