function setup() {
  createCanvas(800, 500);
}

function draw() {
  //Ears 
  ellipse(60, 60, 16, 16);
  ellipse(140, 60, 16, 16);
  // Head
  fill(0, 0, 255);
  rect(60, 40, 80, 80);
  // Eyes
  fill(140, 140, 0);
  ellipse(80, 60, 20, 20);
  ellipse(120, 60, 20, 20);
  // Nose 
  ellipse(100, 80, 16, 16);
  // Mouth
  fill(180, 0, 0);
  rect(80, 96, 40, 16);
  // Body
  fill(0, 0, 255);
  rect(40, 136, 120, 120);
  // Neck
  stroke(0, 0, 255);
  fill(0, 0, 255);
  rect(92, 120, 16, 16);
  stroke(0);
  line(92, 120, 92, 132);
  line(108, 120, 108, 132);
  // Arm
  line(40, 136, 20, 280);
  line(160, 136, 180, 280);
  // Legs
  line(80, 256, 60, 360);
  line(120, 256, 140, 360);
  //Feet 
  line(32, 360, 60, 360);
  line(140, 360, 168, 360);
  
}