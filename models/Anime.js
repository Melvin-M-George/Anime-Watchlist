const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    watched:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model("Anime",animeSchema);