import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    fullName : {
        type : String ,
        required : true ,
    },
    userName : {
        type : String ,
        required : true ,
        unique: true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    password : {
        type : String ,
        required : true ,
        unique: true ,
    },
    
})