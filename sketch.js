var rainDrops = [];

function setup() 
{
	createCanvas(400 , 400);
	for (var i = 0; i < 300; i++) 
	{
		rainDrops[i] = new RainDrop();
	}
}

function draw() 
{
	background(0);
	for (var i = 0; i < rainDrops.length; i++)
	{
		rainDrops[i].show();
		rainDrops[i].move();
	}	
	

	var hr = hour();
	var min = minute();
	var sec = second();	

	textSize(50);
	stroke(255 , 150 , 100);
	strokeWeight(1);
	noFill()
	text(hr + ':' + min + ':' + sec , 100 , 200);
	
}

function RainDrop()
	{
		this.x = random(0 , width);
		this.y = random(-0 , -400);
		

	this.show = function()
	{
		stroke(255 , 151);
		strokeWeight(4);
		noFill();
		rect(this.x , this.y , 0.00005 , 10);
	}
	this.move = function()
	{
		this.y = this.y + random(1 , 2);

		if (this.y > 420) 
		{
			this.y = random(0 , -400);
		}
	}
		
}