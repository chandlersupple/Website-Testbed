function setup() {
  var myCanvas = createCanvas(window.innerWidth, 125);
    myCanvas.parent("border_top");
}

let snowflakes = [];

function draw() {
  let t = frameCount / 60;

  for (var i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
  }

  for (let flake of snowflakes) {
    flake.update(t);
    flake.display();
  }
}

function snowflake() {

  if (window.innerWidth > width) {
    var myCanvas = createCanvas(window.innerWidth, 125);
      myCanvas.parent("border_top");
  }

  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {

    let w = 0.5;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
