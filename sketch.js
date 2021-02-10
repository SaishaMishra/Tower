const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground1, block1;
var world;
var slingshot1;
var engine;
var hexagon;
var hexImg

function preload(){
	hexImg= loadImage("polygon.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	block1=new block(300,235);
    block2=new block(350,235);
    block3=new block(400,235);
    block4=new block(450,235);
    block5=new block(500,235);
    block6=new block(550,235);
    block7=new block(600,235);
    block8=new block(330,185);
    block9=new block(380,185);
    block10=new block(430,185);
    block11=new block(480,185);
    block12=new block(530,185);
    block13=new block(580,185);
    block14=new block(345,135);
    block15=new block(395,135);
    block16=new block(445,135);
    block17=new block(495,135);
    block18=new block(545,135);

    ground2= new ground(450,270,400,20);
    
    hexagon= Bodies.circle(290,430,30);
    World.add(world,hexagon)

	slingshot1=new SlingShot(hexagon,{x:290,y:430});

	
	ground1=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
 
  image(hexImg, 290, 430, 20,20);

  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  slingshot1.display();

  
  ground2.display();
}

function mouseDragged(){
	Matter.Body.setPosition(hexagon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot1.fly();
}

