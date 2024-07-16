// // // // server.js

// // // const express = require('express');
// // // const mysql = require('mysql2');
// // // const bodyParser = require('body-parser');
// // // const cors = require('cors');

// // // const app = express();
// // // const port = 5000;

// // // // MySQL Connection
// // // const db = mysql.createConnection({
// // //   host: 'localhost',
// // //   user: 'root',
// // //   password: 'Sachindani@0804',
// // //   database: 'smsc_local', 
// // // });

// // // db.connect((err) => {
// // //   if (err) {
// // //     throw err;
// // //   }
// // //   console.log('Connected to MySQL database');
// // // });

// // // // Middleware
// // // app.use(cors());
// // // app.use(bodyParser.json());
// // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // Routes
// // // app.post('/api/messages', (req, res) => {
// // //   const { name, email, phone, message } = req.body;
// // //   const insertQuery = 'INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)';
// // //   db.query(insertQuery, [name, email, phone, message], (err, result) => {
// // //     if (err) {
// // //       console.error('Error inserting message into database:', err);
// // //       res.status(500).json({ success: false, error: 'Failed to store message' });
// // //     } else {
// // //       console.log('Message stored successfully:', result);
// // //       res.status(200).json({ success: true, message: 'Message stored successfully' });
// // //     }
// // //   });
// // // });

// // // // Start server
// // // app.listen(port, () => {
// // //   console.log(`Server running on port ${port}`);
// // // });


// // const express = require('express');
// // const mysql = require('mysql2');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken'); // Optionally, for creating JWT tokens

// // const app = express();
// // const port = 5000;

// // // MySQL Connection
// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: 'Sachindani@0804',
// //   database: 'smsc_local', 
// // });

// // db.connect((err) => {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log('Connected to MySQL database');
// // });

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // // Routes

// // // Route to handle user registration (just for completeness)
// // app.post('/api/register', async (req, res) => {
// //   const { fname, lname, username, email, password } = req.body;
// //   const hashedPassword = await bcrypt.hash(password, 10);

// //   const insertQuery = 'INSERT INTO users (fname, lname, username, email, password) VALUES (?, ?, ?, ?, ?)';
// //   db.query(insertQuery, [fname, lname, username, email, hashedPassword], (err, result) => {
// //     if (err) {
// //       console.error('Error inserting user into database:', err);
// //       res.status(500).json({ success: false, error: 'Failed to register user' });
// //     } else {
// //       console.log('User registered successfully:', result);
// //       res.status(200).json({ success: true, message: 'User registered successfully' });
// //     }
// //   });
// // });

// // // // Route to handle user login
// // // app.post('/api/login', (req, res) => {
// // //   const { username, password } = req.body;
// // //   console.log("username:",username);
// // //   console.log("password:",password);

// // //   const query = 'SELECT * FROM users WHERE username = ?';
// // //   db.query(query, [username], async (err, results) => {
// // //     console.log("query:",query);
// // //     if (err) {
// // //       console.error('Error fetching user from database:', err);
// // //       return res.status(500).json({ success: false, error: 'Server error' });
// // //     }
// // //     if (results.length === 0) {
// // //       return res.status(400).json({ success: false, message: 'Invalid username or password' });
// // //     }

// // //     const user = results[0];
// // //     const isMatch = await bcrypt.compare(password, user.password);

// // //     if (!isMatch) {
// // //       return res.status(400).json({ success: false, message: 'Invalid username or password' });
// // //     }

// // //     // Optional: Create a JWT token
// // //     // const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

// // //     res.status(200).json({ success: true, message: 'Login successful' /*, token*/ });
// // //   });
// // // });

// // app.post('/api/login', (req, res) => {
// //   const { username, password } = req.body;
// //   console.log("username:", username);
// //   console.log("password:", password);

