const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoute = require("./routes/auth.routes");
const taskRoute = require("./routes/task.routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/test", (req,res)=>{
    res.json({message:"This is test route"})
})
app.use("/api/auth", authRoute);
app.use("/api/tasks", taskRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})