const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground, ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var groundOptions = {
    isStatic: true
  }
  ground = Bodies.rectangle(100,350,400,50,groundOptions);
  var ballOptions = {
    restitution: 0.5
  }
  ball = Bodies.circle(100,20,25,ballOptions);
  World.add(world,ground);
  World.add(world,ball);  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25)
}