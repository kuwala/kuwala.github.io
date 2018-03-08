var sunny = function (sketch) {

  sketch.setup = function() {
    sketch.createCanvas(300,300);
  };
  sketch.draw = function() {
    // var xx = random(300);
    // var yy = random(300);
    background(random(255));
    // rect(xx,yy, 30);
    // sketch.rect(10,10,30);
  };
};

var myp5 = new p5(sunny, 'p5sketch');
