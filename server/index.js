import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const username = process.env.USER;
const password = process.env.PASSWORD;
mongoose
    .connect(
        `mongodb+srv://${username}:${password}@cluster0.xogyxrf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    });
const app = express();

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
