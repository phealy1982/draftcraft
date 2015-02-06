/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /happenings              ->  index
 * POST    /happenings              ->  create
 * GET     /happenings/:id          ->  show
 * PUT     /happenings/:id          ->  update
 * DELETE  /happenings/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Happening = require('./happening.model');

// Get list of happenings
exports.index = function(req, res) {
  Happening.find(function (err, happenings) {
    if(err) { return handleError(res, err); }
    return res.json(200, happenings);
  });
};

// Get a single happening
exports.show = function(req, res) {
  Happening.findById(req.params.id, function (err, happening) {
    if(err) { return handleError(res, err); }
    if(!happening) { return res.send(404); }
    return res.json(happening);
  });
};

// Creates a new happening in the DB.
exports.create = function(req, res) {
  Happening.create(req.body, function(err, happening) {
    if(err) { return handleError(res, err); }
    return res.json(201, happening);
  });
};

// Updates an existing happening in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Happening.findById(req.params.id, function (err, happening) {
    if (err) { return handleError(res, err); }
    if(!happening) { return res.send(404); }
    var updated = _.merge(happening, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, happening);
    });
  });
};

// Deletes a happening from the DB.
exports.destroy = function(req, res) {
  Happening.findById(req.params.id, function (err, happening) {
    if(err) { return handleError(res, err); }
    if(!happening) { return res.send(404); }
    happening.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}