import * as dotenv from "dotenv";
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=> {
    res.status(200).send("hello World")
})

app.listen(port,()=>{
    console.log("gg the server is running")
})