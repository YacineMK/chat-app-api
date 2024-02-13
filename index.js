import express from 'express';
import cors from "cors";
import { dbs } from "./config/db.js";


const app = express();

app.get("/",(req,res)=> {
    res.status(200).send("hello World")
})

dbs(app);
