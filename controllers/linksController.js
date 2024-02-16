import bcrypt from "bcryptjs";
import { coll } from "../database/model.js";

export const login = (req, res) => {
  
};

export const register = (req, res) => {
    console.log(req.body);

    const { fullName, userName, phoneNumber ,email, password } = req.body;
    if (!fullName || !userName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newuser = new coll({
        fullName: fullName,
        userName: userName,
        phoneNumber :phoneNumber ,
        email: email,
        password: hashedPassword, // Save hashed password
    });
    console.log(newuser);
    newuser.save()
        .then(() => {
            res.json({ message: "Registration successful" });
        })
        .catch((err) => {
            res.status(500).json({ message: "Error occurred during registration", error: err });
        });
};