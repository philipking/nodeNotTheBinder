var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// User Schema
var CaseSchema = mongoose.Schema({
  firstname: {
    type: String, required: true
  },
  lastname: {
    type: String, required: true
  },
  dob: {
    type: Date, required: true
  },
});

var Case = module.exports = mongoose.model('Case', CaseSchema);

module.exports.createCase = function(newCase, callback) {
  newCase.save(callback);
};