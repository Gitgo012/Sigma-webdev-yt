const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const generateData = require("./public/js/generateData"); // Import the model

const port = 3000;
const app = express();

// Parse incoming JSON requests
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/EX-16")
// Serving static files (CSS/JS)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// POST route to add data to MongoDB
app.post("/addData", async (req, res) => {
    try {
        const newData = new generateData({
            name: req.body.name,
            salary: req.body.salary,
            language: req.body.language,
            city: req.body.city,
            isManager: req.body.isManager
        });

        await newData.save();
        res.status(201).json({ message: 'Data added successfully', data: newData });
    } catch (error) {
        console.error("Error while adding data:", error); // Log the error for debugging
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
