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

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});


// Volunteer Form Submission

app.post("/api/volunteers", (req, res) => {
  const { role, role_description, name, age, email, gender } = req.body;

  if (!role || !name || !age || !email || !gender) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `
    INSERT INTO volunteers (role, role_description, name, age, email, gender)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [role, role_description, name, age, email, gender], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error registering volunteer. Check email id" });
    }
    res.json({ message: "Volunteer registered successfully! Our team will contact you soon." });
  });
});

// Contact Form Submission

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";

  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error sending message" });
    }
    res.json({ message: "Message sent successfully! Thank you for your valuable concern." });
  });
});


// Donation Form Submission

app.post("/api/donations", (req, res) => {
  const { donor_name, donor_email, donation_amount } = req.body;

  if (!donor_name || !donor_email || !donation_amount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (donation_amount <= 0 || donation_amount > 150) {
    return res.status(400).json({ message: "Donation amount must be between ₹1 and ₹150" });
  }

  const query = "INSERT INTO donations (donor_name, donor_email, donation_amount) VALUES (?, ?, ?)";

  db.query(query, [donor_name, donor_email, donation_amount], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error saving donation" });
    }
    res.json({ message: "Donation saved successfully!" });
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
