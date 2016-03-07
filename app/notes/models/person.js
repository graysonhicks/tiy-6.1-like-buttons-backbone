var Backbone = require('backbone');

var PersonModel = Backbone.Model.extend({
  initialize: function(){
    console.log('New person created.');
  },
  makeSandwich: function(){
    return 'ham and cheese';
  },
  sayName: function(){
    console.log(this.get('firstName') + " " + this.get('lastName'));
  }
});

var BakerPersonModel = PersonModel.extend({});

module.exports = PersonModel;
