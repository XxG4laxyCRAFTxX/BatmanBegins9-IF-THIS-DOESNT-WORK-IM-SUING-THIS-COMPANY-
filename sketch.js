const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops1 = []
var maxDrops = 100;
var tFrame = 0;
var thunder

function preload(){
 thunder1 = loadImage("Images/1.png")
 thunder2 = loadImage("Images/2.png")   
 thunder3 = loadImage("Images/3.png")
 thunder4 = loadImage("Images/4.png")
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    umbrella1 = new umbrella(200, 500);
    if(frameCount %100 === 0){
        for(var i=0; i<maxDrops; i++){
            drops1.push(new drops (random(0, 400), random(0, 400)));
        }
    }
}

function draw(){
  background ("black");
  Engine.update(engine);
  var rand = Math.round(random(1,4));
  if(frameCount %100 === 0){
      tFrame = frameCount;
     thunder = createSprite(200, 10, 10, 10);
      switch(rand){ 
        case 1: thunder.addImage(thunder1);
        break; 
        case 2: thunder.addImage(thunder2); 
        break; 
        case 3: thunder.addImage(thunder3);
        break; 
        case 4: thunder.addImage(thunder4); 
        break; 
        default: 
        break; }
  }
  if(tFrame+10 === frameCount && thunder){
      thunder.destroy();
  }
umbrella1.display();
for(var i = 0; i<maxDrops; i++){
    drops1[i].display();
    drops1[i].updateY();
}
drawSprites()
}   

