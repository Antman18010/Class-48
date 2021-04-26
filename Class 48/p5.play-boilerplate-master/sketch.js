const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var policeCar1,policeCar2;
var thiefCar1;
var bank1;

function setup() {
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
  
policeCar1 = new policeCar(50, 50, 200, 5);
policeCar2 = new policeCar(350, 350, 200, 5);
thiefCar1 = new thiefCar(20, 380, 20, 20);
bank1 = new bank(350, 50, 20, 20);


}

function draw() {
  background(blue);  

  //press space to play
  
  createEdgeSprites();
  
  
  if (keyDown("UP_ARROW")) {
    thiefCar.velocityX = 0;
    thiefCar.velocityY = -3;
  }
  
if (keyDown("DOWN_ARROW")) {
  thiefCar.velocityX = 0;
  thiefCar.velocityY = 3;
}

if (keyDown("RIGHT_ARROW")) {
  thiefCar.velocityX = 3;
  thiefCar.velocityY = 0;
}

if (keyDown("LEFT_ARROW")) {
    thiefCar.velocityX = -3;
    thiefCar.velocityY = 0;
  }

  textSize(24);
  text("press space ", 140, 190);
  
  if (keyDown("space")) {
      policeCar1.velocityX = 0;
      policeCar1.velocityY = 3;
    }
    
  if (keyDown("space")) {
      policeCar2.velocityX = 0;
      policeCar2.velocityY = -3;
    }
    
  if (policeCar1.isTouching(thiefCar)) {
    textSize(24);
    text("thief is caught", 120, 200);
    policeCar1.setVelocity(0, 0);
    thiefCar.setVelocity(0, 0);
  }
  
    if (policeCar2.isTouching(thiefCar)) {
    textSize(24);
    text("thief is caught", 120, 200);
    policeCar2.setVelocity(0, 0);
    thiefCar.setVelocity(0, 0);
  }

  if (thiefCar.isTouching(bank)){
  
      thiefCar.destroy();
      policeCar1.destroy();
      policeCar2.destroy();
      background("red");
      textSize(24);
      text("Level 2", 130, 200);
    }
    
    thiefCar.bounceOff(edges);
    policeCar1.bounceOff(edges);
    policeCar2.bounceOff(edges);
   

policeCar1.display();
policeCar2.display();
thiefCar1.display();
bank1.display();


  drawSprites();
}