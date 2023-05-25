const express = require("express");
const app = express();
const port = 8081;

//download response
app.get("/one", function (req,res) {

    res.download("./Upload/download.jpg");
})

//response redirect
app.get("/bang", function (req,res) {

    res.redirect("http://localhost:8081/ind");
})
app.get("/ind", function (req,res) {

    res.send("This is India");
})

//response header

app.get("/header", function (req,res) {

    res.append("name","Zarirul");
    res.append("city","Dhaka");
    res.append("id","191-15-12497");
    //res.send("Hello World");
    res.status(201).end("Hello World");
})

//response set cookies

app.get("/cookie", function (req,res) {

    res.cookie("name","Zarirul");
    res.cookie("city","Dhaka");
    res.cookie("id","191-15-12497");
    //res.send("Hello World");
    res.status(201).end("Hello World");
})

//response clear cookies

app.get("/cooki", function (req,res) {

    res.clearCookie("name");
    res.clearCookie("city");
    res.clearCookie("id");
    //res.send("Hello World");
    res.status(201).end("Hello World");
})

app.listen(port, function () {
    console.log("Server Run Successfully");
})