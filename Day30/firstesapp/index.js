const express=require("express");

const app=express();

const port = 8000;


//Simple String Response

app.get("/one", function (req, res) {
    //res.send("Hello Home");
    res.end("Hello Home, This is Simple String Response");
})

app.get("/two", function (req, res) {
    //res.send("Hello About");
    res.end("Hello About, This is Simple String Response");
})

app.post("/three", function (req, res) {
   // res.send("Hello Contact");
    res.end("Hello Contact, This is Simple String Response");
})


app.get("/four", function(req, res){

    res.status(401).end("Unauthorized");
})

//Response Status Code
app.get("/four", function(req, res){

    res.status(401).end("Unauthorized");
})

//JSON response
app.get("/five",function (req, res) {
    let myJASONArray = [{
        name: "Zarir",
        city:"Dhaka",
        Occupation:"Student"
    },
    {
        name: "Sakib",
        city:"Dhaka",
        Occupation:"Student"
    },
    {
        name: "Imrul",
        city:"Dhaka",
        Occupation:"Student"
    },
   ]

    res.json(myJASONArray);
})
app.listen(port, function () {
    console.log("Server Run Successfully");
})