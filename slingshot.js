class Slingshot{
     constructor(bodyA,pointB){
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        var options={
            length:10,
            stiffness:0.04,
            bodyA:bodyA,
            pointB:pointB
        
        }
    this.chain=Matter.Constraint.create(options)
    
     World.add(world,this.chain)
     }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.pointB
       push()
       strokeWeight(6)
       stroke(48,22,8)
       //line(pointA.x,pointA.y,pointB.x,pointB.y);
       if(pointA.x<220){
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
      line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
      image(this.sling3,pointA.x-30,pointA.y-10,15,30)

       }
       else{
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y)
        image(this.sling3,pointA.x+25,pointA.y-10,15,30)
       }
      
       pop()
        }
    }
    fly(){
        this.chain.bodyA=null
    }
    attach(body){
        this.chain.bodyA=body
    }
}


