var express = require("express");
var app = express();
var Data = require("./consultas").Dat
var bodyParser = require("body-parser")
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "jade");

app.get("/", function(req,res){
  Data.find(function(err,datos){
    if(err) return console.error(err);
    res.render("index", {data:datos});
  })
});

app.listen(8080);
