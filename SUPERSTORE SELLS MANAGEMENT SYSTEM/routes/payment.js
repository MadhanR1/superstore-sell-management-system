const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("payment");
});

Router.post("/", (req, res) => {
  const PayCustomer_id = req.body.paycustomer_id;
  const Payment_amount = req.body.amount;
  const Payment_Date = req.body.date;
  const Type_of_product_no = req.body.type_of_product;
  const payment_id= req.body.payment_id;
  console.log(req.body);
  sqlconnection.query(
    `insert into payment values(${PayCustomer_id},${(Payment_amount)},'${Payment_Date}',${Type_of_product_no},${payment_id})`
    );
    res.render("index");
});

module.exports = Router;