import express from "express";
import dotenv from "dotenv";
import connectionDB from "./config/db.js";

const app = express();
dotenv.config();
connectionDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
});