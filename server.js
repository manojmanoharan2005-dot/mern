const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
app.use("/auth", require("./routes/authRoutes"));
app.use("/task", require("./routes/taskRoutes"));


app.get("/api", (req, res) => {
    res.send("Hello World!");
});
app.post("/api", (req, res) => {
    const data = req.body;
    res.send(data);
});
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
 