// Canvas (Workspace):
let width = 800;
let height = 600;

// Counter:
let t = 0.05;
let dt = 0.01;

// System:
let torsional_sys;

// Graphs:
let position_graph1;
let position_graph2;
let magFac;

// Inputs:
let k1;
let k2;
let j1;
let j2;
let w;
let T0;

// Multiplying Factor: Change it if needed for avoiding "Batman!!"
let factor = 5; //(Set as 10...can be adjusted if needed)

// Images to be loaded:
let img;
let button1;
let button2;
let button3;
let button4;
let button5;
let spr;

// Pages:
let page1 = true;
let page2 = false;
let page3 = false;

// Animation:
let animation = true;
let touch = false;

// Buttons:
let clear;

// preload() function to load the necessary images before running:
function preload() {
    play = loadImage("images/blueplaydull.png");
    pause = loadImage("images/bluepausedull.png");
    graph = loadImage("images/graphbutton.png");
    back = loadImage("images/bluebkdulls.png");
    bg = loadImage("images/frame_copper_ver02.png");
    spr = loadImage("images/spring.png");
    
}

// deg1 and deg2 initialized (refer show function of system.js):
var deg1 = 180;
var deg2 = 1800;

// setup() function to make the whole arrangement load:
function setup() {
    textFont("Comic Sans MS");

    // Creating the workspace:
    createCanvas(width, height);

    // System Initialized:
    torsional_sys = new System(450, 365, 90, 25);

    // Position Graph-1 initialized:
    position_graph1 = new Graph(50, 200, 100, 220, "Θ1", "t");

    // Position Graph-2 initialized:
    position_graph2 = new Graph(50, 350, 100, 220, "Θ2", "t");

    // The Dynamic Graph-1 object initialized with mag_func1 as argument:
    magFac1 = new DynamicGraph(55, 400, 300, 220, "Θ/Θst", "ω/ωn",0,20,0,300, System.mag_func1 , 0 );

    // The Dynamic Graph-2 object initialized with mag_func2 as argument:
    magFac2 = new DynamicGraph(55, 400, 300, 220, "Θ/Θst", "ω/ωn",0,20,0,300, System.mag_func2 , 255);

    // Input Objects initialized:
    T0 = new NumberInput(620, 140, "T0(N)", 500, 1000, 750, 50,1, true);
    //Change w back to 5:
    w= new NumberInput(620, 190, "ω(rad/sec)", 0, 50, 4.3, 0.01,0.01, true);
    k1 = new NumberInput(620, 240, "K1 (N/m)", 2000, 5000, 2500, 50,1, true);
    // Change j1 to 25 
    j1 = new NumberInput(620, 290, "J1(kg-m2)", 10, 50, 30, 5,1, true);
    // Change k2 to 2500
    k2 = new NumberInput(620, 340, "K2 (N/m)", 2000, 5000, 2500, 50,1, true);
    // Change j2 to 75
    j2 = new NumberInput(620, 380, "J2(kg-m2)", 60, 100, 60, 5,1, true);

    // Button Objects initialized:
    button1 = new Button(645, 430, pause)
    button2 = new Button(706, 430, graph)
    button3 = new Button(645,460,back)
    button4 = new Button(705, 460, graph)
    button5 = new Button(645,470,back)
    
}

// draw() function to run the respective pages:
function draw() {
    if (page1) {
        runPage1();
    }

    if (page2) {
        runPage2();
    }

   /* if (page3){
        runPage3();
    }*/
}

// Event Handling: (Buttons functionality)
function mousePressed() {
    handleEvents();
}
