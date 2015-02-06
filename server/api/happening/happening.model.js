'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HappeningSchema = new Schema({
  who: String,
  when: String,
  what: String
});

module.exports = mongoose.model('Happening', HappeningSchema);