// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 20; // Decide the initial number of particles.

let particles = [];

function setup() {
    let canvas = createCanvas(300, 300);
    canvas.parent("p5-canvas");


  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(150, 194, 115, 100);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.leftRight();
    p.display();
    p.moveup();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 30;
    this.h= random(100);
    this. speed = random(0.001, 0.005);
  }

  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    colorMode(HSB, 100);
    fill(this.h, 8, 98);
    ellipse(0, 0, this.dia, this.dia+10);// body
    fill(0);
    circle(-7,-13, this.dia/6);//eyes
    circle(7, -13, this.dia/6);
    fill(this.h, 30, 60);
    rect(-15,-6,this.dia+1, this.dia/3, 100);// the line on the bug
    rect(-15,10, this. dia-2, this.dia/3.3, 100);
    fill(this.h, 30, 96);
    rotate(PI/8);
    ellipse(-7, 15, this.dia/1.7, this.dia+5);//left wing
    rect(-3, -32, this.dia/6, this.dia/2, 100);//right antennae
    rotate(-PI/4);
    ellipse(7, 15, this.dia/1.7, this.dia+5);//righ wing
    rect(-3, -32, this.dia/6, this.dia/2, 100);//left antennae
    pop();
  }
  moveup(){
    this.y= this.y-5;
    if (this. y < -50){
        this.y= height+200+this.y;
        }
  }
  leftRight() {
    this. x = noise(frameCount*this. speed)*width;
  }

}