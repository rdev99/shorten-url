const mongoose = require('mongoose');
const shortId = require('shortid')

const shortURLSchema = new mongoose.Schema({
    fullUrl : {
        type : String,
        required : true
    },
    shortUrl : {
        type : String,
        required : true,
        default : shortId.generate
    },
    clickedNo : {
        type : Number,
        required : true,
        default : 0
    }
})

module.exports = mongoose.model('ShortUrl',shortURLSchema);