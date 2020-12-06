const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var plinko=[];
var division=[];
var partical=[];

var divisionHeight = 300;

var ground

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.World;

  ground = new Ground(400,380,800,20);

  for(k = 0;k<=width;k=k+80){
    division.push(new Division(i, height-divisionHeight/2,10,divisionHeight));
}
for(j=40;j<=width;j=j+50){
  plinko.push(new Plinko(j,75));
}
for(j = 15;j<=width-10; j=j+50){
  plinko.push(new Plinko(j,175));
}
}
Engine.run(engine);

function draw() {
  rectMode(CENTER);
 
  background(255,255,255);  

  for(var j = 0;j<partical.lenght;j++){
    partical[j].display();
  }
 for(var k=0;k<division.lenght; k++){
   division[k].display();
 }
 for(var i=0;i<plinko.lenght; i++){
  plinko[i].display();
}

  drawSprites();
}