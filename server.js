const express = require("express"); 
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

//  Volunteer Form Submission
app.post("/api/volunteers", (req, res) => {
  const { role, name, age, email, gender } = req.body;
  const query = "INSERT INTO volunteers (role, name, age, email, gender) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [role, name, age, email, gender], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Volunteer registered successfully! Our team will contact you soon." });
  });
});

// Contact Form Submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const query = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "Message sent successfully! Thank you for your valuable concern." });
  });
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
