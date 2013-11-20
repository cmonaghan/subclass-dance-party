var SlideDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("SlideDancer");
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;
SlideDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
};

var SkateboardDancer = function(top, left, timeBetweenSteps){
  SlideDancer.apply(this, arguments);
  this.$node.addClass("skateboardDancer");
  this.$node.html('<img src="img/skateboarder.png"></img>');
};
SkateboardDancer.prototype = Object.create(SlideDancer.prototype);
SkateboardDancer.prototype.constructor = SkateboardDancer;
SkateboardDancer.prototype.lineUp = function (){
  var middle = $("body").width()/2;
  this.$node.css('left', middle+'px');
}

