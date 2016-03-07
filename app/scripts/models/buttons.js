var Backbone = require('backbone');
var ButtonModel = require('./like');

var ButtonCollection = Backbone.Collection.extend({
  model: ButtonModel
});

module.exports = ButtonCollection;
