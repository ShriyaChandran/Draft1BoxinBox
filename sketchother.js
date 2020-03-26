
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,bodies;

// remember to create an array of boxes.

 
var boxes = [];
var gSlider;
 
 
function setup() {
    createCanvas(400, 400);
    for (var i =0;i<500;i++){
        boxes[i] = {
            x:mouseX,
            y:mouseY,

            display: function(){

            }
        }
    }
    // Create an instance of Engine, World,Bodies
    engine = Engine.create();
    world = engine.world
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(mouseX,mouseY,400,10);
}
 
function mousePressed() {
    if (mouseY < 350) {
     // Every time a mouse press occures create a new box.
     boxesthis.show();
     index = index+1;

    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    
    // Use a for loop to show all the boxes
    for (var i = 0; i<boxes.length;i++){

      ground.display();

    }
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
        restitution:1.2
    }
 
    // create your box using the function arguments
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = width;
    this.h = height;
    World.add(world, this.body);
    // x - x-coordinate
    this.x = mouseX;
    // y - y-coordinate
    this.y = mouseY;
    // w - width of the box
    width = mouseX/5
    // h - height of the box
    height = mouseY/5
 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
   this.show = function () {
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       rotate(angle);
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
       this.display;
    }
} 