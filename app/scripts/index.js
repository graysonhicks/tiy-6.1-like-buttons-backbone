var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');
var ButtonModel = require('./models/like');
var ButtonCollection = require('./models/buttons');

$(document).ready(function(){
  doTemplate('.main-content', '#book-button-template', bookButton.toJSON());
  appendTemplate('.main-content', '#gram-button-template', gramButton.toJSON());
  appendTemplate('.main-content', '#git-button-template', gitButton.toJSON());
  $('.book-like-button').addClass('btn-secondary');
});

//MODELS

var htmlButton = $('.book-like-button');

var bookButton = new ButtonModel({});
var gramButton = new ButtonModel({});
var gitButton = new ButtonModel({
  tag: "Forks"
});

// EVENT HANDLERS

$('.main-content').on('click', '.book-like-button', function(evt){
  bookButton.increase();
  bookButton.tagSet();
  $('.book-like-button').removeClass('btn-secondary');
  doTemplate('.book-like-button', '#book-button-update', bookButton.toJSON());
  activeButton();
});

$('.main-content').on('click', '.gram-like-button', function(evt){
  gramButton.increase();
  gramButton.tagSet();
  doTemplate('.gram-like-button', '#gram-button-update', gramButton.toJSON());
  $('.gram-like-button').addClass('gram-liked');
  $('.gram-heart').removeClass('fa-heart-o');
  $('.gram-heart').addClass('fa-heart');
});

$('.main-content').on('click', '.git-like-button', function(evt){
  gitButton.increase();
  gitButton.tagSet();
  doTemplate('.git-like-button', '#git-button-update', gitButton.toJSON());
  $('.git-like-button').addClass('btn-success');
});

//FUNCTIONS

function activeButton(){
  $('.book-like-button').addClass('btn-primary');
}

function doTemplate(target, source, context){ // homemade handlebars process function
  var sourceTemplate = $(source).html();
  var template = handlebars.compile(sourceTemplate);
  $(target).html(template(context));
}

function appendTemplate(target, source, context){ // homemade handlebars process function
  var sourceTemplate = $(source).html();
  var template = handlebars.compile(sourceTemplate);
  $(target).append(template(context));
}
