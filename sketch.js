var bullet,wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,20,60)
  bullet.velocityX=speed;
  bullet.shapeColor="white"
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="80,80,80"
  thickness=random(22,83)
}


function draw() {
  background(0);  

if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/22509;

if (damage>180){
  bullet.shapeColor=color(255,0,0);
}

if (damage>180 && damage<100){
  bullet.shapeColor=color(230,230,0);
}

if(damage<100){
  bullet.shapeColor=color(0,255,0);
}

}

function hasCollided(bullet,wall){
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
return true
}
return false
}




  drawSprites();
}