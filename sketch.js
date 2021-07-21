var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var brick1,brick2,brick3,brick4;
var brick1img,brick2img,brick3img,brick4img;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  //pathImg = loadImage("Road.png");
 
  boyImg = loadAnimation("img/OIP1.png","img/OIP15.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  //jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  brick1img = loadImage("brick 1.jpg");
  brick2img = loadImage("brick2.jpg");
  brick3img = loadImage("brick3.jpg");
  brick4img = loadImage("brick4.jpg");



}

function setup(){
  
  createCanvas(displayWidth,displayHeight);
// Moving background
//path=createSprite(200,200);
//path.addImage(pathImg);
//path.velocityY = 4;


//creating boy running
boy = createSprite(20,500,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=1.5;
  

brick1 = createSprite(250,580,20,20);
brick1.addImage(brick1img)
brick1.scale = 0.7
brick2 = createSprite(400,580,20,20);
brick2.addImage(brick2img)
brick2.scale = 0.4
brick3 = createSprite(700,580,20,20);
brick3.addImage(brick3img)
brick3.scale = 0.7
brick4 = createSprite(1100,580,20,20);
brick4.addImage(brick4img)
brick4.scale = 0.7

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
  background("green");
  if(gameState===PLAY){
 
  //boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  //if(path.y > 400 ){
   // path.y = height/2;
  //}
  
    createCash();
    createDiamonds();
    //createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }
    /*else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }*/
    else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        //jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        //jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(350, 1000),500, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityX = -3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(350, 1000),500, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityX = -3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(350, 1000),500, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityX= -3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(350, 1000),500, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityX = -3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}