// //   const query = 'SELECT * FROM users WHERE username = ?';
// //   db.query(query, [username], async (err, results) => {
// //     console.log("query:", query);
// //     if (err) {
// //       console.error('Error fetching user from database:', err);
// //       return res.status(500).json({ success: false, error: 'Server error' });
// //     }
// //     if (results.length === 0) {
// //       return res.status(400).json({ success: false, message: 'Invalid username or password1' });
// //     }

// //     const user = results[0];
// //     const isMatch = await bcrypt.compare(password, user.password);

// //     if (!isMatch) {
// //       return res.status(400).json({ success: false, message: 'Invalid username or password2' });
// //     }

// //     res.status(200).json({ success: true, message: 'Login successful', redirectUrl: '/' });
// //   });
// // });


// // // Example route to handle storing messages
// // app.post('/api/messages', (req, res) => {
// //   const { name, email, phone, message } = req.body;
// //   const insertQuery = 'INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)';
// //   db.query(insertQuery, [name, email, phone, message], (err, result) => {
// //     if (err) {
// //       console.error('Error inserting message into database:', err);
// //       res.status(500).json({ success: false, error: 'Failed to store message' });
// //     } else {
// //       console.log('Message stored successfully:', result);
// //       res.status(200).json({ success: true, message: 'Message stored successfully' });
// //     }
// //   });
// // });

// // // Start server
// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });


// // server.js

// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken'); // Optionally, for creating JWT tokens

// const app = express();
// const port = 5000;

// // MySQL Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Sachindani@0804',
//   database: 'smsc_local',
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Route to handle user registration
// app.post('/api/register', async (req, res) => {
//   const { fname, lname, username, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const insertQuery = 'INSERT INTO users (fname, lname, username, email, password) VALUES (?, ?, ?, ?, ?)';
//   db.query(insertQuery, [fname, lname, username, email, hashedPassword], (err, result) => {
//     if (err) {
//       console.error('Error inserting user into database:', err);
//       res.status(500).json({ success: false, error: 'Failed to register user' });
//     } else {
//       console.log('User registered successfully:', result);
//       res.status(200).json({ success: true, message: 'User registered successfully' });
//     }
//   });
// });

// // Route to handle user login
// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;
//   console.log("username:", username);
//   console.log("password:", password);

//   const query = 'SELECT * FROM users WHERE username = ?';
//   db.query(query, [username], async (err, results) => {
//     console.log("query:", query);
//     if (err) {
//       console.error('Error fetching user from database:', err);
//       return res.status(500).json({ success: false, error: 'Server error' });
//     }
//     if (results.length === 0) {
//       return res.status(400).json({ success: false, message: 'Invalid username or password' });
//     }

//     const user = results[0];
//     console.log("Stored password hash:", user.password);

//     try {
//       const isMatch = await bcrypt.compare(password, user.password);
//       console.log("Password match result:", isMatch);

//       if (!isMatch) {
//         return res.status(400).json({ success: false, message: 'Invalid username or password' });
//       }

//       // Optional: Create a JWT token
//       // const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

//       // res.status(200).json({ success: true, message: 'Login successful', redirectUrl: '/' /*, token*/ });

//       // Assuming successful login logic
//       res.status(200).json({ success: true, message: 'Login successful', redirectUrl: '/Home' });

//     } catch (error) {
//       console.error('Error comparing passwords:', error);
//       return res.status(500).json({ success: false, error: 'Server error' });
//     }
//   });
// });

// // Route to handle storing messages
// app.post('/api/messages', (req, res) => {
//   const { name, email, phone, message } = req.body;
//   const insertQuery = 'INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)';
//   db.query(insertQuery, [name, email, phone, message], (err, result) => {
//     if (err) {
//       console.error('Error inserting message into database:', err);
//       res.status(500).json({ success: false, error: 'Failed to store message' });
//     } else {
//       console.log('Message stored successfully:', result);
//       res.status(200).json({ success: true, message: 'Message stored successfully' });
//     }
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid'); // For generating unique tokens
const jwt = require('jsonwebtoken'); // Optionally, for creating JWT tokens

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

