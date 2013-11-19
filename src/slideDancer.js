var SlideDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("SlideDancer");
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;
SlideDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if ( this.left > $("body").width() ){
    this.left = 0-this.$node.width();
  } else {
    this.left = this.left + 25;
  }
  this.setPosition(this.top, this.left);
};

var SkateboardDancer = function(top, left, timeBetweenSteps){
  SlideDancer.apply(this, arguments);
  this.$node.addClass("skateboardDancer");
  this.$node.html('<img src="img/skateboarder.png"></img>');
};
SkateboardDancer.prototype = Object.create(SlideDancer.prototype);
SkateboardDancer.prototype.constructor = SkateboardDancer;

