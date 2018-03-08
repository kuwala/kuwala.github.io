function setup() {
  createCanvas(300,300);
}

function drawRects(var size) {
  var x = random(width);
  var y = random(height);
  var len = 100;
  rect(x,y,len);

}

function draw() {
  // background(random(64)+96);
  // background(255, 204, 0);
  drawRects(4);

}
