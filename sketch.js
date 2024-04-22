let img1;
let img2;

function preload(){

img1 = loadImage("Resources/creep.jpg");
img2 = loadImage("Resources/weirdo.jpeg");


}

function setup(){

createCanvas(400,400);
imageMode(CENTER);
noCursor();


}

function draw(){

background(255,255,255);
image(img1,width/2,height/2);
image(img2,mouseX,mouseY,200,200);
stroke(63,58,250,100);
strokeWeight(10);
fill(247,147,15);
rect(200,200,100,100);
ellipseMode(CENTER);
ellipse(200,200,100,100);
fill(175,126,178);
stroke(132,178,126,150);
noStroke();
ellipseMode(CORNER);
ellipse(200,200,100,100);


}