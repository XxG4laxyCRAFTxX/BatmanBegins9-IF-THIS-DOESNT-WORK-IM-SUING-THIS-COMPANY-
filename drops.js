class drops {
    constructor(x, y){
    this.body = Bodies.circle(x, y, 10)
    World.add (world, this.body);
    
    }
updateY(){
if(this.body.position.y > 700){
Matter.Body.setPosition(this.body, {x : random(0,400), y : random(0, 400)});
  }    
 }  
 display(){
     fill("blue");
     ellipseMode (CENTER);
     ellipse (this.body.position.x, this.body.position.y, 10, 10);
 }
}
