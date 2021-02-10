class block{
	constructor(x,y)
	{
		
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
        this.width=50;
        this.height=50;
		this.body=Bodies.rectangle(this.x, this.y, 50,50, options)
		World.add(world, this.body);
	}

	display()
	{
		var blockPos=this.body.position;	
		push()
		translate(blockPos.x, blockPos.y);
	    rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
        rect(0,0, this.width, this.height)
		pop()
 }
}