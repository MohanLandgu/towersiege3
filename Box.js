class Box{

    constructor(x,y,width,height){

        var balloption={
            isStatic:false,
           restitution:0.5,
            friction:1.0,
            density:1.0
        }
    this.body=Bodies.rectangle(x,y,width,height,balloption);
    this.width=width
    this.height=height
    World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
       
        rect(this.body.position.x,this.body.position.y,this.width,this.height );
    }









}