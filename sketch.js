function setup() {
 var canvas = createCanvas(windowWidth, 400);
  canvas.parent('header');
}

let myFont;
function preload() {
  myFont = loadFont('Orbitron-Regular.ttf');
}
shapeX = 300;
function draw() {
  background(74, 20, 140);
  strokeWeight(7);
  stroke(255, 0, 0);
  line(0, 200, windowWidth, 200);
  strokeWeight(7);
  noFill();
  quad(0, 200, 100, 0, 200, 200, 100, 400);
  quad(200, 200, 300, 0, 400, 200, 300, 400);
  strokeWeight(3);
  textSize(120);
  text('ason', 400, 190);
  text('hite', 400, 300);
  quad(shapeX-50, 200, shapeX, 150, shapeX+50, 200, shapeX, 250);
  shapeX = shapeX + 2;
  if (shapeX == windowWidth)
  {
   shapeX = 0; 
  }
}
