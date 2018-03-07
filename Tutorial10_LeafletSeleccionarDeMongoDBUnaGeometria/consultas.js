var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Peru');

var Provi = mongoose.model("provincias",{});
module.exports.Prov = Provi;
