class Package {
  constructor(x, y) {
    var options = {
        'restitution':0.1,
    }

    this.body = Bodies.rectangle(x, y,10, 10, options);
    this.width = 10;
    this.height = 10;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
