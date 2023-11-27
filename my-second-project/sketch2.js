let dancer;

function setup() {
    let canvas = createCanvas(300, 300);
    canvas.parent("container2");
  dancer = new MrPumpkin(width/2, height/2);
}

function draw() {
  background(0);
  drawFloor(); 
  dancer.update();
  dancer.display(); 
  
}

class MrPumpkin{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this. speed = random(0.003, 0.01);
    this.s = 100;
    
  }  
  update(){
    //move left and right
    this. x= noise(frameCount*this. speed)*height;
  }
  display(){
    push();
    translate(this.x, this.y);
    
    
    // ******** //
   //pumpkin body
    noStroke();
    fill(176, 86, 7);
    ellipse(0, 0, this.s+25, this.s);
    //eyes
    fill(255, 239, 13);
    triangle(-40,-15,-10,-15,-22.5, 10);//left
    triangle(40, -15, 10, -15, 22.5, 10);//right
    //nose
    triangle(0, 8, -8, 20, 8, 20);
    //mouth
    arc(0, 27, 45, 30, 2*PI, PI);
    //hat
    //fill(83, 4, 105);
    fill(4, 82, 4);
    rect(-65, -40, this.s+30, 10, 20 );
    rect(-40, -80, 80, 50, 10);
    fill(0);
    rect(-40,-60, 80, 10);
    //arms
    for(let i = 0; i<14; i++){
      fill(176, 86, 7);
      let a = 20* sin(frameCount*0.1 + i *0.2);
      let b= 20* cos(frameCount*0.1 + i *0.2);
      circle(this.s*0.6+i*2.5,a, 5+i/4);
      push();
      scale(-1,1);
      circle(this.s*0.6+i*2.5, b, 5+i/4);
      pop();    
    //legs
      rect(-30, 40, 10, 40);
      rect(25, 40, 10, 40);
      ellipse(-33, 75, 25,10);
      ellipse(38, 75, 25, 10);
      
    }   
    
    pop();
  }   
}





