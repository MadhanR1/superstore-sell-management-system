const mysql = require("mysql2");
const sqlconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Madhanr@2003",
  database: "superstore",
  multipleStatements: true,
});

sqlconnection.connect((err) => {
  if (!err) {
    console.log("Data base has been connected to the superstore server");
  } else {
    console.log("Unable to connect the database to the superstore server");
  }
});

module.exports = sqlconnection;