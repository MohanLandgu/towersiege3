class orangeColor extends Box{

    constructor(x,y,){
    
    super(x,y,30,40)
    this.visible=255
    
    }
    
    
    display(){
    
        fill("orange");
        if(this.body.speed<1){


            super.display();
           }
           else{
            World.remove(world,this.body);
                 push();
                 this.visible=this.visible-10
                 tint(255,this.visible)
                 pop();
           }
            
       
    }
    
    }