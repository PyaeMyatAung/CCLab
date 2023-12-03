

let dream;
let num_star =200;
let stars = [];
function setup() {
    let canvas = createCanvas(576,360);
    canvas.parent("p5-canvas");
  for (let i = 0; i < num_star; i++) {
    stars[i] = new star(random(width), random(height));
  }
}

function preload(){
  dream= loadImage("dream.png");
}

function draw() {
  background(0);
    for (let i = 0; i < stars.length; i++) {
    let p = stars[i];
    p.display();
  }
  image(dream,0,0);
  
}

class star{
  constructor(x, y){
    this.x=x;
    this.y =y;
  }
  display(){
    push();
    let size = random();
    noStroke();
    fill(255, 255, 255, 230 - 80 * sin(frameCount/3));
    ellipse(this.x, this.y, size + 4 + sin(frameCount), size + sin(frameCount/3 ));
    ellipse(this.x, this.y, size + sin(frameCount/3), size + 6 + sin(frameCount/3));
    pop();
    //console.log(frameCount);
  }
}

