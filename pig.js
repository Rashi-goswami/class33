class Pig extends BaseClass {
    constructor(x,y) {
      
     super(x,y,50,50);
     this.Visiblity=255
     this.img=loadImage("sprites/enemy.png");
    }

    display(){
      if(this.body.speed >3){
        World.remove(world,this.body)
        push()
        this.Visiblity=this.Visiblity-5
        tint(255,this.Visiblity)
        image(this.img,this.body.position.x,this.body.position.y,50,50)
        pop()
      }
      else{
        super.display();
      }
    }
    score(){
     /* if(this.Visiblity == 0  ){
        score = score+4
        console.log(score)
      }*/

      if(this.Visiblity<0 && this.Visiblity>-1005){
        score++;
        console.log(score)
        
      }
    }
  };
  