

let Coral;
let Coral2;
let mirror;
let girll;
let mysand;
let myrabbit;
//let mysound;
let mycaption;
let e;
let sound1;
let sound2;

let bx=[];//bubble width position
let by=[];//bubble height position
let speedbx=[];//speed of bubbles
let speedby=[];
let sb=[];
let n = 40;//number of bubbles


function preload(){
  Coral=loadImage("Coral.png");
  Coral2 =loadImage("Coral2.png");
  girll =loadImage("girll.png");
  mirror = loadImage("mirror.png");
  e = loadImage("e.png");
  sound1 =loadSound("assets/box5a.mp3")
  sound2 = loadSound("assets/box5b.mp3")
}

function setup() {
    let canvas = createCanvas(1000, 500);
    canvas.parent("p5-canvas");
  mysand = new sand(120,515);
  myrabbit =new rabbit(850, 250);
  mycaption = new caption(20,15);  
   for (let i = 0; i < n; i++) {
    bx[i] = random(width);
    by[i] = height+ random(100);
    sb[i] = random(5, 15);
  }
  
}


function draw() {
  noStroke();
  background(90, 217, 230);
  mysand.display();
  image(mirror, 100, 50);
  image(Coral,0,250);
  mycaption.display();
  mycaption.off();
  myrabbit.display(); 
  myrabbit.updown();
  myrabbit.leftright();
  myrabbit.sound1();
  myrabbit.sound2();
  image(Coral2,670,230);
  


  
  //change the speed of the bubble
    for (let i = 0; i < n; i++) {
    speedbx[i] = random(-2, 2);
    speedby[i] = random(0, 1);
  }
  
  //move bubbles
  for (let i = 0; i < n; i++) {
    bubbles(bx[i], by[i], sb[i]);
    bx[i] = bx[i] + speedbx[i] * 0.8;
    by[i] = by[i] - speedby[i];

    //checking edges
    if (bx[i] > width - 25 || bx[i] < 25) {
      bx[i] = random(width);
    }
    if (by[i] < 15) {
      by[i] = height + random(100);
    }
  }

}


class sand{
  constructor(x, y){
    this.x = x;
    this.y=y;
  }
  display(){
    push();
    translate(this.x,this.y);
    fill(250, 230, 152);
    ellipse(0,0,430,150);
    pop();
  }
}

class rabbit{
  constructor(u, v){
    this.u=u;
    this.v=v;
    this.speed = random(0.005, 0.01);
    this.speedy = random(5, 10);
  }
  display(){
    push();
    translate(this.u, this.v);
    fill(225);
    ellipse(8,-45, 25, 65);//right ear
    fill(228);
    circle(0,60,95);//body
    fill(225);
    fill(235);
    circle(0,0,70);//head
    ellipse(-19,100,30, 20 );//left feet
    circle(-16,50, 25);//left eye  
    fill(0);
    circle(-16,-2, 15);//left eye
    //circle(16, -2, 15);//right eye
    fill(240, 119, 110);//nose color
    circle(-33,6, 10);//nose
    
    pop();
     
  }
  updown(){
    this.v=noise(frameCount*this.speed)*height;
    if (this.u<= 515){
        this.v= 250;
        this.u= 515;
      image(girll,this.u-300, this.v-100);
      textSize(20);
      fill(255);
      textFont('Courier New');
      textStyle(BOLD);
      text("A human girl? That's me!",this.u+100, this.v-100, 200, 200 );
      image(e,this.u+30, this.v-100);
        }
  }
  
  sound2(){
    if (this.u == 520){
    
      if(sound2.isPlaying()==false){
        sound2.play(); 
      }else{
        sound2.pause();
          }
        }   
  }
  
  leftright(){
    if(keyIsPressed==true){
    if(keyCode==RIGHT_ARROW && this.u<970 ){
      this.u= this.u+10;
    }
    if(keyCode==LEFT_ARROW && this.u>515){
      this.u= this.u-10;
      
    }      
       
  }
 
}
  sound1(){   
  if( mouseIsPressed){
    if(sound1.isPlaying()==false){
      sound1.play(); 
    }else{
      sound1.pause();
  }
  }
  }
}


function bubbles(a, b, sb) {
  push();
  fill(171, 229, 235);
  push();
  translate(a, b);
  circle(0, 0, sb);
  pop();
}


class caption{
  constructor(x, y){ 
    this.x = x;
    this.y= y;
    this.r= 255;
    this.g=255;
    this.b=255;
  }
  display(){
    push();
    translate(this.x, this.y);
    fill(this.r, this.g, this.b);
    //fill(19, 47, 82);
    textSize(18);
    textFont('Courier New');
    textStyle(BOLD);
    text("Click to Start!",0, 0, 200, 100);
        text("Use left and right arrow.",0, 20, 300, 100);
    pop();
          
  }
  
  off(){
    if(mouseIsPressed==true){
      this.r=90;
      this.g=217;
      this.b=230;
    }
  }
}
