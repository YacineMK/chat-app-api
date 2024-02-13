import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express"; 


dotenv.config();


export const dbs = (app , port) => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("db is connected");
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
