var $ = require('jquery');
var handlebars = require('handlebars');
var Person = require('./models/person');
var PeopleCollection = require('./models/people');


$(document).ready(function(){
// console.log(jimmy);
// console.log(jimmy.get("firstName"));
// console.log(jimmy.get("lastName"));
// console.log(jimmy.get("age"));
// console.log(jimmy.set({"age": 65}));
// console.log(jimmy.get("age"));
// console.log(jimmy.makeSandwich());
// console.log(jimmy.sayName());
//
// console.log(wendy.sayName());

function doTemplate(target, source, context){ // homemade handlebars process function
  var sourceTemplate = $(source).html();
  var template = handlebars.compile(sourceTemplate);
  $(target).append(template(context));
}


var people = new PeopleCollection([
  {age: 40, firstName:'Wendy', lastName:'Thomas'},
  {age: 42, firstName: 'Jimmy', lastName: 'John'},
  {age: 27, firstName:'Grayson', lastName:'Hicks'},
  {age: 62, firstName: 'Donald', lastName: 'Trump'}
]);

people.add({age: 27, firstName:'Gabrielle', lastName:'Hicks'});
console.log(people);
console.log(people.models);


doTemplate('.main-content', '#people-template', {'people': people.models});

});
