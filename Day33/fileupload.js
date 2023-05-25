const express = require("express");
const multer = require("multer");

const app = express();
const port = 8085;

const storage = multer.diskStorage({
    destination: function (req,file,callBack) {
        callBack(null,"./uploads");
    },
    filename: function (req,file,callBack) {
        callBack(null,file.originalname);
    }
})

const upload=multer({storage:storage}).single("myfile");

app.post("/",function (req, res) {

    upload(req,res,function (error) {
        if(error){
            res.send("File Upload Failed");
        }
        else{
            res.end("File Upload Success");
        }
    })
})

app.listen(port, function () {
    console.log("Server Run Successfully");
})