//import express from "express";
import { login, register } from "../controllers/linksController.js";

export const Routese = (app) => {
    
    app.post("/api/login" , login);

    app.post("/api/register" , register);
} 