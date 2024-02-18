import bcrypt from "bcryptjs";
import { coll } from "../database/model.js";
import jsonwebtoken from "jsonwebtoken";

export const login = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const user = await coll.findOne({ username: userName });
    if (!user) {
      res.status(400).json({ error: "User not found" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jsonwebtoken.sign({ username: user.username }, "your_secret_key");
      res.json({ accessToken: token });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
