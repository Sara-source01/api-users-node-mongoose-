require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors()); // ← تسمح بالتواصل بين صفحات HTML وخادم Express
app.use(express.json());

// هذا السطر هو المهم لحل مشكلة Cannot GET /
app.get("/", (req, res) => {
  res.send("Welcome to the Mongoose Demo API 🚀");
});

// المسارات الخاصة بالمستخدمين
app.use("/users", userRoutes);

// الاتصال بقاعدة البيانات
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(
        `🚀 Server is running at http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => console.error("❌ Connection error:", err));
