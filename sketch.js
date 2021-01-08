

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18;
var ball;
var destroy;
function preload() {
destroy=loadSound("sounds/destroy.mp3");
    //  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    ball=new Ball(200,200,30);

    b1=new Box(500,570,50,50);
    b2=new Box(500,530,50,50);
    b3=new Box(500,480,50,50);
    b4=new Box(500,430,50,50);
    b5=new Box(500,380,50,50);
    b6=new Box(500,330,50,50);
    b7=new Box(500,280,50,50);
    b8=new Box(500,230,50,50);
    b9=new Box(500,180,50,50);
    b10=new Box(500,130,50,50);
    b11 = new Box(600,570,60,60);
    b12 = new Box(600,530,60,60);
    b13 = new Box(600,480,60,60);
    b14 = new Box(600,430,60,60);
    b15 = new Box(600,380,60,60);
    b16 = new Box(600,330,60,60);
    b17 = new Box(600,280,60,60);
    b18 = new Box(600,230,60,60);


    ground = new Ground(600,height,1200,20);
    

    
    slingshot = new SlingShot(ball.body,{x:300, y:100});
}

function draw(){
    background("yellow");
    Engine.update(engine);
   
    ground.display();
    stroke("white");
    strokeWeight(5);
    fill("black");
    b1.display();
    fill("black");
    b2.display();
    fill("black");
    b3.display();
    fill("black");
    b4.display();
    fill("black");
    b5.display();
    fill("black");
    b6.display();
    fill("black");
    b7.display();
    fill("black");
    b8.display();
    fill("black");
    b9.display();
    fill("black");
    b10.display();

    stroke("orange");
    strokeWeight(4)
    fill("red");
    b11.display();
    fill("red");
    b12.display();
    fill("red");
    b13.display();
    fill("red");
    b14.display();
    fill("red");
    b15.display();
    fill("red");
    b16.display();
    fill("red");
    b17.display();
    fill("red");
    b18.display();

    stroke(0);
    strokeWeight(4)
    fill(255);
    ball.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    destroy.play();
}

