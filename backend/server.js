console.log("🔥 THIS IS MY SERVER");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Import Route
const extractRoute = require("./routes/extract");

console.log("✅ Extract Route Loaded");

// Home Route
app.get("/", (req, res) => {
    console.log("HOME ROUTE HIT");

    res.json({
        success: true,
        message: "Backend Working"
    });
});

// Register Route
app.use("/extract", extractRoute);

console.log("✅ Route Registered");

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});