// backend/seedBooks.js
import mongoose from "mongoose";
import Book from "./models/Book.js";

const MONGO_URI = "mongodb+srv://renulakshmi916:crpkWxuEFtJ0in7B@cluster0.jbpw4qg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected. Seeding books...");
    return Book.insertMany([
      {
        title: "New R.S. Aggarwal Book",
        author: "R.S. Aggarwal",
        description: "Latest edition for competitive exams."
      },
      {
        title: "RRB Math Book",
        author: "Rakesh Yadav",
        description: "Guide for RRB Mathematics exam."
      },
      {
        title: "JavaScript Essential Tutorial Book",
        author: "Mark Myers",
        description: "Learn JS with practical examples."
      },
      {
        title: "Best SQL Interview Preparation Book",
        author: "Vivek Pandey",
        description: "Covers top SQL interview questions."
      },
      {
        title: "DSA Complete Interview Book",
        author: "Narasimha Karumanchi",
        description: "DSA for coding interviews."
      }
    ]);
  })
  .then(() => {
    console.log("Books seeded successfully.");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Seeding failed:", err);
    mongoose.disconnect();
  });
