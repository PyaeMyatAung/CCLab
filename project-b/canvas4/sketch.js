
let Coral;
let Coral2;
let mysand;
let myrabbit;
let mysound;
let mycaption;

let bx=[];//bubble width position
let by=[];//bubble height position
let speedbx=[];//speed of bubbles
let speedby=[];
let sb=[];
let n = 40;//number of bubbles


function preload(){
  Coral=loadImage("Coral.png");
  Coral2 =loadImage("Coral2.png");
  mysound=loadSound("assets/sound4.mp3")
}

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.parent("p5-canvas");
  mysand = new sand(120,515);
  myrabbit = new rabbit(width/2, height/2);
  mycaption = new caption(20,20);

   for (let i = 0; i < n; i++) {
    bx[i] = random(width);
    by[i] = height+ random(100);
    sb[i] = random(5, 15);
  }
  
}


function draw() {
  noStroke();
  background(90, 217, 230);
  mycaption.display();
  mysand.display();
  image(Coral,0,250);
  image(Coral2,670,230);
  myrabbit.display();
  myrabbit.move();
  
  if( mouseIsPressed){
    if(mysound.isPlaying()==false){
      mysound.play();
      
    }else{
      mysound.pause();

  }

  }
  
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

function bubbles(a, b, sb) {
  fill(171, 229, 235);
  push();
  translate(a, b);
  circle(0, 0, sb);
  pop();
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
  constructor(x, y){
    this.x=x;
    this.y=y;
    this.speed = random(0.005, 0.01);
  }
  display(){
    push();
    translate(this.x, this.y);
    fill(225);
    ellipse(-18,-45, 25, 65);//left ear
    ellipse(12,-45, 25, 65);//left ear
    fill(228);
    circle(0,60,95);//body
    fill(225);
    //ellipse();//left arm
    //ellipse();//right arm
    fill(235);
    circle(0,0,70);//head
    ellipse(-19,100,30, 20 );//left feet
    ellipse(20,100, 30,20);//right feet
    circle(-16,50, 25);//left eye
    circle(16, 50, 25);//right eye
    
    fill(0);
    circle(-16,-2, 15);//left eye
    circle(16, -2, 15);//right eye
    fill(240, 119, 110);//nose color
    circle(0,6, 10);//nose
    
    pop();
     
  }
  move(){
    this.y=noise(frameCount*this.speed)*height;
   
    
  }
}

class caption{
  constructor(x, y){
    this.x = x;
    this.y= y;
    this.a= 90;
    this.b=217;
    this.c=230;


  }
  display(){
    push();
    translate(this.x, this.y);
    fill(255);
    textSize(20);
    textFont('Courier New');
    textStyle(BOLD);
    text("Click to listen what's happening!",this.x, this.y, 300, 50);
    fill(this.a, this.b, this.c);
      textSize(20);
      textFont('Courier New');
      textStyle(BOLD);
      text("I can breathe!",this.x+500, this.y+100, 600, 100);
    pop();
    

    if (mouseIsPressed==true){
      this.a=255;
      this.b=255;
      this.c=255;     
    }
  }
}