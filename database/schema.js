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
    
});

export const messageSchema = mongoose.Schema({
    sender: {
        type: String
    },
    responder: {
        type: String
    },
    dateOfmessage: {
        type: Date
    }
});