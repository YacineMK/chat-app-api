import express from "express";
import { login, registe } from "../controllers/linksController.js";

export const Routese = (app) => {
    app.post("/login" , login);

    app.post("/register" , registe);
} 