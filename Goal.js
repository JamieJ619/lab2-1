
function Goal()
{
	this.x = 200;
	this.y = 200;
	this.width = 50;
	this.height = 50;
	this.alive = true;
}

Goal.prototype.Update = function()
{
	this.alive = false;
}

Goal.prototype.Draw = function()
{
	if(this.alive)
	{
		ctx.fillStyle = rgb(255,0,0);
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
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