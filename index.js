import express from "express";
import dotenv from "dotenv";
import connectionDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

const app = express();
dotenv.config();
connectionDB();

// Routing
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
});