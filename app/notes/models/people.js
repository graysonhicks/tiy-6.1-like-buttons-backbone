var Backbone = require('backbone');
var Person = require('./person');

var PeopleCollection = Backbone.Collection.extend({
  model: Person
});

module.exports = PeopleCollection;
