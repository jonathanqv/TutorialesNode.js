var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var Prov = require("./consultas").Prov;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req,res){

  Prov.find(function(err,datos){
    if(err) return console.error(err);
    //var x = JSON.stringify(datos[0])
    var x = datos[0].toObject()
    console.log(typeof(JSON.stringify(x.geometry.coordinates)));
    res.render("index", {dato:x, hola:"Hola Ian"});
  });

});

app.listen(8080);
