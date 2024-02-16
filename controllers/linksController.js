import express from "express";

export const login =  (req  ,res ) => {
    
}

export const registe = (req  ,res ) => {
    const {fullName , userName , email, password} = req.body ;
    console.log(fullName + userName , email , password);
}