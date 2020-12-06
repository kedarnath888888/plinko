class Partical {
    constructor(x,y,radius) { 
        var options={ 
            
            restitution:0.3
            
           } 
           
            this.radius=radius
             this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
            this.color = color(random(0,255),random(0,255),random(0,255))
              World.add(world, this.body);
            } display() { 
                var pos=this.body.position; 
                var angle= this.body.angle;
                push() 
                translate(pos.x, pos.y);
                rotate(angle);
                
                ellipseMode(RADIUS)
                  
                  noStroke();
                   fill("pink");
                   ellipse(0,0,this.radius, this.radius); 
                    
                    pop() 
                   } 
               }