const express = require("express");

const app = express();

const port = 8082;

//simple get request
app.get("/", function (req, res) {

    res.end("This is Simple Get Request");
})

//request query

app.get("/one", function (req, res) {

   let firstName = req.query.firstName;
   let lastName = req.query.lastName;

   res.end(firstName +" "+lastName);
})

//working with get request header

app.get("/three",function (req, res) {

   let firstName=req.header("firstName");
   let lastName=req.header("lastName");

   res.end(firstName +" "+lastName);
})

//simple post request
app.post("/four", function (req, res) {

    res.send("This is Simple Post Request");
})

//post request with URL Query
app.post("/five", function (req, res) {

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(firstName +" "+ lastName);
})

//post request with Header Properties
app.post("/six", function (req, res) {

    let firstName = req.header("firstName");
    let lastName = req.header("lastName");

    res.send(firstName +" "+ lastName);
})

app.listen(port, function () {
    console.log("Server Run Successfully");
})