class SlingShot {
    constructor(body1,point){
        var options={
            bodyA:body1,
            pointB:point,
            length:10,stiffness:0.3,
        }
        this.sling = Matter.Constraint.create(options);
        World.add (world,this.sling);
    }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
