//declaring variables
var ball

function setup() {
  createCanvas(400,400);
  
  //creating sprites (function setup only happens once)
  ball = createSprite(200, 200, 50, 50);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    ball.x += 8;
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.x -= 8;
  }

  //drawing sprites
  drawSprites()
}




