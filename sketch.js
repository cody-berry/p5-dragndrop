/*
@author Cody
@date 2021-09-29

Exploring drag and drop with code from
	https://editor.p5js.org/enickles/sketches/H1n19TObz

version comments
.   vertex constructor
    create 100 vertices and draw them with .show()
    mousePressed, mouseReleased, contains
    create offset vector whenever mouse clicks the vertex in pressed()
    retrieve x in show() to update our vertex's position while dragging
    mouseMoved, hovering flag


🐞: vertices don't highlight on mouseover when dragging

 */
let font
let vertices = []

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    for (let i = 0; i < 100; i++) {
        vertices.push(new Vertex(random(width), random(height), 15))
    }
}

function draw() {
    background(209, 80, 30)
    vertices.forEach(v => v.show())
}


// if we press our mouse, check all Vertices on the canvas with our current
// (mouseX, mouseY) to see if they've been pressed.
// TODO if there are lots of objects on screen, we can use a quadtree to
//  reduce the number of checks, but since this is O(n) time, it's likely
//  unnecessary.
function mousePressed() {

}


// call all our Vertices and make sure they know nothing's clicking them
function mouseReleased() {

}


function mouseMoved() {
    /*
      we can check if we're mousing over any rectangle here
      on mouseMoved(), check contains foreach r in rectangles
        if contains:
            set hover to true
        else set hover to false

      in show(), fill transparent if hover is true
     */

}

/*
 This circle handles drag and drop. Whenever the mouse clicks within our
  area, an offset vector is created. It points from the center of our vertex
  to our mouseX, mouseY point.

  When dragging, we use this offset to calculate how the vertex's show
   method displays it.
 */
class Vertex {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r

        // offsets help us calculate where to display our vertex while
        // we're dragging it, since our mouse coordinates constantly update.
        // we want the difference vector between the center of our circle and
        // and the point where our mouse clicked to start dragging
        this.offsetX = 0
        this.offsetY = 0
        this.dragging = false
        this.hovering = false
    }

    // (x, y) refers to pointer_x and pointer_y, the coordinates of the
    // mouse dragging; this method will be called as show(mouseX, mouseY)
    show(x, y) {
        noFill()
        circle(this.x, this.y, this.r)
    }

    // this is called on every Vertex on the canvas. we want to check if the
    // mouse is within our vertex, and if so, update our offsets. the offset
    // is the vector from the origin to the point where the mouse clicked.
    pressed(x, y) {

    }

    // this should be called for every Vertex on the canvas whenever the
    // mouseReleased() event fires. we set our dragging flag to false :)
    notPressed(x, y) {

    }

    // a simple "does our Vertex area contain the point where the mouse
    // clicked" boolean function
    contains(x, y) {
    }
}