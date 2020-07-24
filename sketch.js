var fixedRect, movingRect;
var gameObject1, gameObject2;
var speed,weight

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(1000,190, 50, 80);
  fixedRect.shapeColor = "black";
  fixedRect.debug = true;
  movingRect = createSprite(35, 190,50,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  speed  = random(2,200);
  weight = random(400,1500);

  movingRect.velocityX = speed;
  
  
}

function draw() {
  background("white");  

  

 if( movingRect.isTouching(fixedRect)){
   fixedRect.weight = random(400,1500);
   movingRect.velocityX = 0;
 } 

 

if(movingRect.velocityX >= 80){
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

if(movingRect.velocityX >= 81){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";

}

if(movingRect.velocityX >= 180){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}


 
  drawSprites();
}


