void setup() {
  size(400,400);
  smooth();
}
void draw() {
  background(255);
  ellipseMode(CENTER);
  rectMode(CENTER);
  stroke(192,192,192);
  strokeWeight(4);
  fill(245,224,80);
  ellipse(mouseX,mouseY,100,100);
  
  //eyes
  fill(192,192,192);
  stroke(245,224,80);
  strokeWeight(1);
  ellipse(mouseX-17,mouseY-10,35,35);
  ellipse(mouseX+17,mouseY-10,35,35);
  
  //eyeball
  fill(255);
  ellipse(mouseX-17,mouseY-10,25,25);
  ellipse(mouseX+17,mouseY-10,25,25);
  
  //iris
  fill(150,75,0);
  stroke(0);
  ellipse(mouseX-13,mouseY-8,10,10);
  ellipse(mouseX+13,mouseY-8,10,10);
  
  fill(0);
  ellipse(mouseX-12.5,mouseY-8,3,3);
  ellipse(mouseX+12.5,mouseY-8,3,3);
  
  //headband
  rect(mouseX-40,mouseY-10,15,5);
  rect(mouseX,mouseY-10,1,5);
  rect(mouseX+40,mouseY-10,15,5);
  
  //mouth
  arc(mouseX,mouseY+20,40,20,radians(0),radians(180));
}
