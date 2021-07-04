const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var helecopter, helecopter_image;
var parcile,package, parcile_image;
var ground;

function preload(){
  helecopter_image=loadImage("helicopter.png");
  parcile_image=loadImage("package.png");
}

function setup() {
	createCanvas(600, 400);
	
	engine = Engine.create();
   world = engine.world;

   var ground_options = {isStatic : true}

   package=createSprite(70, 50, 20, 20);
   package.addImage("package",parcile_image)
   package.scale=0.05

   parcile=Bodies.rectangle(70, 50, 20, 20);
   World.add(world,parcile)
   Matter.Body.setStatic(parcile, true)

   helecopter=createSprite (70, 50, 20, 20);
   helecopter.addImage("helecopter", helecopter_image);
   helecopter.scale=0.4
   helecopter.velocityX=2
   helecopter.debug=true

   ground = Bodies.rectangle(0, 380, 1200, 10, ground_options);
   World.add(world,ground);
  
   //Engine.run(engine);

  
}


function draw() {
	background(0);
	Engine.update(engine);
   
	 //rect(parcile.position.x, parcile.position.y, 20, 20);

     package.y = parcile.position.y
     package.x = parcile.position.x
     
     parcile.position.x = helecopter.x
	 
     if (helecopter.x === 520) {
	   helecopter.velocityX=0
     }

     

	 rect(ground.position.x, ground.position.y, 1200, 10);
 
	 if (keyDown("space") || keyDown("down_arrow")){
	 Matter.Body.setStatic(parcile, false)
	 }
 
	 drawSprites();
 
}




