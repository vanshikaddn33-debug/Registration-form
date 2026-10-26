require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const studentRoutes = require("./src/routes/studentRoutes");

const app=express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Registration API is running!");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
