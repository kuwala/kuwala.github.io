function setup() {
  var height = 840;
  var width = 1366;
  cnvs = createCanvas(width,height);
  cnvs.parent("p5canvas");
}
var index = 0;
var texts = ["assholes, will be assholes","but wait","there might be more to","this than you think","dfgkjsdlkjahgkjag"]

function draw() {
  // Things I want to think about, are
  // obviously todo lists
  // text editos and many more computery bits...!
  // but wait jess being a hacker is not about computer technical
  // knowledge, nbout its more about being curious, inquizative,
  // and always trying to understand and exploit systems
  // find weak

  console.log("enough writing!!");
  // alert("too much");
  var x = random(width);
  var y = random(height);
  // if(y >200) {
  //   text("assholes, will be assholes", x, y);
  // }


}
function keyTyped() {
  var x =  width/2 - 180 + random(250);
  var y = height/2 - 125 + random(250);
  fill(random(8)*4);
  text(texts[index], x-(mouseX / 2), y+(mouseY / 2));
  if(key === 'x') {
    background(random(255),random(255),random(255));
    textSize(random(64) + 8);

    index += 1;
    if(index >= texts.length) {
      index = 0;
    }
  }
  if(key === ' ') {
    fill(random(255));
  }
}
function mousePressed() {
  var fs = fullscreen();
  fullscreen(!fs);
}
