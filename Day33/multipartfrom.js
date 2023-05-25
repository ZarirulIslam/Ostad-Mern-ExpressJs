const express = require("express");
const multer = require("multer");

const app = express();
const multerr = multer();

const port = 8084;

app.use(multerr.array());
app.use(express.static("public"));

app.post("/", function (req, res) {

    let JSONData = req.body;
    res.send(JSON.stringify(JSONData));
})


app.listen(port,function () {
    console.log("Server Run Successfully");
})