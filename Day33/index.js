const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 8083;

app.use(bodyParser.json());

// post application json

app.post("/", function (req, res) {

   let JSONData = req.body;

   //let JSONString = JSON.stringify(JSONData);

    let name = JSONData["name"];
    let city = JSONData["city"];

   //res.send(JSONString);

    res.send(name+" "+city);
})

// working with multipart from data




app.listen(port, function () {
    console.log("Server Run Successfully");
})