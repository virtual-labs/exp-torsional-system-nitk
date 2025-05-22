class System  {
    constructor(x, y, _w, _h)   {
        this.width = _w;
        this.h = _h
        this.x_equilibrium = x;
        this.y_equilibrium = y;
        this.T0 = 0;
        this.w = 0;
        this.k1 = 0;
        this.j1 = 0;
        this.k2 = 0;
        this.j2 = 0;
        this.natomega1 =0;
        this.natomega2 =0;
        this.x1 = 0;
        this.x2 = 0;
    } // System Class

    // Function-1: Initializing the variables and finding the necessary values:
    initialise(_T0, _w, _k1,_m1 ,_k2 ,_m2)  {
        
        this.T0 = _T0;
        this.w = _w;
        this.k1 = _k1;
        this.j1 = _m1;
        this.k2 = _k2;
        this.j2 = _m2;

        // Computuation:
        this.term1 = ((this.k1+this.k2)*this.j2 + (this.k2)*this.j1)/(this.j1*this.j2);
        this.term2 = (this.k1*this.k2)/(this.j1*this.j2);

        // Natural Frequencies of j1 and j2:
       this.natomega1 = (0.5*this.term1 - 0.5*((this.term1**2 -4*this.term2)**0.5))**0.5;
       this.natomega2 = (0.5*this.term1 + 0.5*((this.term1**2 -4*this.term2)**0.5))**0.5;
        // this.natomega1 = 0;
        // this.natomega2 = Math.pow(this.k1*(this.j1 + this.j2)/(this.j1*this.j2) , 0.5);
        if(Math.abs(this.natomega1-this.w)<=0.1 || Math.abs(this.natomega2-this.w)<=0.1)
        {
            if(this.w<this.natomega1 || this.w <this.natomega2)
            {
                this.w = this.w+0.05;
            }
            else
            {
                this.w = this.w-0.05;
            }
        }

        //Forced Vibration:
        this.denom= ((this.j1*this.j2*Math.pow(this.w,4))-((this.j1*this.k2+(this.j2*(this.k1+this.k2)))*Math.pow(this.w,2))+(this.k1*this.k2));
        // !!!!!Note: Formula for x1 and x2 changed!!
        this.x1 = ((this.k1+this.k2-this.j2*Math.pow(this.w,2))*this.T0)/this.denom;
        //x1 changed to T0*(k1+k2-j2*w^2/denom)
        this.x2 = (this.k1*this.T0)/this.denom;

        // // r-values:
        // this.r1 = (this.k2)/(-this.j2*(this.natomega1**2)+this.k2);
        // this.r2 = (this.k2)/(-this.j2*(this.natomega2**2)+this.k2);
            

        // // x11 and x12 (Coefficients of x1):
        // this.x1_1 = (this.r2*30 - 30)/(this.r2-this.r1);
        // this.x1_2 = (-this.r1*30 + 30)/(this.r2-this.r1);

        // // The values of x1 and x2:
        // this.x1 = this.x1_1*(Math.cos(this.natomega1*t)) + this.x1_2*(Math.cos(this.natomega2*t));
        // this.x2 = this.r1*this.x1_1*(Math.cos(this.natomega1*t)) + this.r2*this.x1_2*(Math.cos(this.natomega2*t));
    }

    // Function-2: Updating the values of x1 and x2 by multiplying with a multiplying factor(if needed):
    update(t, _mulfact)  {
        
        // Function used for amplifying the x1 & x2 values if needed: (As of now set as 1)
        // this.y2 = (_mulfact*this.x2);
        // this.y1 = (_mulfact*this.x1);
        this.y1 = -(_mulfact*this.x1 * Math.sin(this.natomega1*t));
        this.y2 = -(_mulfact*this.x2 * Math.sin(this.natomega2*t));
    }

    // Function-3: Drawing the setup:
    show(_stroke, _strockweight, _fill) {
        
        // Circle-1: (Radius is calculated from the input j1 value)
        this.radius1 = Math.pow(this.j1*10**2,1/2);

        // Circle-2: (Radius is calculated from the input j2 value)
        this.radius2 = Math.pow(this.j2*10**2,1/2);

        // Stroke, Strokeweight and fill are set according to arguments:
        stroke(_stroke);
        strokeWeight(_strockweight);
        fill(_fill);
     
        // Drawing State-1: (j2 is drawn first as j2>j1 and we would want j1 to be superimposed on j2)
        push();
        textSize(12);
        fill(0)
        translate(this.x_equilibrium ,this.y_equilibrium-90)
        // text("j2",this.radius2 ,this.radius2)
        rotate(radians(deg2));
        fill (255,0,0);
        ellipse(0 ,0, 2*this.radius2, 2*this.radius2)
        pop();

        // Drawing State-2: (j1 is drawn along with the radial line)
        push();
        textSize(12)
        translate(this.x_equilibrium ,this.y_equilibrium-90)
        // fill(0);
        // textSize(12)
        // text("j1",this.radius1,this.radius1)
        rotate(radians(deg1));
        fill(255,200,19);
        ellipse(0 ,0, 2*this.radius1, 2*this.radius1)
        stroke("black");
        line(0,this.radius1,0,0)
        pop();

        // Drawing State-3: (To make the radial line of j2 visible as it would be overwritten by j1 if included in Drawing State-1)
        push();
        
        translate(this.x_equilibrium ,this.y_equilibrium-90)
        stroke("blue");
        rotate(radians(deg2));
        line(0 , this.radius2,0,0)
        pop();
        
        // The values of deg1 and deg2 are constantly updated: (as show() function is a loop)
        // deg1 = this.x1_1*(Math.cos(this.natomega1*t)) + this.x1_2*(Math.cos(this.natomega2*t));
        // deg2 = this.r1*this.x1_1*(Math.cos(this.natomega1*t)) + this.r2*this.x1_2*(Math.cos(this.natomega2*t));
        deg1 = this.y1
        deg2 = this.y2
    }

    // Function-4: Defining the function for Dynamic Graph-1:
    static mag_func1(x, obj)  {

        let mu = obj.j1/obj.j2;
        let temp1 = x;
        let temp2 = Math.pow(((obj.natomega2*x)/obj.natomega1),2);
        let denom = ((1+mu)*temp2) + Math.pow(temp1,2);
        let solution = (1-Math.pow(temp1,2)) / ((Math.pow(temp1,2)*temp2)-denom+1)
        if (abs(solution)<200){
            return(abs(solution));
        }
        else{
            return (200);
        }
         
        
    }

    // Function-5: Defining the function for Dynamic Graph-2:
    static mag_func2(x, obj)  {
        let mu = obj.j1/obj.j2;
        let temp1 = x;
        let temp2 = Math.pow(((obj.natomega2*x**x)/obj.natomega1),2);
        let denom = ((1+mu)*temp2) +Math.pow(temp1,2);
        let solution = (1)/ ((Math.pow(temp1,2)*temp2)-denom+1);
        
        // let solution = obj.r1*obj.x1_1*(Math.cos(obj.natomega1*t)) + obj.r2*obj.x1_2*(Math.cos(obj.natomega2*t));
        if (abs(solution)<200){
            return(abs(solution));
        }
        else {
            return (200);
        }
        
    }

    
}
