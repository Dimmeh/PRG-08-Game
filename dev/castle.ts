/// <reference path="gameObject.ts" />

class Castle extends GameObject{
    public health:number;

    constructor(x:number,y:number){
        super(x,y);

        this.health = 250;

        let container: HTMLElement = document.getElementById("container");

        this.div = document.createElement("castle");
        container.appendChild(this.div);

        this.div.style.transform = "translate("+this.x+"px,"+this.y+"px)";
    }

    public takeDamage(d:number){
        this.health -= d;
    }

    public checkHealth():number{
        return this.health;
    }
}