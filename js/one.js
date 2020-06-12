function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();

  one = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img/821bd2df1daa9562138675ce2e07d890200d0194/jnkjn%20(1).svg');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
  image(one, mouseX-80, mouseY-50, 160, 115);
}}
