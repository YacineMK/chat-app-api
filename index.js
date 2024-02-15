import express from 'express';
import cors from "cors";
import { dbs } from "./database/db.js";
import { Routese } from './routes/route.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=> {
    res.status(200).send("hello World")
})

dbs(app,port);

Routese(app);


