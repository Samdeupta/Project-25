const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rainDrops=[];
var engine, world;

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  for (var i = 0; i < 1000; i++) {
    rainDrops[i] = new CloseRain(20, -100, 30, 20);
  }

}

function draw() {
  background("black");
  Engine.update(engine);

    rainX = random(30, 770);
    rainY = random(-500, -50);

  for (var i = 0; i < rainDrops.length; i++) {
        rainDrops[i].display();
        rainDrops[i].fall();

  }
}