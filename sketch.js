//Borrows heavily from this coloringchaos sketch https://editor.p5js.org/coloringchaos/sketches/SkZVaxF0-

var eyes = [];

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background('#ffffff');
    for (var i = 0; i < eyes.length; i++) {
        eyes[i].update();
        eyes[i].ellipse();

        //is circle has reached it's lifespan, then delete it
        if (eyes[i].lifespan <= 0) {
            eyes.splice(i, 1);
        }
    }
    if (mouseIsPressed) {
        mouseClicked()
    } else {
        fill(255)
    }

}

function mouseClicked() {
    //push a new circle to our array
    eyes.push(new Circle(mouseX, mouseY, 100, '#3c54a5'));
    eyes.push(new Circle(mouseX, mouseY, 50, '#ffffff'));
    eyes.push(new Circle(mouseX, mouseY, 30, '#94d8ed'));
    eyes.push(new Circle(mouseX, mouseY, 10, '#111a25'));
}

function Circle(x, y, s, c) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.c = c;

    //give each circle a lifespan
    this.lifespan = 400;

    this.ellipse = function () {
        fill(this.c);
        noStroke();
        ellipse(this.x, this.y, this.s);
    }

    //this makes it "die" (and would make it grow if the first line was uncommented)
    this.update = function () {
        // this.s = this.s + 1;
        this.lifespan--;
    }
}