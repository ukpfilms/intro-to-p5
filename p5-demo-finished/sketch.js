function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(100);
  ellipse(50,50,80,80);
}

function draw() {
  // put drawing code here
  background(100);
  ellipse(50,50,80,80);
  press();
}

function press(){
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}