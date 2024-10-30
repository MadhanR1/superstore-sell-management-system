const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("store");
});

Router.post("/", (req, res) => {
  const Store_no= req.body.store_id;
  const Store_Name = req.body.Sname;
  const Store_place = req.body.splace;
  const Store_manager = req.body.smanager;
  const Store_Estore_id= req.body.Estore_id;
  console.log(req.body);
  sqlconnection.query(
    `insert into Store values(${Store_no},'${Store_Name}','${Store_place}','${Store_manager}',${Store_Estore_id})`
  );
  sqlconnection.query(
    `select Store_no from Store where Store_Name='${Store_Name}'`,
    (err, rows, fields) => {
      console.log(rows);
      res.render("product", { data: Object.assign({}, ...rows) });
    }
  );
});

module.exports = Router;
