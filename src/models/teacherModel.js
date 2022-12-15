const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Name is required"],
        unique : [true, "Name already exits"],
        trim : true 
    },
    email :{
        type : String,
        required : [true,"Email is required"],
        unique : [true,"email already exits"],
        trim : true
    },
    password : {
        type : String,
        required : [true, "[password is required"],
        trim : true
    }
},{timestamps: true})


module.exports = mongoose.model("teacher",teacherSchema);