class Box{
    constructer(){
        var bodyOption= {
            restitution: 1.0
            }            
        this.body= Bodies.rectangle(500,200,40,40, bodyOption);
        World.add(world, this.body);
    this.width= width;
    this.height= height;
    }

    display(){
        //var pos= this.body.position;
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
  
    }
}