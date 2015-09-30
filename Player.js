
function Player()
{
	this.x = 50;
	this.y = 50;
	this.width = 20;
	this.height = 20;
	this.speed = 2;
}
Player.prototype.Update = function(e)
{
	if(e == 1)
		this.y -= this.speed;
	else if( e == 2)
		this.y += this.speed;
	else if( e == 3)
		this.x -= this.speed;
	else if( e == 4)
		this.x += this.speed;
}

Player.prototype.CheckCollision = function(e)
{ 
	var collides = false;
         
    //do the two bounding boxes overlap?
    if ((this.x < e.x + e.width) &&
    	(this.x + this.width > e.x) &&
    	(this.y + this.height > e.y) &&
    	(this.y < e.y + e.height) )
    	{           
            collides = true;     
        }
         
        return collides;
};




Player.prototype.Draw = function()
{
	ctx.fillStyle = rgb(0,255,0);
	ctx.fillRect(this.x, this.y, 20, 20);
}
/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}