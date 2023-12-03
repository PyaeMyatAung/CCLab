

let NUM_OF_lines = 25; //number of particles.
let myrabbit;
let lines = [];
let speed;
let mysound;
let mycaption;

function preload(){
  mysound = loadSound("assets/sound3.mp3")
}

function setup() {
  let canvas = createCanvas(400, 500);
  canvas.parent("p5-canvas");
  mycaption= new caption(20,20);
  myrabbit = new rabbit(200, 100);

  


  // generate particles
  for (let i = 0; i < NUM_OF_lines; i++) {
    lines[i] = new Lines(random(width), random(height));
  }
}

function draw() {
  background(0,50);
  mycaption.display();

    if( mouseIsPressed){
        if(mysound.isPlaying()==false){
          mysound.play(); 
        }else{
          mysound.pause();
        }
  }
    // update and display lines
  for (let i = 0; i < lines.length; i++) {
    let p = lines[i];
    p.display();
    p.moveup();

  }

  myrabbit.display();
  myrabbit.move();
 


}

class rabbit{
  constructor(x, y){
    this.x=x;
    this.y=y;
    this.speed = random(0.0025, 0.01)
  }
  display(){
    push();
    translate(this.x, this.y);
    noStroke();
    fill(225);
    circle(this.x-7, this.y+45, 70);//body
    fill(220);
     ellipse(this.x+20, this.y+30, 30, 18);//paw
    fill(235);
    circle(this.x-40, this.y+60,30);//tail
    fill(215);
    ellipse(this.x+10, this.y+78, 40, 20);//feet
    ellipse(this.x, this.y-40, 20, 50);//left ear
    fill(225);
    ellipse(this.x-10, this.y-40, 25, 50);// right ear
    circle(this.x,this.y, 52);//head
    fill(240, 119, 110);
    circle(this.x+25, this.y-5, 8);
    fill(0);
    circle(this.x+5,this.y-10, 12);//eye
    pop();
  }

  move(){
    this.x=noise(frameCount*this.speed*0.5)*width;
  }
}

class Lines {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 30;
    this.h= random(100);
    this.l= random(20,200);
  
  }

  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255);
    rect(0,0,5, this.l);

    pop();
  }
  moveup(){
    this.y= this.y-10;
    if (this. y < -50){
        this.y= height+200+this.y;
        }
  }


}
class caption{
  constructor(x, y){
    this.x = x;
    this.y= y;

 
  }
  display(){
    push();
    translate(this.x, this.y);
    fill(255);
    //fill(252, 218, 124);
    textSize(15);
    textFont('Courier New');
    textStyle(BOLD);
    text("Click to start!",this.x, this.y, 300, 50);
    pop();


        
    
  }
}
