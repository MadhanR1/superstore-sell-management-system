const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("customer");
});

Router.post("/", (req, res) => {
  const Customer_id = req.body.customer_id;
  const Customer_name = req.body.name;
  const Customer_mno = req.body.phone_no;
  const Customer_age = req.body.age;
  const Item_id= req.body.item_id;
  console.log(req.body);
  sqlconnection.query(
    `insert into Customer_data values(${Customer_id},'${(Customer_name)}',${Customer_mno},${Customer_age},${Item_id})`
  );
  sqlconnection.query(
    `select Customer_id from Customer_data where Customer_name='${Customer_name}'`,
    (err, rows, fields) => {
      console.log(rows);
      res.render("payment", { data: Object.assign({}, ...rows) });
    }
  );
});

module.exports = Router;