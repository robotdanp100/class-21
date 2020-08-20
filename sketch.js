var object_1;
var object_2;
function setup() {
  createCanvas(2500,1200);
  object_1 =createSprite(600, 400, 50, 80);
  object_2 =createSprite(400, 200, 80, 30);
  object_3 =createSprite(10, 100, 50, 50);
  object_4 =createSprite(500, 100, 50, 50);
  object_5 =createSprite(700, 200, 50, 50);
  object_6 =createSprite(700, 500, 50, 50);
  
  object_1.shapeColor = "green";
  object_2.shapeColor = "green";
  object_3.shapeColor = "blue";
  object_4.shapeColor = "yellow";
  object_5.shapeColor = "red";
  object_6.shapeColor = "purple";

  object_3.velocityX = 6;
  object_4.velocityX = -6;
  object_5.velocityY = 6;
  object_6.velocityY = -6;

  object_1.debug = true;
  object_2.debug = true;
}

function draw() {
  background(0,0,0);
  object_2.x = World.mouseX;
  object_2.y = World.mouseY;
  isTouching();
  bounce();
  drawSprites();
}

