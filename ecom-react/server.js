const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Frmarsid_29",
  database: "Products",
});

db.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("db connection good");
  }
});
app.use(express.json());
app.use(cors());

app.get("/product", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3000, (error) => {
  console.log(`App listening on port 3000`);
});
