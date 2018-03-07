var express = require("express");
var app = express();
var bodyParser = require("body-parser")

var Provi = require("./consultas").Prov;
var River = require("./consultas").Riv;

app.use("/public", express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req,res){

  Provi.find(function(err,datos){
    if(err) return console.error(err);
    River.find(function(err,datosriv){
      if(err) return console.error(err);
      res.render("index", {riv:datosriv, hola:"Hola Ian", prov:datos});
      console.log(datosriv[0]);
    });

    //res.render("index", {hola:"Hola Ian", prov:datos});
  });


/*
  River.find(function(err,datosriv){
    if(err) return console.error(err);
    res.render("index", {riv:datosriv, hola:"Hola Ian", prov:datos});
    console.log(datosriv[0]);
  });
/*
  Riv.find(function(err,datos2){
    if(err) return console.error(err);
    res.render("index", {riv:datos2});
  });
*/
});

app.listen(8080);
