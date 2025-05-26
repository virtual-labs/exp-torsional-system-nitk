﻿function runPage3() {
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

    textSize(15);
    fill(230,154,42);
    strokeWeight(0);
    text('ω1 = ' + torsional_sys.natomega1.toFixed(4) + " rad/s", 310, 520);
    text('ω2 = ' + torsional_sys.natomega2.toFixed(4) + " rad/s", 450, 520);
    text('ω/ω2 = ' + (torsional_sys.w/torsional_sys.natomega2).toFixed(4) + " rad/s", 310, 480)
    
    text('Θ2/Θst =' + (abs(torsional_sys.x2/(torsional_sys.T0/torsional_sys.k1))).toFixed(4) , 150, 480)
    text('Θ2 =' + (abs(torsional_sys.x2)).toFixed(4) , 150, 520)
    text('Θst = ' + ((torsional_sys.T0/torsional_sys.k1)).toFixed(4) , 150, 560)

    strokeWeight(0.5);    
    line(0, 440, 600, 440)
    line(300,440,300,580)
    torsional_sys.initialise(T0.inp,w.inp,k1.inp,j1.inp,k2.inp,j2.inp);
    torsional_sys.update(t, factor);
    torsional_sys.show(0, 1, 0);

    magFac2.initialise();
    magFac2.draw();


    button5.draw()

    T0.draw();
    w.draw();
    k1.draw();

    j1.draw();
    k2.draw();
    j2.draw();
    t = t+dt;
    //clear.mousePressed(clearMe);
}
