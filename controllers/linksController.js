import express from "express";
import bcrypt from "bcryptjs";
import { coll } from "../database/model.js";
// const jwt = require("jsonwebtoken");


export const login = (req, res) => {
  
};

export const register = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hashp) => {
    if (err) {
      return res.json({ error: err });
    } else {
      const newuser = new coll({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: hashp,
      });
      newuser.save()
        .then(() => {
          res.json({ message: "Registration successful" });
        })
        .catch((err) => {
          res.json({ message: "error", error: err });
        });
    }
  });
};
