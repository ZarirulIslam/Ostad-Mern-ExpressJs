const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("This is Home Page");
})

app.get("/contact", function (req, res) {
    res.send("This is Contact Page");
})

app.use('/about', function (req, res, next) {

    console.log("I am Route Level Middleware");
    next();
})

app.get("/about", function (req, res) {
    res.send("This is About Page");
})

app.listen(5001);
console.log("Server Run Succesfully");