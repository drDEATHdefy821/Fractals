let slider;
function setup() {
  // put setup code here
  createCanvas(400,400);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
  // put drawing code here
  background(51);
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len) {
  let angle = slider.value();
  line(0, 0, 0, 0 - len);
  translate(0, - len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
