const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const server = express();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

server.get("/users", (req, res) => {
  const db = new sqlite3.Database("./gik339-labb2.db");

  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.status(500).send(err); // Send an error response if the query fails
    } else {
      res.send(rows); // Send the retrieved data as the response
    }
  });

  db.close(); // Close the database connection
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
