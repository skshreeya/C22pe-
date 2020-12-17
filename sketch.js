const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;

function setup() {
 var options ={

   isStatic:true

 }
 var balloptions={

  restitution :0.9

}
  
  createCanvas(400,400);
  engine = Engine.create();

  world=engine.world;

  ground = Bodies.rectangle(200,390,200,20,options);
  ball = Bodies.circle(200,100,20 , balloptions);
  World.add(world,ball);
  World.add(world,ground);
}

function draw() {
  background(0); 
   Engine.update(engine);
  rectMode(CENTER);
 rect (ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}