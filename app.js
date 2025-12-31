console.log(`Running Web Server`);
const express = require("express");
const app = express();

const fs =(require("fs"));  

// Call MongoDb
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err){
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
       }
    });


// 1 Intro codes
app.use(express.static("public"));  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    

// 2: Session

// 3:VIews codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing codes
// app.get("/hello", (req, res) =>{
//     res.end("<h1>Hello World:</h1>");
// });

// app.get("/gifts", (req, res) =>{
//     res.end("<h1>This page is for gifts:</h1>");
// });
app.post("/create-item", function (req,res)  {
    console.log(req.body);
    res.json({test:"success"});
});

app.get(`/author`, (req, res) =>{
    res.render("author", {user:user});
})

app.get("/", function (req,res){
    res.render("reja");
});


module.exports = app;



