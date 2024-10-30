const express = require("express");
const app = express();
const sqlconnection = require("./connection/sql_connect");
const bookingRoute = require("./routes/booking");
const homeRoute = require("./routes/home");
const paymentRoute = require("./routes/payment");
const detailsRoute = require("./routes/details");
const loginRoute = require("./routes/login");
const adminRoute = require("./routes/admin");
const path=require("path")

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use("/store", bookingRoute);
app.use("/", homeRoute);
app.use("/payment", paymentRoute);
app.use("/product", detailsRoute);
app.use("/employee", loginRoute);
app.use("/customer", adminRoute);
app.listen(4000, "127.0.0.1", () => {
  console.log("the superstore has been started");
});

sqlconnection.connect();