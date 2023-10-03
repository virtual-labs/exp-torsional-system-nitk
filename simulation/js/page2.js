function runPage2() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    push();
    textSize(24);
    textFont("Times");
    text('Torsional System as a Two Degree Of Freedom System',140, 40);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    strokeWeight(0);
    textSize(15);
    fill(230,154,42);
    
    text('ω1 = ' + torsional_sys.natomega1.toFixed(4) + " rad/s", 310, 520);
    text('ω2 = ' + torsional_sys.natomega2.toFixed(4) + " rad/s", 450, 520);
    text('ω/ω2 = ' + (torsional_sys.w/torsional_sys.natomega2).toFixed(4) + " rad/s", 310, 480)


    text('Θ1/Θst = ' + (abs(torsional_sys.x1/(torsional_sys.T0/torsional_sys.k1))).toFixed(4) , 150, 480)
    text('Θ = ' + (abs(torsional_sys.x1)).toFixed(4) , 150, 520)
    text('Θst = ' + ((torsional_sys.T0/torsional_sys.k1)).toFixed(4) , 150, 560)

    text('Θ2/Θst =' + (abs(torsional_sys.x2/(torsional_sys.T0/torsional_sys.k1))).toFixed(4) , 20, 480)
    text('Θ2 =' + (abs(torsional_sys.x2)).toFixed(4) , 20, 520)
    text('Θst = ' + ((torsional_sys.T0/torsional_sys.k1)).toFixed(4) , 20, 560)


    torsional_sys.initialise(T0.inp,w.inp,k1.inp,j1.inp,k2.inp,j2.inp);
    torsional_sys.update(t, factor);
    torsional_sys.show(0, 1, 0);
 
    strokeWeight(1);    
    line(0, 440, 600, 440)
    line(300,440,300,580)

  
    magFac1.initialise();
    magFac1.draw();

    magFac2.initialise();
    magFac2.draw();

    

    stroke('red');
    strokeWeight(5);
    line(250 , 135 , 270 , 135);
    strokeWeight(1);
    stroke('black')
    textSize(16);
    text('Frequency response of Disc 1' , 275 , 140);


    
    stroke('blue');
    strokeWeight(5);
    line(250 , 115 , 270 , 115);
    strokeWeight(1);
    stroke('black')
    textSize(16);
    text('Frequency response of Disc 2' , 275 , 120);

    let add = 330;
    let dy = 280;
    stroke('blue')
    strokeWeight(5)
    point(265 , 170)
    strokeWeight(1)
    stroke('blue')
  //  text('w2' , 55+add ,100 +dy)
  text('w2' , 280 ,170)
    stroke('red')
    strokeWeight(5)
    point(265 , 185);
    strokeWeight(1)
    text('w1' , 280, 190)
 
    stroke('red');
    strokeWeight(8);
    point(50 + torsional_sys.natomega1*8, 400);
 
    stroke('blue');
    strokeWeight(8);
    point( 50+ torsional_sys.natomega2*8, 400);
    strokeWeight(1)


    button3.draw()
    //button4.draw()

    T0.draw();
    w.draw();
    k1.draw();

    j1.draw();
    k2.draw();
    j2.draw();

    t = t+dt;
    //clear.mousePressed(clearMe);
}
