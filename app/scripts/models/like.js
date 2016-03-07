var $ = require('jquery');
var Backbone = require('backbone');

var ButtonModel = Backbone.Model.extend({
  defaults: {
    likes: 0,
    tag: "Likes"
  },
  increase: function() {
    var likes = this.get("likes");
    this.set({"likes": (likes + 1)});
    return likes
  },
  tagSet: function(){
    var likes = this.get("likes");
    var tag = this.get("tag");

    if(likes == 1){
      if(tag == "Forks"){
        this.set({"tag": "Fork"});
        return this.get("tag");
    } else if(tag == "Likes"){
          this.set({"tag": "Like"});
          return this.get("tag");
        }
    }
    
    if(likes == 2){
      if(tag == "Fork"){
        this.set({"tag": "Forks"});
        return this.get("tag");
    } else if(tag == "Like"){
          this.set({"tag": "Likes"});
          return this.get("tag");
        }
    }
  }
});

module.exports = ButtonModel;
