function setup() {
  createCanvas(500, 500);

}
  var crosshair1X = 250;
  var crosshair1Y = 250;
var crosshair2X = 250;
var crosshair2Y = 250;
var crosshair3X = 250;
var crosshair3Y = 250;
var crosshair4X = 250;
var crosshair4Y = 250;
function draw() {
  background(255, 255, 255);
  noStroke();
  fill(255, 255, 255);
  ellipse (250, 250, 500);
  fill(255, 0, 0);
  ellipse (250, 250, 450);
  fill(255, 255, 255);
  ellipse (250, 250, 400);
  fill(255, 0, 0);
  ellipse (250, 250, 350);
  fill(255, 255, 255);
  ellipse (250, 250, 300);
  fill(255, 0, 0);
  ellipse (250, 250, 250);
  fill(255, 255, 255);
  ellipse (250, 250, 200);
  fill(255, 0, 0);
  ellipse (250, 250, 150);
    fill(255, 255, 255);
  ellipse (250, 250, 100);
    fill(255, 0, 0);
ellipse (250, 250, 50);
  stroke(255, 255, 0);
  fill(0, 0, 0);
  ellipse (crosshair1X, crosshair1Y, 50);
  ellipse (crosshair2X, crosshair2Y, 50);
  ellipse (crosshair3X, crosshair3Y, 50);
  ellipse (crosshair4X, crosshair4Y, 50);
  crosshair1X = crosshair1X+2;
  crosshair1Y = crosshair1Y+2;
  crosshair2X = crosshair2X-2;
  crosshair2Y = crosshair2Y-2;
  crosshair3X = crosshair3X-2;
  crosshair3Y = crosshair3Y+2;
  crosshair4X = crosshair4X+2;
  crosshair4Y = crosshair4Y-2;
 if (crosshair1X > 500 && crosshair1Y > 500)
 {
   crosshair1X = 0
   crosshair1Y = 0
 }
  if (crosshair2X < 0 && crosshair2Y < 0)
 {
   crosshair2X = 500
   crosshair2Y = 500
 }
  if (crosshair3X < 0 && crosshair3Y > 500)
 {
   crosshair3X = 500
   crosshair3Y = 0
 }
  if (crosshair4X > 500 && crosshair4Y < 0)
 {
   crosshair4X = 0
   crosshair4Y = 500
 }
}