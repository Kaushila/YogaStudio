// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sachindani@0804',
  database: 'smsc_local', 
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/api/messages', (req, res) => {
  const { name, email, phone, message } = req.body;
  const insertQuery = 'INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(insertQuery, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('Error inserting message into database:', err);
      res.status(500).json({ success: false, error: 'Failed to store message' });
    } else {
      console.log('Message stored successfully:', result);
      res.status(200).json({ success: true, message: 'Message stored successfully' });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
