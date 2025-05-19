import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid email" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user._id }, "secretkey");
    res.json({ message: "Login successful", token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
