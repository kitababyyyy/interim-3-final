var x = 300;
var y = 200;
var speed = 8;


function setup(){
    createCanvas(600,400);
    background(140, 228, 255);
}

function draw(){
    scribble(x,y);
    display();
    move();
    array();
    bounce();
    }



function scribble(x,y){
    noStroke();
    ellipse(x, y, 50, 50);
    fill(0,0,0);
    for(var i = 0; i < 5; i++){
        ellipse((i+1)*x,y,50,50);
    }
    
}

function display(){
fill(50,250,50);
scribble(x,y);
}

function move(){
    x = x + speed;
}
function array(){
    for(var x=0; x <= 50; x = x + 40){
        ellipse(x,200,20,20);
    }
}

function bounce(){
    if(x>600 || x<0){
        speedx = -speedx;
    }
}