let x;
let y;
let px, c, d, ps, ss; //px is the pupil x
//ps is the pupil height
let shake = false;
let eyeHeight;
let pHeight;

let ba;
let bb;
let bc;// background colors

let ra;
let rb;
let rc;

let angle = 0; //**
let rr; // a random num for a random time
let b = false; // a boolean variable to make something happens (blink) only once
let freq = 300; //how frequenly I want to blink the eye

let xoff = 0; //the noise of the eye
let yoff = 0;

let bx = []; // bubble width position
let by = []; //bubble y position
let speedbx = []; // speed of bubble
let speedby = [];
let sb = []; // size of bubble
let n = 50; // number of bubbles
let speedX; // speed of the creature
let speedY;

let s = 90;
let reda = 194; // rgb values of eye colors
let redb = 14;
let redc = 14;
let bluea = 0;
let blueb = 71;
let bluec = 171;
let needSet = true;




function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("p5-canvas");
  //createCanvas(600, 400);
  eyeHeight = 30;
  pHeight = 1;
  rr = random(freq);
  c = 0;
  d = 0;


  speedX = (floor(random(0, 2)) * 2 - 1) * 0.002;
  speedY = (floor(random(0, 2)) * 2 - 1) * 0.003;

  for (let i = 0; i < n; i++) {
    bx[i] = random(width);
    by[i] = height - 26 + random(100);
    sb[i] = random(5, 15);
  }
}




function draw() {
  background(ba, bb, bc);
  ba= 57;
  bb= 255;
  bc= 20;// background color
  bluea = 0;
  blueb = 71;
  bluec = 171;

  if (keyIsPressed ){
        if(key == "c"){
          lightclosed();
          
        }
        }
  
  // change the speed of the bubbles
  for (let i = 0; i < n; i++) {
    speedbx[i] = random(-2, 2);
    speedby[i] = random(0, 1);
  }

  // the creature
  xoff = xoff + speedX;
  x = noise(xoff) * width;
  yoff = yoff + speedY;
  y = noise(yoff) * height;

  // x = x + speedX;
  // y = y + speedY;

  if (x > width - 25 || x < 0) {
    speedX = -speedX;
  }
  if (y < 85) {
    y = noise(yoff) * height + 25;
  }
  if (y > height - 25) {
    y = noise(yoff) * height - 25;
  }

  fill(ra, rb, rc);// rectangle at the top
  ra =128;
  rb=128;
  rc=128;
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

  // changing eye color and shake when the mouse is pressed
  if (mouseIsPressed == true && dist(mouseX, mouseY, x, y)<50) {
    bluea = reda;
    blueb = redb;
    bluec = redc;
    shake = true;
    eyeHeight = 50;
    s = 120;
  } else {
    // bluea = 0;
    // blueb = 71;
    // bluec = 171;
    s = 90;
    
  }
  creature(x, y, s);
  
  if (shake) {
    pickSpeedRandomly();
  }
}



function lightclosed() {
  ba= 7;
  bb= 30;
  bc= 3;
  bluea= 0;
  blueb= 0;
  bluec=0;
  ra =0;
  rb=0;
  rc=0;
  
}



function pickSpeedRandomly() {
  speedX = random(-0.04, 0.04);
  speedY = random(-0.04, 0.04);
  shake = false;
  //the boolean variable is false now
}




function mouseReleased(){
  speedX = (floor(random(0, 2)) * 2 - 1) * 0.002;
  speedY = (floor(random(0, 2)) * 2 - 1) * 0.003;
  }




function creature(u, v, s) {
  fill(0);
  let ps = s * 0.4;
  px = 0;
  let dist = mouseX - u;
  dist = constrain(dist, -width, width);
  let dx = map(dist, -width, width, -12, 12);
  px = u - dx;

  push();

  translate(u, v);
  //stroke(46, 204, 16);
  circle(0, 0, s);
  fill(255); //outer eye color
  noStroke();
  ellipse(0, 0, 40, eyeHeight); // outer eye
  fill(bluea, blueb, bluec); // pupil color
  noStroke();
  
  ps = map(abs(dist), 0, u, ps, ps * 0.8); //change the height
  //console.log(ps);
  ellipse(u - px, d, 25, ps * pHeight); //pupil

  if (frameCount % freq == floor(rr)) {
    angle = 0;
    b = true;
  }
  if (b) {
    blink();
  }

  pop();
}




function blink() {
  angle = angle + 0.3;
  eyeHeight = 15 + cos(angle) * 15;
  pHeight = abs(cos(angle));
  if (angle > 2 * PI) {
    //if the angle is bigger stop and choose a new random time to blink
    b = false;
    rr = random(freq);
  }
}



function bubbles(a, b, sb) {
  fill(33, 153, 11);
  push();
  translate(a, b);
  circle(0, 0, sb);
  pop();
}
