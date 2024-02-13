import express from 'express';
import cors from "cors";
import { dbs } from "./database/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=> {
    res.status(200).send("hello World")
})

dbs(app);
