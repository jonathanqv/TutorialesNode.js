var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/fotos");

var posibles_valores = ["M","F"];
var email_match= [/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,"Coloca un email válido"]

var user_schema = new Schema({
  name: String,
  username: {type: String, required:true, maxlength:[50,"Username too long"]},
  age: {type: Number, min:[5,"La edad no puede ser menor que 5"], max:[100,"La edad no puede ser mayor que 100"]},
  email:{type:String, required:"El correo es obligatorio", match: email_match},
  sex: {type:String, enum:{values: posibles_valores, message:"Opción no válida"}}
});

var User = mongoose.model("User", user_schema);
module.exports.User = User;
