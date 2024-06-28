let  T0, w, k1, j1,k2, j2;

function varinit() {
  varchange();
  $("#T0Slider").slider("value", 750);
  $("#T0Spinner").spinner("value", 750);

  $("#wSlider").slider("value", 4.3);
  $("#wSpinner").spinner("value", 4.3);

  $("#k1Slider").slider("value", 2500);
  $("#k1Spinner").spinner("value", 2500);

  $("#j1Slider").slider("value", 30);
  $("#j1Spinner").spinner("value", 30);

  $("#k2Slider").slider("value", 2500);
  $("#k2Spinner").spinner("value", 2500);

  $("#j2Slider").slider("value", 60);
  $("#j2Spinner").spinner("value", 60);
}

// Initialise and Monitor variable containing user inputs of system parameters.
//change #id and repeat block for new variable. Make sure new <div> with appropriate #id is included in the markup
function varchange() {
  //Variable stiffness slider and number input types
  $("#T0Slider").slider({ max: 1000, min: 500, step: 50 }); // slider initialisation : jQuery widget
  $("#T0Spinner").spinner({max: 1000, min: 500, step: 50 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#T0Slider").on("slide", function (e, ui) {
    $("#T0Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#T0Spinner").on("spin", function (e, ui) {
    $("#T0Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#T0Spinner").on("change", function () {
    varchange();
  });

  //Variable mass slider and number input types
  $("#wSlider").slider({ max: 50, min: 0, step: 0.01 }); // slider initialisation : jQuery widget
  $("#wSpinner").spinner({ max: 50, min: 0, step: 0.01}); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#wSlider").on("slide", function (e, ui) {
    $("#wSpinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#wSpinner").on("spin", function (e, ui) {
    $("#wSlider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#wSpinner").on("change", function () {
    varchange();
  });

  //Variable damping slider and number input types
  $("#k1Slider").slider({ max: 5000, min: 2000, step: 50}); // slider initialisation : jQuery widget
  $("#k1Spinner").spinner({ max: 5000, min: 2000, step: 50}); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k1Slider").on("slide", function (e, ui) {
    $("#k1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("spin", function (e, ui) {
    $("#k1Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k1Spinner").on("change", function () {
    varchange();
  });

  //Variable magnitude slider and number input types
  $("#j1Slider").slider({ max: 50, min: 10, step: 5 }); // slider initialisation : jQuery widget
  $("#j1Spinner").spinner({ max: 50, min: 10, step: 5 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#j1Slider").on("slide", function (e, ui) {
    $("#j1Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#j1Slider").on("spin", function (e, ui) {
    $("#j1Spinner").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#j1Spinner").on("change", function () {
    varchange();
  });

  //Variable frequency slider and number input types
  $("#k2Slider").slider({ max: 5000, min: 2000, step: 50 }); // slider initialisation : jQuery widget
  $("#k2Spinner").spinner({max: 5000, min: 2000, step: 50 }); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#k2Slider").on("slide", function (e, ui) {
    $("#k2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#k2Spinner").on("spin touchstart", function (e, ui) {
    $("#k2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  
  $("#k2Spinner").on("change", function () {
    varchange();
  });
 
  //Variable frequency slider and number input types
  $("#j2Slider").slider({ max: 100, min: 60, step: 5}); // slider initialisation : jQuery widget
  $("#j2Spinner").spinner({max: 100, min: 60, step: 5}); // number initialisation : jQuery widget
  // monitoring change in value and connecting slider and number
  // setting trace point coordinate arrays to empty on change of link length
  $("#j2Slider").on("slide", function (e, ui) {
    $("#j2Spinner").spinner("value", ui.value);
    ptx = [];
    pty = [];
  });
  $("#j2Spinner").on("spin touchstart", function (e, ui) {
    $("#j2Slider").slider("value", ui.value);
    ptx = [];
    pty = [];
  });
  
  $("#j2Spinner").on("change", function () {
    varchange();
  });
 

  // $("#frequencySpinner").on("touchstart", function (e) {
  //   // Your touch event logic here
  //   varchange();
  // });
  varupdate();
}

function varupdate() {
  $("#T0Slider").slider(
    "value",
    $("#T0Spinner").spinner("value")
  );
  $("#wSlider").slider("value", $("#wSpinner").spinner("value"));
  $("#k1Slider").slider("value", $("#k1Spinner").spinner("value"));
  $("#j1Slider").slider(
    "value",
    $("#j1Spinner").spinner("value")
  );
  $("#k2Slider").slider(
    "value",
    $("#k2Spinner").spinner("value")
  );

  $("#j2Slider").slider(
    "value",
    $("#j2Spinner").spinner("value")
  );
  
  T0 = $("#T0Spinner").spinner("value");
  w = $("#wSpinner").spinner("value");
  k1 = $("#k1Spinner").spinner("value");
  j1= $("#j1Spinner").spinner("value");
  k2= $("#k2Spinner").spinner("value");
  j2= $("#j2Spinner").spinner("value");




  // width = document.querySelector("#canvas-container").width;
  // height = document.querySelector("#canvas-container").height;
  // document.querySelector("#mass").innerHTML =  .toFixed(4) + " rad/s"; //Displaying values
  // document.querySelector("#k").innerHTML = η.toFixed(4);
  // document.querySelector("#c").innerHTML = z.toFixed(4);
}
function movetoTop() {

  const firstDiv = document.querySelector("#simulation");
  if (firstDiv) {
      firstDiv.scrollIntoView({ behavior: "smooth" });
  }
}
