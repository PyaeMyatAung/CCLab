let grass;
let mysound;
let myRabbit;
let myCloud;
let myCloud2;
let myCloud3;


function preload(){
  grass = loadImage("grass.png");
  mysound=loadSound("assets/sound2.mp3")
}

function setup() {
  let canvas = createCanvas(1300, 660);
  canvas.parent("p5-canvas");
  myRabbit = new Rabbit(280,530);
  myCloud = new cloud(50, 90);
  myCloud2= new cloud(400, 130);
  myCloud3= new cloud(850,80);
  
  
  
}

function draw() {
  background(220);
  image(grass,0,0);
  fill(0);
  ellipse(1060,570,350,180);//hole
  myRabbit.display();
  myRabbit.hop();
  myRabbit.reset();  
  myCloud.display();
  myCloud.move();
  myCloud2.display();
  myCloud2.move();
  myCloud3.display();
  myCloud3.move();
  
 if( mouseIsPressed){
   if(mysound.isPlaying()==false){
     mysound.play(); 
     }else{
       mysound.pause();
       }
  }
  

   
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
    pop();
  }
  
  hop(){
    if(keyIsPressed==true){
    if(keyCode==RIGHT_ARROW || keyCode==DOWN_ARROW){
      this.x= this.x+10;
      this.y=this.y+30*(sin(this.x*0.06));
    }
    if(this.x>=950){
      if(this.y<1000){
          this.y+=90;
          this.x=1060;
         }       
    }
       
  }
}
  reset(){
    if(keyIsPressed==true){
    if(keyCode==ENTER){
        this.x=280;
      this.y=530;
    }
     
  }
  }
}

class cloud{
  constructor(u,v){
    this.u= u;
    this.v = v;
    this.x = 0;
    this.y=0;
  }
  display(){
    push();
    translate(this.u, this.v);
    noStroke();
    fill(255);
    ellipse(this.x,this.y, 100, 55);
    ellipse(this.x+15,this.y-15,70,80 );
    ellipse(this.x+40, this.y-15,80,60);
    ellipse(this.x+60,this.y+5,110, 50);
    
    pop();
  }
  
  move(){
    if (this.x<width){
      this.x+=0.5;
    }
    if(this.x>=width){
       this.x=0;
       } 
    
  }
}