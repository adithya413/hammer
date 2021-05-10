const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,500,1200,20)
    hammer = new Hammer(10,100);
rubber = new Rubber(200,120,50,50);
 iron = new Iron(400,120,90,90);
 stone = new Stone(600,120,70,70);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
rubber.display();
iron.display();
stone.display();
    
 
}