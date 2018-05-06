// i WANT TO MAKE A ROTATING CLOCK Face
// ALSO MAYBE ADD THE FLOYD-STEINBERG DITHERING TO IT
/*
What do I want to accomplish??
Somekind of watch type thing. With Johns face I believe.
*/
var img;
function setup() {
  createCanvas(400,400,P2D);
  // cnvs.parent("p5canvas");
  img = loadImage("../sketchs/edddy-clock/John-Head.png");
  angleMode(DEGREES);
}
var angle = 0.1;

function drawHour(h) {
  // rotate canvas some ratio of radians
  let deg = map(h, 0, 24, 0, 360);
  push();
  angle += 0.1;
  rotate(angle,0,0);
  //rect(0,0,100,10);
  // rect(10,10,10,10,10);
  pop();

}

function draw() {
  fill(0,0,0,10);
  rect(0,0,width,height);

  push();
  translate(200,200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

 // drawHour(sec);
  fill(255);
  let secondAngle = map(sec, 0, 60, 0, 360);
  let minuteAngle = map(min, 0, 60, 0, 360);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);


  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  fill(0,0,0,0);

  arc(0,0, 240,240, secondAngle - 16, secondAngle);
  push();
  rotate(secondAngle);
  line(0,0,120,0);
  image(img,120,0);
  pop();

  stroke(100,255,150);
  // arc(0,0, 200,200, 0, minuteAngle);
  push();
  rotate(minuteAngle);
  line(0,0,100,0);
  pop();

  stroke(100,150,255);
  // arc(0,0,160,160,0, hourAngle);
  push();
  rotate(hourAngle);
  line(0,0,80,0);
  pop();

  stroke(255);
  line(0,0,0,0);
  pop();// center and rotate

}
