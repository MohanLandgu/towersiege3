const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


function preload(){


  getBackgroundImg();

  
}



function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;


 ball=new BALL(100,200,15,20)
 
 log1= new log(450,300,200,40)
 log2=new log(700,140,200,40)


box1=new YellowColor(460,280,30,40)
box2=new redcolor(440,280,30,40)
box3=new orangeColor(420,280,30,40)
box4=new orangeColor(480,280,30,40)
box5=new redcolor(400,280,30,40)
box6=new redcolor(500,280,30,40)
box7=new greenColor(420,260,30,40)
box8=new YellowColor(440,260,30,40)
box9=new redcolor(460,260,30,40)
box10=new YellowColor(480,260,30,40)
box11=new redcolor(440,240,30,40)
box12=new orangeColor(460,240,30,40)
box13=new greenColor(450,220,30,40)

//log2 blocks


box14=new greenColor(720,120,30,40)
box15=new redcolor(700,120,30,40)
box16=new greenColor(680,120,30,40)
box17=new YellowColor(660,120,30,40)
box18=new redcolor(740,120,30,40)
box19=new YellowColor(680,100,30,40)
box20=new orangeColor(700,100,30,40)
box21=new redcolor(720,100,30,40)
box22=new greenColor(700,80,30,40)

slingshot=new SlingShot(ball.body,{x:100,y:200})

}


function draw() {

  if( backgroundImg)
     background( backgroundImg); 

  Engine.update(engine);


ball.display();

log1.display();
log2.display();


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();

box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();

slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if (keyCode === 32) {
      
          slingshot.attach(ball.body);

  }

    
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "sprites/morning image.jpg";
    }
    else{
        bg = "sprites/night image.jpg";
    }

    backgroundImg = loadImage(bg);
   
}




