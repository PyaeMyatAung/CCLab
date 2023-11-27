let girl;
let x, y;
let r, b, g;
let f, s, t;

function preload(){
  girl = loadImage("images/girl.png");
  
}
function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasWrapper");
  cnv.style(800,400);
  cnv.style('z-index','-1');
  r = 247;
  b = 239;
  g = 151;
  f = 247;
  s =239;
  t =151;
  
}

function draw() {
  background(247, 239, 151);
  noStroke();
  fill(r, b, g);
  square(0,0,400);
  fill(223, 247, 237);
  circle(180, 210, 100);//cloth
  fill(f, s, t);
  circle(310, 66, 90);//moon
  fill(r, b,g);
  circle(270, 66,100);//cresent
  image(girl, 0, 0);
  if(mouseIsPressed == true){
    r=0;
    b=0;
    g=0;
    f=245;
    s=226;
    t=22;
    
    
  }
 if(keyIsPressed) {
   if(key == "r"){
    r=247;
    b=239;
    g=151;  
    f = r;
    s = b;
    t = g;
   }
 }

}

