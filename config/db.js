import mongoose from "mongoose";
import * as dotenv from "dotenv";
//import { app } from "../index.js";
const port = process.env.PORT || 3000;


dotenv.config()

export const dbs = (app) => {
 mongoose.connect(process.env.MONGO_URL)
    .then( () => {
        console.log("db is connect");
        app.listen(port,()=>{
            console.log("gg the server is running")
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}