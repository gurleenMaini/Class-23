const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, body1;
var ground;
var box1;

function setup() {
  createCanvas(1200,400);
  
engine= Engine.create();
world= engine.world;
var groundOption= {
  isStatic: true
}
ground= Bodies.rectangle(600,390,1200,20, groundOption);
World.add(world, ground);

var bodyOption= {
restitution: 1.0
}
body1= Bodies.rectangle(100,300,40,40, bodyOption);
World.add(world, body1);
console.log(body1);
console.log(body1.type);
console.log(body1.position.x);
console.log(body1.position.y);

box1= new Box();
}

function draw() {
  background("yellow");

  Engine.update(engine);
    //rect(300,200,40,40);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1200,20);
  rectMode(CENTER);
  rect(body1.position.x, body1.position.y,40,40);

  box1.display();

  drawSprites();
}