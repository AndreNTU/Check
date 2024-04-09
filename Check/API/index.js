const express = require('express')
const mongoose = require('mongoose')
const crypto = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 8000
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const jwt = require("jsonwebtoken")

mongoose.connect
  ("mongodb+srv://traderdre:Password@check.stfyn8v.mongodb.net/", {
  }).then(() => {
    console.log('Connected to MongoDB')
  }).catch((err) => {
    console.log('Error Connecing to MongoDB')
  })

app.listen(port, '192.168.0.14', () => {
  console.log('Server is running')
})

const User = require('./user')

//registration

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new User({ name, email, password });

    await newUser.save();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {

    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });

  }
});

//

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey()

//login

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }

    if (user.password !== password) {
      return res.status(404).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});
