const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "products.cotxlsco91bc.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Frmarsid35",
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
app.get("/api/product", (req, res) => {
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
