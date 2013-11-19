var twoStepDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("twoStepDancer");
  this.isLeft = true;
};

twoStepDancer.prototype = Object.create(Dancer.prototype);
twoStepDancer.prototype.constructor = twoStepDancer;
twoStepDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if (this.isLeft) {
    this.left = this.left + 50;
    this.isLeft = false;
  } else {
    this.left = this.left - 50;
    this.isLeft = true;
  }
  this.setPosition(this.top, this.left);
};

var BreakDancer = function(top, left, timeBetweenSteps){
  twoStepDancer.apply(this, arguments);
  this.$node.addClass("breakdancer");
  this.$node.html('<img src="img/Breakdancer.png"></img>');
};
BreakDancer.prototype = Object.create(twoStepDancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;


var BananaDancer = function(top, left, timeBetweenSteps){
  twoStepDancer.apply(this, arguments);
  this.$node.addClass("bananaDancer");
  this.$node.html('<img src="img/banana.gif"></img>');
};
BananaDancer.prototype = Object.create(twoStepDancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;