// Route to handle user registration
app.post('/api/register', async (req, res) => {
  const { fname, lname, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const insertQuery = 'INSERT INTO users (fname, lname, username, email, password) VALUES (?, ?, ?, ?, ?)';
  db.query(insertQuery, [fname, lname, username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error inserting user into database:', err);
      res.status(500).json({ success: false, error: 'Failed to register user' });
    } else {
      console.log('User registered successfully:', result);
      res.status(200).json({ success: true, message: 'User registered successfully' });
    }
  });
});

// Route to handle user login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  
  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error('Error fetching user from database:', err);
      return res.status(500).json({ success: false, error: 'Server error' });
    }
    if (results.length === 0) {
      return res.status(400).json({ success: false, message: 'Invalid username or password' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid username or password' });
    }

    res.status(200).json({ success: true, message: 'Login successful', redirectUrl: '/home' });
  });
});

// Route to handle storing messages
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

// Route to handle joining a class
app.post('/api/join-class', (req, res) => {
  const { name, email, phone, preferredClass } = req.body;
  const insertQuery = 'INSERT INTO class_joiners (name, email, phone, preferred_class) VALUES (?, ?, ?, ?)';
  
  db.query(insertQuery, [name, email, phone, preferredClass], (err, result) => {
    if (err) {
      console.error('Error inserting class joiner into database:', err);
      res.status(500).json({ success: false, error: 'Failed to join class' });
    } else {
      console.log('Class joiner stored successfully:', result);
      res.status(200).json({ success: true, message: 'Joined class successfully' });
    }
  });
});

// Endpoint to request a password reset
app.post('/api/reset-password/request', async (req, res) => {
  const { email } = req.body;
  
  const userQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(userQuery, [email], async (err, results) => {
    if (err) {
      console.error('Error fetching user from database:', err);
      return res.status(500).json({ success: false, error: 'Server error' });
    }
    if (results.length === 0) {
      return res.status(400).json({ success: false, message: 'Email not found' });
    }

    const user = results[0];
    const resetToken = uuidv4();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    const insertQuery = 'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, ?)';
    db.query(insertQuery, [user.id, resetToken, expiresAt], (err, result) => {
      if (err) {
        console.error('Error inserting reset token into database:', err);
        return res.status(500).json({ success: false, error: 'Failed to request password reset' });
      }

      const resetLink = `http://yourdomain.com/reset-password/${resetToken}`;
      console.log('Password reset link sent to:', email);
      res.status(200).json({ success: true, message: 'Password reset link sent successfully' });
    });
  });
});

// Endpoint to confirm password reset
app.post('/api/reset-password/confirm', async (req, res) => {
  const { token, newPassword } = req.body;

  const tokenQuery = 'SELECT * FROM password_reset_tokens WHERE token = ? AND expires_at > NOW()';
  db.query(tokenQuery, [token], async (err, results) => {
    if (err) {
      console.error('Error fetching reset token from database:', err);
      return res.status(500).json({ success: false, error: 'Server error' });
    }
    if (results.length === 0) {
      return res.status(400).json({ success: false, message: 'Invalid or expired reset token' });
    }

    const tokenData = results[0];
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updateQuery = 'UPDATE users SET password = ? WHERE id = ?';
    
    db.query(updateQuery, [hashedPassword, tokenData.user_id], (err, result) => {
      if (err) {
        console.error('Error updating password:', err);
        return res.status(500).json({ success: false, error: 'Failed to reset password' });
      }

      const deleteQuery = 'DELETE FROM password_reset_tokens WHERE id = ?';
      db.query(deleteQuery, [tokenData.id], (err, result) => {
        if (err) {
          console.error('Error deleting reset token from database:', err);
          return res.status(500).json({ success: false, error: 'Failed to reset password' });
        }
        
        res.status(200).json({ success: true, message: 'Password reset successfully' });
      });
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
