 //GCSO simulation
var wall,thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 70, 50);
  
  thickness = random(22,83);
  
  fill(80,80,80);
  wall = createSprite(1500, 200, thickness, height/2);

   speed = random(223,321);
   weight = random(30,52);

   
   bullet.velocityX = speed;
}

function draw() {
  background("black");

if(hasCollided(bullet,wall))
{
bullet.velocityX = 0;
var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

if (damage>10)
{
    wall.shapeColor = color(255,0,0);
}

if (damage<10)
{
   wall.shapeColor = color(0,255,0);
}

}


  drawSprites();
  hasCollided(bullet,wall);
}

function hasCollided(Lbullet,Lwall)
{
    bulletRightEdge = bullet.x +bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
        return false;
}

// Thank You for looking at my code :)
