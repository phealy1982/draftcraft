'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BarSchema = new Schema({
  name: String,
  location: String,
  description: String
});

module.exports = mongoose.model('Bar', BarSchema);