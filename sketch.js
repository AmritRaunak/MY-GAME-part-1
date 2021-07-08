var ground,groundImg;
var runner,runnerImg;
var edges,virus;
var enemy;
var gameState="PLAY";
var gameState="END";




function preload(){
    groundImg=loadImage("Road.png")
    runnerImg=loadAnimation("Runner-1.png","Runner-2.png")
    virus=loadImage("virus.png")
}

function setup(){
    createCanvas(600,660)
  
    ground=createSprite(300,300,600,660)
    ground.addImage(groundImg)

    runner=createSprite(300,610,20,20);
    runner.addAnimation("hello",runnerImg)
    runner.scale=0.08
    enemyGroup= new Group()
}


function draw() {


  if(gameState=="PLAY"){



 ground.velocityY=3;
  if(ground.y>500){
    ground.y=200
  }
  
runner.x=mouseX

if(enemyGroup.isTouching(runner)){

gameState="END"
}

enemies()
  }
  else{
  if(gameState=="END"){
    runner.velocityX=0
    enemyGroup.setVelocityYEach(0)
  }
}
  drawSprites();

}


function enemies(){
if(frameCount%100==0){

enemy=createSprite(random(0,660),random(200,300))
enemy.addImage(virus)
enemy.scale=0.1
enemy.velocityY=3
enemyGroup.add(enemy)
}
}