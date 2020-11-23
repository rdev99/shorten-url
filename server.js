const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const ShortUrl = require('./models/sortURL')

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

app.get("/short", async (req,res) => {
    var obj = await ShortUrl.find();
    res.send(obj);
})

app.post("/shorten",async (req,res) => {
    await ShortUrl.create({fullUrl : req.body.short})
    // console.log('Hello');
    res.redirect('/')
})


app.get("/:shortt", async (req,res) => {
    // console.log(req.params.shortt);
    let url = await ShortUrl.findOne({shortUrl : req.params.shortt});
    if(url==null)
    {
        res.sendStatus(404);
    }
    url.clickedNo++;
    url.save();

    res.redirect(url.fullUrl);
})





app.listen(PORT, () => console.log(`Server Started on port : ${PORT}`));