var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  btn_red = createButton("Red")
  btn_red.position(50,100)
  btn_red.mousePressed(redB)

  btn_green = createButton("Green")
  btn_green.position(150,100)
  btn_green.mousePressed(greenB)
}

function draw() {
  background(r,g,b);
}

function redB(){
 r=255;
 g=0;
 b=0;
}

function greenB(){
  r=0;
  g=255;
  b=0;
}