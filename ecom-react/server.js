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
// Making sure it connects
db.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("db connection good");
  }
});
app.use(express.json());
app.use(cors());

// Render my database
app.get("/product", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// What port its running on
app.listen(5000, () => {
  console.log(`App listening on port 5000`);
});
