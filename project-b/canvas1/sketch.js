

let girl;
let myMoon;
let mysound;
let mycaption;



function preload(){
  girl = loadImage("girl.png")
  mysound = loadSound("assets/sound1.mp3")
}
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas");
  myMoon= new moon(180,210);
  mycaption = new caption(20, 360);

  
}


function draw() {
  background(247, 239, 151);
  myMoon.display();
  image(girl, 0, 0);
  myMoon.eyes();
  myMoon.sleep();
  myMoon.restart();
  myMoon.sound();
  mycaption.display();
  mycaption.sleep();
  mycaption.restart();
  
  

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
    this.a= 247;
    this.d=239;
    this.c=151;
    this.h1=10;
    this.h2=10;
    this.f1= 200;
    this.f2 = 180;
    this.f3=220;
    this.l1 = 246;
    this.l2 =83;
    this.l3= 83;
   }
  
  
  display(){
  push();
  translate(this.x, this.y);
  noStroke();
  fill(this.r, this.b, this.g);
  square(-180,-210,400);
  
  //light button
  noStroke();
  fill(this.f1);// here
    
  square(160, -114, 30);
  fill(this.f2);
  square(170, -100, 10);
  fill(this.f3);
  square(170,-110,10);//end
   
    noStroke();
  fill(223, 247, 237);
  circle(0, 0, 100);//cloth 180, 210
  fill(this.f, this.s, this.t);
  circle(130, -144, 90);//moon
  fill(this.a, this.d,this.c);
  circle(85, -144,100);//cresent
  fill(this.l1, this.l2, this.l3);
  //textStyle(BOLD);
  //textFont('Courier New');
  text("light switch",140, -80, 100, 100);
  
 
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
    this.a=0;
    this.d=0;
    this.c=0;
    this.f=245;
    this.s=226;
    this.t=22;
    this.h1=2;
    this.h2=2;
    this.f1=0;
    this.f2=0;
    this.f3=0;
    this.l1 = 0;
    this.l2 =0;
    this.l3= 0;
    
      
    
    
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
    this.f1= 200;
    this.f2 = 180;
    this.f3=220;
    this.a= 247;
    this.d=239;
    this.c=151;
    this.l1 = 246;
    this.l2 =83;
    this.l3= 83;
   }
 }

  }
  
  sound(){
    if( mouseIsPressed){
        if(mysound.isPlaying()==false){
   mysound.play(); 
  }else{
    mysound.pause();
  }
  }
  
  }
}

class caption{
  constructor(x, y){
    this.x =x;
    this.y = y;
    this.c1=255;
    this.c2=255;
    this.c3=255;
    
    
  }
  display(){
    push();
    translate(this.x, this.y);
    fill(this.c1, this.c2, this.c3);
    textSize(15);
    text("Click to close the light!",0,0, 300, 300);
    pop();
    
  }
    sleep(){
    if(mouseIsPressed == true){
    this.c1 = 246;
    this.c2 =83;
    this.c3= 83;  
  }
    
  }
  
  restart(){
    if(keyIsPressed) {
    if(keyCode == ENTER){
    this.c1=255;
    this.c2=255;
    this.c3=255;
    
   }
 }

  }
  
  
  
}


