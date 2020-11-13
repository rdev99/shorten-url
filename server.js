const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 5000 || process.env.PORT;

const db = require('./config/keys').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected....'))
    .catch(err => console.log(err));



app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
})




app.listen(PORT, () => console.log(`Server Started on port : ${PORT}`));