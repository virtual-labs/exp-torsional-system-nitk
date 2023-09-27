function runPage1() {
    background(255);
    image(bg, 0, 0)
    stroke(0);
    fill(0);

    // Drawing State-1: The texts are loaded:
    push();
    textSize(24);
    textFont("Times");
    text('Torsional System as a Two Degree Of Freedom System',140, 40);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    // System Initialized,updated:
    torsional_sys.initialise(T0.inp,w.inp,k1.inp,j1.inp,k2.inp,j2.inp);
    torsional_sys.update(t, factor);
    torsional_sys.show(0, 1, 0);

    // Position Graph-1 updated:
    position_graph1.update(torsional_sys.y1);
    position_graph1.draw(255, 0,0)

    // position Graph-2 updated:
    position_graph2.update(torsional_sys.y2);
    position_graph2.draw(255, 0, 0)

    strokeWeight(0)

    textSize(15);
    fill(230,154,42);
    text('ω1 = ' + torsional_sys.natomega1.toFixed(4) + " rad/s", 310, 520);
    text('ω2 = ' + torsional_sys.natomega2.toFixed(4) + " rad/s", 450, 520);
    text('ω/ω2 = ' + (torsional_sys.w/torsional_sys.natomega2).toFixed(4) + " rad/s", 310, 480)
    strokeWeight(0.5);    
    line(0, 440, 600, 440)
    line(300,440,300,580)
    fill(0,0,0)
    textSize(20);
    // text("FORCED VIBRATION SYSTEM", 115, 110);

    T0.draw();
    w.draw();
    k1.draw();
    k2.draw();
    j1.draw();
    j2.draw();

    button1.draw();
    button2.draw();

    t = t + dt;
}
