console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const fs = require("fs");

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");



let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    }else{
        user = JSON.parse(data)
    }
});

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

// app.get("/greeting", function(req, res){ //http://localhost:3000/greeting
//     // res.end("Hello World Salom Otabek");
//     res.end(`<h1 style="color: red">Hello Owen</h1>`);
// });
// app.get("/gift", function(req, res){ //http://localhost:3000/gift
//     res.end(`<h1 style="color: green">Siz gift pagesizdasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
    console.log("user entered / create-item")
    console.log(req.body);
    // res.end("success");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
       console.log(data.ops);
       res.json(data.ops [0]);
    });
});

app.post("/delete-item", (req,res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}),
    function (err,data) {
        res.json({state:"success"});
    }
} );

app.get("/", function(req, res) {
    console.log("user entered /")
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        }else {
            // console.log(data)
            res.render("reja", { items: data });
        }
    });
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
})

// express va ness eng  mashxur backend framework in Node.js

// Frontendni 2xil usulda amalga oshiriladi: 1. Traditional - ejs framework foydalangan xolda BSSR - Backend Server Side Rendering - backendni ichida frontendi qurish 2. Single Page

module.exports = app;