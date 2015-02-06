'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name: String,
  brewery: String,
  description: String
});

module.exports = mongoose.model('Beer', BeerSchema);