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
// let k1;
// let k2;
// let j1;
// let j2;
// let w;
// let T0;

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
    // play = loadImage("images/blueplaydull.png");
    // pause = loadImage("images/bluepausedull.png");
    // graph = loadImage("images/graphbutton.png");
    // back = loadImage("images/bluebkdulls.png");
    // bg = loadImage("images/frame_copper_ver02.png");
    spr = loadImage("images/spring.png");
    
}

// deg1 and deg2 initialized (refer show function of system.js):
var deg1 = 180;
var deg2 = 1800;

// setup() function to make the whole arrangement load:
function setup() {
    textFont("Comic Sans MS");

    // // Creating the workspace:
    // createCanvas(width, height);
    var sketchCanvas = createCanvas(600, 450);
    sketchCanvas.parent("canvas-container");

    // System Initialized:
    torsional_sys = new System(450, 300, 90, 25);

    // Position Graph-1 initialized:
    position_graph1 = new Graph(50, 150, 100, 220, "Θ1", "t");

    // Position Graph-2 initialized:
    position_graph2 = new Graph(50, 300, 100, 220, "Θ2", "t");

    // The Dynamic Graph-1 object initialized with mag_func1 as argument:
    magFac1 = new DynamicGraph(55, 400, 300, 220, "Θ/Θst", "ω/ωn",0,20,0,300, System.mag_func1 , 0 );

    // The Dynamic Graph-2 object initialized with mag_func2 as argument:
    magFac2 = new DynamicGraph(55, 400, 300, 220, "Θ/Θst", "ω/ωn",0,20,0,300, System.mag_func2 , 255);

    varinit();
    T0 = $("#T0Spinner").spinner("value");
    w = $("#wSpinner").spinner("value");
    k1 = $("#k1Spinner").spinner("value");
    j1= $("#j1Spinner").spinner("value");
    k2= $("#k2Spinner").spinner("value");
    j2= $("#j2Spinner").spinner("value");

    
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
function simstate() {
    var imgfilename = document.getElementById("playpausebutton").src;
    imgfilename = imgfilename.substring(
      imgfilename.lastIndexOf("/") + 1,
      imgfilename.lastIndexOf(".")
    );
  
    if (animation) {
      noLoop();
      animation = false;
      document.getElementById("playpausebutton").src = "images/blueplaydull.svg";
      document.querySelector(".playPause").textContent = "Play";
    } else {
      loop();
      animation = true;
      document.getElementById("playpausebutton").src = "images/bluepausedull.svg";
      document.querySelector(".playPause").textContent = "Pause";
    }
  }

  function graphPlot() {
    graphStep = 1;
    document.querySelector(".graph-one").classList.remove("display-hide");
    document.querySelector(".graph-two").classList.add("display-hide");
    document.querySelector(".graph-div span").textContent = "Prev";
    document.querySelector(".graph-button").style.display = "none";
    screenchangePhase();
  }
  
  function screenchangePhase() {
    // document.getElementById("cleargraph").style.visibility = "visible";

    phaseAngleGraph();
  }
  function screenChangePrevious() {
    graphStep -= 1;
    if (graphStep > 0) {
      phaseAngleGraph();
      document.querySelector(".graph-two").classList.remove("display-hide");
      document.querySelector(".graph-div span").textContent = "Prev/Next";
      document.getElementById("cleargraph").style.visibility = "visible";
    } else {
      document.querySelector(".graph-div span").textContent = "";
      document.querySelector(".graph-button").style.display = "flex";
      document.querySelector(".graph-one").classList.add("display-hide");
      document.querySelector(".graph-two").classList.add("display-hide");
      page1 = true;
      page2 = false;
      page3 = false;
      runPage1();
    //   document.getElementById("cleargraph").style.visibility = "hidden";
  
      document.querySelector(".graph-zero").classList.remove("display-hide");
      document.querySelector(".graph-button span").textContent = "Graph";
      //  document.querySelector(".graph-button").classList.remove("display-hide");
      document.querySelector(".graph-div").classList.add("display-hide");
    }
  }
  function phaseAngleGraph() {
    // resetGraphs();
    page1 = false;
    page2 = true;
    page3 = false;
    runPage2();
  
    // magFac.initialise();
    // phaseAng.initialise();
  }

// Event Handling: (Buttons functionality)
// function mousePressed() {
//     handleEvents();
// }
