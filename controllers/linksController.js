import express from "express";

export const login =  (req  ,res ) => {
    res.status(200).send("login");
}

export const registe = (req  ,res ) => {
    res.status(200).send("registe");
}