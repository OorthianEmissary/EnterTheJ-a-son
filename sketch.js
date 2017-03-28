var jason1;
var jason2;
var shaun;

//not implemented yet
//var Jason3;

function preload() {
    jason1 = loadSound('assets/JASON1.mp3');
    jason2 = loadSound('assets/Jason2.mp3');
    shaun = loadSound('assets/SHAWN1.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(160);
    textSize(20);
    textAlign(CENTER);
    text("ENTER THE JASON, NOT THE SHAUN", width/2, height/2);
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
//var jason = random(Jason1, Jason2);
    jason1.play();
    
}

function keyPressed() {
    shaun.play();
}