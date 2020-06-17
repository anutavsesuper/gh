function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function setup() {
createCanvas(windowWidth, windowHeight);

one = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/imgsvgpyatna/master/%D1%86%D1%8B%D1%83%D0%B2%D0%BA%D0%B0%D0%BF%201.png');
three = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/imgsvgpyatna/master/lkjhgc.png');
four = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/imgsvgpyatna/master/wedrfgbhn%20(2)%201.png');

x1 = width*0.7;
y1 = height*0.35;
w1 = 170;
h1 = 120;

x3 = width*0.5;
y3 = height*0.6;
w3 = 110;
h3 = 210;

x4 = width*0.15;
y4 = height*0.2;
w4 = 200;
h4 = 110;
}


function draw() {
noStroke()
background(255);

if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
rollover1 = true;
}
else {
rollover1 = false;
}
if (dragging1) {
x1 = mouseX + offsetX1;
y1 = mouseY + offsetY1;
}
image(one, x1, y1, w1, h1);

if (mouseX > x3 && mouseX < x3 + w3 && mouseY > y3 && mouseY < y3 + h3) {
rollover3 = true;
}
else {
rollover3 = false;
}
if (dragging3) {
x3 = mouseX + offsetX3;
y3 = mouseY + offsetY3;
}
image(three, x3, y3, w3, h3);



if (mouseX > x4 && mouseX < x4 + w4 && mouseY > y4 && mouseY < y4 + h4) {
rollover4 = true;
}
else {
rollover4 = false;
}
if (dragging4) {
x4 = mouseX + offsetX4;
y4 = mouseY + offsetY4;
}
image(four, x4, y4, w4, h4);
}






var dragging = false;
var rollover = false;

var dragging1 = false;
var rollover1 = false;

var dragging3 = false;
var rollover3 = false;

var dragging4 = false;
var rollover4 = false;

var dragging5 = false;
var rollover5 = false;

var dragging6 = false;
var rollover6 = false;

var dragging7 = false;
var rollover7 = false;

var dragging8 = false;
var rollover8 = false;


//var x, y, w, h;
var offsetX, offsetY, offsetX1, offsetY1, offsetX3, offsetY3, offsetX4, offsetY4, offsetX5, offsetY5, offsetX6, offsetY6, offsetX7, offsetY7, offsetX8, offsetY8;






function mousePressed() {

if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
dragging1 = true;
offsetX1 = x1-mouseX;
offsetY1 = y1-mouseY;
}

if (mouseX > x3 && mouseX < x3 + w3 && mouseY > y3 && mouseY < y3 + h3) {
dragging3 = true;
offsetX3 = x3-mouseX;
offsetY3 = y3-mouseY;
}

if (mouseX > x4 && mouseX < x4 + w4 && mouseY > y4 && mouseY < y4 + h4) {
dragging4 = true;
offsetX4 = x4-mouseX;
offsetY4 = y4-mouseY;
}

if (mouseX > x5 && mouseX < x5 + w5 && mouseY > y5 && mouseY < y5 + h5) {
dragging5 = true;
offsetX5 = x5-mouseX;
offsetY5 = y5-mouseY;
}
}

function mouseReleased() {
dragging1 = false;
dragging = false;
dragging3 = false;
dragging4 = false;
dragging5 = false;
}
