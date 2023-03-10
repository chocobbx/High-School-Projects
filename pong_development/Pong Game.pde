boolean startGame = false;
float xPaddle = 10;
float yPaddle = 200;
float paddleMove;
float xball = random(100,200);
float yball = random(100,200);
float speedX = 5;
float speedY = 3;
float r = 15; //radius of the ball
int score = 0;

void setup() {
  size(500,400);
}

void draw() {
  background(0);
  //draw the ball
  ellipse(xball,yball,30,30);
  //draw the paddle
  rectMode(CENTER);
  rect(xPaddle,yPaddle,10,60);
  
 if(startGame) {
  //move paddle
  yPaddle += paddleMove;
  
  //keep the paddle inside the screen
  if(yPaddle <= 30){yPaddle = 30;}
  if(yPaddle >= 370){yPaddle = 369;}
  
  //move the ball
  xball = xball+speedX;
  yball = yball+speedY;
  
  //watch out for the wall and bounce
  if(xball>=500-15) {speedX = speedX*-1;}
  if(yball>=400-15) {speedY = speedY*-1;}
  if(yball<=0+15) {speedY = speedY*-1;}
  
  //paddle collision
  if((xball<=xPaddle+10+r)&&(yball>=yPaddle-30)&&(yball<=yPaddle+30)) {speedX *= -1; score+=1;}
  if(xball<=0+r) {
    startGame=false;
    xball = random(100,400);
    yball = random(100,400);
  }
}
//scoreboard
  textSize(30);
  text("Score: ",195,50);
  text(score,290,50);
  
//reset score
if(startGame == false) {score = 0;}
}
void keyPressed() {
  if(keyCode == 'W') {paddleMove = -10;}
  if(keyCode == 'S') {paddleMove = 10;}
  if(keyCode == ' ') {startGame = true;} //set the game to true when you hit ' '
}
void keyReleased() {
  if(keyCode == 'W') {paddleMove = 0;}
  if(keyCode == 'S') {paddleMove = 0;}
}
