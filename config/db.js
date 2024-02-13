import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then( 
        console.log("db is connect")
    )
    .catch((err)=>{
        console.log(err)
    })