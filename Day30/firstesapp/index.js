const express=require("express");

const app=express();

const port = 8000;

app.get("/", function (req, res) {
    res.send("Hello Express Js");
})

app.listen(port, function () {
    console.log("Server Run Successfully");
})