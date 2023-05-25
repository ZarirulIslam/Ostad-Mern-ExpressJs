const express = require("express");
const app = express();

app.use(function (req, res, next) {

    console.log("I am Application Level Middleware");
    next();
})

app.get("/", function (req, res) {
    res.send("This is Home Page");
})

app.get("/contact", function (req, res) {
    res.send("This is Contact Page");
})

app.get("/about", function (req, res) {
    res.send("This is About Page");
})

app.listen(5000);
console.log("Server Run Succesfully");