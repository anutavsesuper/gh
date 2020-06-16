

    function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }
    function setup() {
    createCanvas(windowWidth, windowHeight);

    five = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/imgsvgpyatna/master/wedrfgbhn%20(8)%201.png');


    x5 = width*0.6;
    y5 = height*0.15;
    w5 = 600;
    h5 = 720;
    }

    function draw() {
    noStroke()
    background(255);




    if (mouseX > x5 && mouseX < x5 + w5 && mouseY > y5 && mouseY < y5 + h5) {
    rollover5 = true;
    }
    else {
    rollover5 = false;
    }
    if (dragging5) {
    x5 = mouseX + offsetX5;
    y5 = mouseY + offsetY5;
    }
    image(five, x5, y5, w5, h5);
    }


    var dragging5 = false;
    var rollover5 = false;


    //var x, y, w, h;
    var offsetX, offsetY, offsetX1, offsetY1, offsetX3, offsetY3, offsetX4, offsetY4, offsetX5, offsetY5, offsetX6, offsetY6, offsetX7, offsetY7, offsetX8, offsetY8;






    function mousePressed() {



    if (mouseX > x5 && mouseX < x5 + w5 && mouseY > y5 && mouseY < y5 + h5) {
    dragging5 = true;
    offsetX5 = x5-mouseX;
    offsetY5 = y5-mouseY;
    }}

    function mouseReleased() {
    dragging1 = false;
    dragging = false;
    dragging3 = false;
    dragging4 = false;
    dragging5 = false;
    dragging6 = false;
    dragging7 = false;
    dragging8 = false;
    }
