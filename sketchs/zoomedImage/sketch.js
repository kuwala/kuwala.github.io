/* Goal of this is to test efficieny in drawing squares onto a background
*/

function setup() {
  cnvs = createCanvas(400,400);
  cnvs.parent = "p5canvas";
  display = createGraphics(100,100);


}

function draw() {
  for (var i = 0; i < 10000; i++) {
    var rows = 100;
    var cols = 100;
    var x = i % cols;
    var y = floor(i / rows);
    display.colorMode(HSB);
    // var col = color(i%255,255,255);
    display.stroke(i/mouseX%255,mouseY,255);
    display.point(x,y);
  }
  display.fill(random(255),random(255),random(255));
  display.point(10,10);
  display.rect(20,20,20,20);
  // stretch the display from 0, 0, to 400,400
  image(display, 0,0,400,400);

}
