const mongoose = require("mongoose");

const apiKeySchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    apiKey:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model("ApiKey", apiKeySchema)