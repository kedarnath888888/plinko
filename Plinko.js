class Plinko {
    constructor(x,y,radius) { 
        var options={ 
            isStatic:true
           
           } 
           
           this.radius=radius;
             this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
             this.radius=radius
            this.image=loadImage("paper.png")
              World.add(world, this.body);
            } 
            display() { 
                
               
                    var pos =this.body.position;
                   ellipseMode(RADIUS);
                   fill("white");
                   ellipse(0,0,10, 10); 
                 
                   } 
               }