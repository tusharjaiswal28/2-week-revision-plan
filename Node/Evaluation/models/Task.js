const mongoose = require("mongoose");
const { create } = require("./ApiKey");

const taskSchema = new mongoose.Schema({
    title:{type:String, require:true},
    description:String,
    status:{type:String,
        enum:["todo","in-progess","completed"],
        default:"todo"
    },
    priority:{type:String,
        enum:["low","medium","high","critical"],
        default:"low"
    },
    dueDate:Date,
    tags:[String],
    createdAt:{type:Date, default:Date.now}
});

module.exports = mongoose.model("Task",taskSchema);