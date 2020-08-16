function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(100);
}

function draw() {
  // put drawing code here
  background(200);

  noStroke();
  ellipse(50, 50, 100);

  stroke('red');
  ellipse(200, 110, 100);

  
  ellipse(mouseX, mouseY, 100);
}