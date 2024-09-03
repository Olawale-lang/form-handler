// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Olawale:qXDloVlfpZo4wR3Z@mycluster.rb4mt.mongodb.net/?retryWrites=true&w=majority&appName=myCluster";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// // Export the run function and/or the client
// module.exports = { run, client };

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Olawale:qXDloVlfpZo4wR3Z@mycluster.rb4mt.mongodb.net/?retryWrites=true&w=majority&appName=myCluster";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connectToDatabase() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");  // Log this message on successful connection

//     // Optionally, ping the database to confirm the connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged the MongoDB deployment successfully.");

//   } catch (error) {
//     console.error("Failed to connect to MongoDB:", error);
//   }
// }

// module.exports = { connectToDatabase, client };

const mysql = require("mysql2");

// Create a connection to the database
// const connection = mysql.createConnection({
//   host: 'localhost', // Change this to your MySQL host
//   user: 'Olawale', // Change this to your MySQL username
//   password: 'Olawale198406', // Change this to your MySQL password
//   database: 'formResponses' // Change this to your MySQL database name
// });\
require('dotenv').config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

module.exports = connection;
