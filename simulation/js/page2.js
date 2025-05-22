function runPage2() {
    background(255);
    // image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    push();
    textSize(16);
    textFont("Nunito");
    // text('Torsional System as a Two Degree Of Freedom System',100, 40);
    textSize(16);
    // text("CONTROLS", 655, 417);
    // text("VARIABLES", 655, 107);
    pop();

    strokeWeight(0);
    textSize(15);
    fill(230,154,42);
    
    // text('ω1 = ' + torsional_sys.natomega1.toFixed(4) + " rad/s", 310, 520);
    // text('ω2 = ' + torsional_sys.natomega2.toFixed(4) + " rad/s", 450, 520);
    // text('ω/ω2 = ' + (torsional_sys.w/torsional_sys.natomega2).toFixed(4) + " rad/s", 310, 480)


    // text('Θ1/Θst = ' + (abs(torsional_sys.x1/(torsional_sys.T0/torsional_sys.k1))).toFixed(4) , 150, 480)
    // text('Θ = ' + (abs(torsional_sys.x1)).toFixed(4) , 150, 520)
    // text('Θst = ' + ((torsional_sys.T0/torsional_sys.k1)).toFixed(4) , 150, 560)

    // text('Θ2/Θst =' + (abs(torsional_sys.x2/(torsional_sys.T0/torsional_sys.k1))).toFixed(4) , 20, 480)
    // text('Θ2 =' + (abs(torsional_sys.x2)).toFixed(4) , 20, 520)
    // text('Θst = ' + ((torsional_sys.T0/torsional_sys.k1)).toFixed(4) , 20, 560)

    document.querySelector("#Θ1").textContent =+ (abs(torsional_sys.x1/(torsional_sys.T0/torsional_sys.k1))).toFixed(4) ;
    document.querySelector("#Θ").textContent =+ (abs(torsional_sys.x1)).toFixed(4) ;
    document.querySelector("#Θst").textContent =+ ((torsional_sys.T0/torsional_sys.k1)).toFixed(4)  ;
    document.querySelector("#Θ22").textContent =+ (abs(torsional_sys.x2/(torsional_sys.T0/torsional_sys.k1))).toFixed(4) ;
    document.querySelector("#Θ2").textContent =+(abs(torsional_sys.x2)).toFixed(4) ;
    document.querySelector("#Θst2").textContent =+ ((torsional_sys.T0/torsional_sys.k1)).toFixed(4) ;
    torsional_sys.initialise(T0,w,k1,j1,k2,j2);
    torsional_sys.update(t, factor);
    torsional_sys.show(0, 1, 0);
    $("#r1").css("display","block");
    strokeWeight(1);    
    // line(0, 440, 600, 440)
    // line(300,440,300,580)

  
    magFac1.initialise();
    magFac1.draw();

    magFac2.initialise();
    magFac2.draw();

    

    stroke('red');
    strokeWeight(5);
    line(250 , 75 , 270 , 75);
    strokeWeight(1);
    stroke('black')
    strokeWeight(0);
    textSize(16);
    text('Frequency response of Disc 1' , 275 , 80);


    
    stroke('blue');
    strokeWeight(5);
    line(250 , 55 , 270 , 55);
    strokeWeight(1);
    strokeWeight(0);
    stroke('black')
    textSize(16);
    text('Frequency response of Disc 2' , 275 , 60);

    let add = 330;
    let dy = 280;
    stroke('blue')
    strokeWeight(5)
    point(265 , 110)
    strokeWeight(0)
    stroke('blue')
  //  text('w2' , 55+add ,100 +dy)
  text('ω\u2082' , 280 ,115)
    stroke('red')
    strokeWeight(5)
    point(265 , 135);
    strokeWeight(0)
    text('ω\u2081' , 280, 140)
 
    stroke('red');
    strokeWeight(8);
    point(50 + torsional_sys.natomega1*8, 400);
 
    stroke('blue');
    strokeWeight(8);
    point( 50+ torsional_sys.natomega2*8, 400);
    strokeWeight(1)

  
    textSize(12)
    strokeWeight(1)
    fill(0);
    stroke(0);
    text("j1",450,200)
      text("j2",510,220)
 
    T0 = $("#T0Spinner").spinner("value");
    w = $("#wSpinner").spinner("value");
    k1 = $("#k1Spinner").spinner("value");
    j1= $("#j1Spinner").spinner("value");
    k2= $("#k2Spinner").spinner("value");
    j2= $("#j2Spinner").spinner("value");
    t = t+dt;
    //clear.mousePressed(clearMe);
}
