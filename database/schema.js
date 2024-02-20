import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    fullName : {
        type : String ,
        required : true ,
    },
    userName : {
        type : String ,
        required : true ,
    },
    phoneNumber : {
        type : Number ,
        required :true ,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String ,
        required : true ,
    },
    
});




