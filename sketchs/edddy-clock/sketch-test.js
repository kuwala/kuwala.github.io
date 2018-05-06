function setup() {
  //size(400,400);
  createCanvas(1600,6400);

}
var a = 0.0;
var b = 0.0;
var xx = 0;
var yy = 0;
var r = 20;

function draw() {
  a += 0.1;
  xx = sin(b) * r;
  yy = cos(b) * r;
  xxx = sin(a) * r * r;
  yyy = cos(a) * r * r;
 ellipse(20+xx+xxx+mouseX,20+yy+yyy+mouseY,20,20);
}

function mousePressed() {
  b += 0.3;

}
