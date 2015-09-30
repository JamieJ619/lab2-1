
var canvas;
var ctx;


function Game()
{
	player = new Player();
	goal = new Goal();
	initialiseCanvas();


	this.direction = 0;
	this.check = false;

	// 1 = up "keycode = 87"
	// 2 = down "keycode = 83"
	// 3 = left "keycode = 65"
	// 4 = right "keycode = 68"
}
Game.prototype.keyInputUp = function(e)
{
	this.direction = 0;
}
Game.prototype.keyInputDown = function(e)
{
	console.log(e.keycode);
	if(e.keyCode == 87)
		this.direction = 1;
	else if(e.keyCode == 83)
		this.direction = 2;
	else if(e.keyCode == 65)
		this.direction = 3;
	else if(e.keyCode == 68)
		this.direction = 4;
}

Game.prototype.gameLoop = function()
{

	ctx.clearRect(0,0,canvas.width, canvas.height);

	//console.log("GameLoop");
	window.requestAnimationFrame(game.gameLoop);

	player.Update(this.direction);

	if(!this.check)
	{
		if(player.CheckCollision(goal))
		{
			goal.Update();
			this.check = true;
		}
	}

	if(this.check)
		DrawGameOver();
	
	player.Draw();
	goal.Draw();
}

function initialiseCanvas()
{

	canvas = document.createElement("canvas");
	// CTX is the context that we will draw on.

	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
function DrawGameOver()
{
	ctx.save();
	//add in your own colour
	ctx.fillStyle = rgb(100,100,0);
	//change this
	ctx.font = 'italic 40pt Calibri';
	//otherwise bottom
	ctx.textBaseline = "top";
	//Put your message here; x and y are where the message will appear...
	ctx.fillText("You Win!!", 200, 200);
	//Any idea what save and restore do?
	ctx.restore();
}
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
