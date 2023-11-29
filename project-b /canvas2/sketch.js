let grass;
let myRabbit;


function preload(){
  grass = loadImage("grass.png");
}
function setup() {
    let canvas = createCanvas(1300, 660);
    canvas.parent("p5-canvas");
  myRabbit = new Rabbit(280,530);
  
}

function draw() {
  background(220);
  image(grass,0,0);
  ellipse(1060,570,350,180);//hole
  myRabbit.display();
  myRabbit.hop();
  
  

   
}

class Rabbit{
  constructor(x,y){
    this.x= x;
    this.y= y; 
    this.s= 70;
    // this.h = 
  }
  
  display(){
    push();
    translate(this.x, this.y);
    fill(0);
    noStroke();
    
  
  //rabbit
    fill(225);
    circle(-7,45, this.s);//body
    fill(220);
     ellipse(20, 30, 30, 18);//paw
    fill(235);
    circle(-40, 60,30);//tail
    fill(215);
    ellipse(10, 78, 40, 20);//feet
    ellipse(0, -40, 20, 50);//left ear
    fill(225);
    ellipse(-10,-40, 25, 50);// right ear
    circle(0,0, 52);//head
    fill(240, 119, 110);
    circle(25, -5, 8);//nose
    fill(0);
    circle(5,-10, 12);//eye
  }
  
  hop(){
    if(keyIsPressed==true){
    if(keyCode==RIGHT_ARROW || keyCode==DOWN_ARROW){
      this.x= this.x+10;
      this.y=this.y+30*(sin(this.x*0.06));
    }
    if(this.x>=990){
      if(this.y<1000){
          this.y+=90;
          this.x=1060;
         }       
    }
       
  }
}
}