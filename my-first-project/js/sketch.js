let x;
let y;

let xoff = 0; //the noise of the eye
let yoff = 0;

let bx = []; // bubble width position
let by = []; //bubble y position
let speedbx = []; // speed of bubble
let speedby = [];
let sb = []; // size of bubble
let n = 30; // number of bubbles
let speedX; // speed of the creature
let speedY;

// when eye turns red
let speedX2;
let speedY2;

let s = 70;
let reda = 194; // rgb values of eye colors
let redb = 14;
let redc = 14;
let bluea = 0;
let blueb = 71;
let bluec = 171;
let eyeHeight = 30;
let needSet = true;

let r;

function setup() {
    let canvas = createCanvas(600, 400);
    canvas.parent("p5-canvas");
  //createCanvas(600, 400);
  speedX = random(-0.003, 0.003);
  speedY = random(-0.003, 0.003); //select a value
  
  x = random(70, width / 2);
  y = random(85, width / 2);

  for (let i = 0; i < n; i++) {
    bx[i] = random(width);
    by[i] = height - 26 + random(100);
    sb[i] = random(5, 15);
  }
  r = random(0, 100);
}

function draw() {
  background(57, 255, 20);

  // change the speed of the bubbles
  for (let i = 0; i < n; i++) {
    speedbx[i] = random(-2, 2);
    speedby[i] = random(0, 1);
  }

  // the creature
   xoff = xoff + speedX;
   x = noise(xoff)*width;
   yoff = yoff + speedY;
   y = noise(yoff)*height;
  
  // x = x + speedX;
  // y = y + speedY;
    

  if (x > width - 25 || x < 0) {
    speedX = -speedX;
  }
  if (y > height - 25 || y < 85) {
    speedY = -speedY;
  }

  fill(128, 128, 128); // rectangle at the top
  noStroke();
  rect(0, 0, width, height / 6);

  //move bubbles
  for (let i = 0; i < n; i++) {
    bubbles(bx[i], by[i], sb[i]);
    bx[i] = bx[i] + speedbx[i] * 0.8;
    by[i] = by[i] - speedby[i];

    //checking edges
    if (bx[i] > width - 25 || bx[i] < 25) {
      bx[i] = random(width);
    }
    if (by[i] < 85) {
      by[i] = height - 26 + random(100);
    }
  }

  if (mouseIsPressed == true) {
    if (x > width - 25 || x < 0) {
      speedX2 = -speedX2;
    }
    if (y > height - 25 || y < 85) {
      speedY2 = -speedY2;
    }
    bluea = reda;
    blueb = redb;
    bluec = redc;
    if (needSet) {
      x = mouseX;
      y = mouseY;
      needSet = false;
    }

    let dx = mouseX - x;
    let dy = mouseY - y;
    speedX2 = -dx * 0.01;
    speedY2 -= dy * 0.01;
  } else {
    bluea = 0;
    blueb = 71;
    bluec = 171;
    needSet = true;
  }
  creature(x, y, s);
}

function creature(u, v, s) {
  fill(0);
  push();
  translate(u, v);
  stroke(46, 204, 16);
  circle(0, 0, s);
  fill(255); //outer eye color
  blink();

  
  ellipse(0, 0, 40, eyeHeight); // outer eye
  fill(bluea, blueb, bluec); // pupil color
  noStroke();
  ellipse(0, 0, 25, eyeHeight); //pupil
  pop();
}
function blink() {
  eyeHeight=15+sin(frameCount*0.1)*15;
  r = random(100);
}

function bubbles(a, b, sb) {
  fill(33, 153, 11);
  push();
  translate(a, b);
  circle(0, 0, sb);
  pop();
}