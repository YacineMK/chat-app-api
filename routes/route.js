import express from "express";
import { login, registe } from "../controllers/linksController.js";

export const Routese = (app) => {
    app.get("/login" , login);

    app.get("/register" , registe);
} 