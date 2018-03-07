var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Peru');

var Provi = mongoose.model("provincias84",{});
var River = mongoose.model("rios",{});

module.exports.Prov = Provi;
module.exports.Riv = River;
