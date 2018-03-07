var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var User = require("./user").User;

app.use("/public", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "jade");

app.get("/", function(req,res){
  User.find(function(err,users){
    if (err) return console.error(err);
    res.render("index", {usuarios : users});
  });
});

app.post("/", function(req,res){
  var user = new User({
    name : req.body.name,
    username: req.body.username,
    age: req.body.age,
    email: req.body.email,
    sex: req.body.sex
  });

  user.save().then(function(us){
    res.redirect("/");
  },function(err){
    console.log(String(err));
    res.send("No pudimos guardar la información");
  });
});

app.get("/delete", function(req,res){
  User.remove({username:req.query.username}).then(function(us){
    res.redirect("/");
  }, function(err){
    console.log(String(err));
    res.send("No pudimos eliminar el usuario");
  });
});


app.listen(8080);
