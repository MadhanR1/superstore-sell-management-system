const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("employee");
});

Router.post("/", (req, res) => {
  const Emp_Name = req.body.name;
  const Emp_id = req.body.emp_id;
  const Emp_salary = req.body.salary;
  const Emp_age = req.body.age;
  const Emp_city= req.body.city;
  console.log(req.body);
  sqlconnection.query(
    `insert into Employee values(${Emp_id},'${Emp_Name}',${Emp_salary},'${Emp_age}','${Emp_city}')`
  );
  sqlconnection.query(
    `select Emp_id from Employee where Emp_Name='${Emp_Name}'`,
    (err, rows, fields) => {
      console.log(rows);
      res.render("store", { data: Object.assign({}, ...rows) });
    }
  );
});

module.exports = Router;