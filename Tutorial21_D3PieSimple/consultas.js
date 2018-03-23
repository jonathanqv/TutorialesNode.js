var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Csv');

var Data = mongoose.model("data_4",{});

module.exports.Dat = Data;
