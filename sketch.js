var bullet;
var wall;
var weight;
var speed;
var thickness;
var damage;
function setup() {
  createCanvas(800,400);
 bullet = createSprite(100, 200,50,10);
 wall = createSprite(700,200,thickness,400);
}

function draw() {
  background(0); 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet.velocityX=speed;

  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)

  if(damage>10){
    wall.shapeColor="red";
  }
 
  if(damage<=10){
    wall.shapeColor="green";
  }

  collide(bullet,wall);

  

  drawSprites();
}

function collide(obj1,obj2){
  if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2&&obj2.x-obj1.x<=obj1.width/2+obj2.width/2&&
    obj1.y-obj2.y<=obj1.height/2+obj2.height/2&&obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
     obj1.velocityX=0;
    }
    
}