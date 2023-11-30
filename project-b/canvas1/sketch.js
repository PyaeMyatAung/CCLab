let girl;
let myMoon;
let mysound;


function preload(){
  girl = loadImage("girl.png")
  mysound = loadSound("assets/sound1.mp3")
}
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas");
  myMoon= new moon(180,210);

  
}


function draw() {
  background(247, 239, 151);
  myMoon.display();
  image(girl, 0, 0);
  myMoon.eyes();
  myMoon.sleep();
  myMoon.restart();
  
  if( mouseIsPressed){
    if(mysound.isPlaying()==false){
mysound.play(); 
}else{
mysound.pause();
}
}
  

}




class moon{
  constructor(x,y){
    this.x= x;
    this.y=y;
    this.r = 247;
    this.b = 239;
    this.g = 151;
    this.f = 247;
    this.s =239;
    this.t =151;
    this.h1=10;
    this.h2=10;
   }
  
  
  display(){
  push();
  translate(this.x, this.y);
  noStroke();
  fill(this.r, this.b, this.g);
  square(-180,-210,400);
  fill(223, 247, 237);
  circle(0, 0, 100);//cloth 180, 210
  fill(this.f, this.s, this.t);
  circle(130, -144, 90);//moon
  fill(this.r, this.b,this.g);
  circle(270, 66,100);//cresent
  
 
  pop();
  }
  eyes() {
  push();
  translate(this.x,this.y);
  rotate(-PI/6);
  fill(69, 38, 12);
  ellipse(-105,-65,12, this.h1);//left eye
  ellipse(-65,-70, 12,this.h2);//right eye
  pop();
  }
  
  sleep(){
    if(mouseIsPressed == true){
    this.r=0;
    this.b=0;
    this.g=0;
    this.f=245;
    this.s=226;
    this.t=22;
    this.h1=2;
    this.h2=2;
    
    
  }
    
  }
  
  restart(){
    if(keyIsPressed) {
    if(keyCode == ENTER){
    this.r=247;
    this.b=239;
    this.g=151;  
    this.f = this.r;
    this.s = this.b;
    this.t = this.g;
    this.h1=10;
    this.h2=10;
   }
 }

  }
}


