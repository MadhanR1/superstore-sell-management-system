const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("product");
});

Router.post("/", (req, res) => {
  const Product_name = req.body.product_name;
  const Product_no = req.body.product_num;
  const Product_price = req.body.price;
  const Product_exDate = req.body.date;
  const Branch_no= req.body.branch_no;
  console.log(req.body);
  sqlconnection.query(
    `insert into Product values('${Product_name}',${(Product_no)},${Product_price},'${Product_exDate}',${Branch_no})`
  );
  sqlconnection.query(
    `select Product_no from Product where Product_name='${Product_name}'`,
    (err, rows, fields) => {
      console.log(rows);
      res.render("customer", { data: Object.assign({}, ...rows) });
    }
  );
});

module.exports = Router;