
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  bounceOff(movingRect,fixedRect);
  

  
  drawSprites();
}
