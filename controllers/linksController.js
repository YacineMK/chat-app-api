import bcrypt from "bcryptjs";
import { coll } from "../database/model.js";
import jsonwebtoken from "jsonwebtoken";

export const login = async (req, res) => {
  const {userName , password} = req.body ;
  if (!userName || !password) {
    res.status(400).json({ message: "All fields are required" })
  }
  const hachedPassword = bcrypt.hashSync(password,10);
  const find = await coll.findOne(userName);
  if (!find) {
    res.status(400).json({error : "user not found "})
  }
  else if (await bcrypt.compare(find.password , hachedPassword)) {
    const token = jsonwebtoken.sign()
  } else {
    res.status(401).send('Invalid password');
  }
};

export const register = (req, res) => {
    //console.log(req.body);

    const { fullName, userName, phoneNumber ,email, password } = req.body;
    if (!fullName || !userName || !phoneNumber || !email || !password) {
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
