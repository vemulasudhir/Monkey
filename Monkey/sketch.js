//Global Variables
var jungle,jungle_image
var monkey, monkey_image
var banana, bananaimage
var ground, ground_image,invisible_ground
var stone,stone_image
var obstacleGroup, bananaGroup
var score = 0
var play = 1 
var end = 0
var gameState = play

function preload() {
monkey_image = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",) 
  
stone_image = loadImage("stone.png")  
  
jungle_image = loadImage("jungle.jpg")
 
bananaimage = loadImage("Banana.png") 
  
  
ground_image = loadImage("ground.jpg")  



}
function setup() {
    
  jungle= createSprite(200,200,50,50)
  jungle.addImage("jungle_image",jungle_image)
  
  
  createCanvas(500, 400);
 
  
  monkey = createSprite(70,350,30,30)
  monkey.addAnimation("monkey_image",monkey_image)
  monkey.scale = .15 

  invisible_ground = createSprite(250,400,500,20)
  invisible_ground.visible = false
  
  
  bananaGroup = new Group()
  obstacleGroup= new Group()
}
 
function draw() {
  background(220);

  
  if(gameState === play){
    
    obstacleGroup.debug = "circle"
  
   if(keyDown("space")&& monkey.y > 340){
 monkey.velocityY = -17
 
  }
 monkey.velocityY = monkey.velocityY + 0.8 
  
  monkey.collide(invisible_ground)
  
    jungle.velocityX = -5
if(jungle.x < 0){
  jungle.x = jungle .width/2
}  
    
  if(bananaGroup.isTouching(monkey)){
  score = score + 2
  bananaGroup.destroyEach()
  }  
    
    if(obstaclesGroup.isTouching(monkey)){
    player.scale = .2
    }
    
      switch(score){
        case 10: monkey.scale = 0.12;
          break;
        case 20: monkey.scale = 0.12;
          break;
        case 30: monkey.scale = 0.12;
          break;          
        case 40: monkey.scale = 0.12;
          break;
          default:break;  
  }
  spawnObstacles()
  spawnBanana()
    
   if(obstacleGroup.isTouching(monkey)) {
   gameState = end
   
   }
    
  }  
 else if(gameState === end) {  
   jungle.velocityX = 0
   bananaGroup.setVelocityXEach(0)
   obstacleGroup.setVelocityXEach(0)
   obstacleGroup.setLifetimeEach(-1)
   bananaGroup.setLifetimeEach = (-1)
   monkey.velocityY = 0
 }

  drawSprites()
  fill("white")
  textSize(20)
  text("score:"+score,400,50) 
   
}

function spawnObstacles() {
  if(frameCount % 200 === 0) {
    var stone = createSprite(400,370,10,40);
    stone.addImage("stone_image",stone_image)
    stone.velocityX = -6;
    stone.lifetime = 100
    stone.scale = 0.15
    obstacleGroup.add(stone)
  }
}

function spawnBanana(){
  if(frameCount % 150 === 0){
   var banana = createSprite(400,random(120,200),20,20) 
   banana.scale = .075
   banana.addImage("bananaimage",bananaimage) 
   banana.velocityX = -5  
   banana.lifetime=100   
    bananaGroup.add(banana)

  } 
}


