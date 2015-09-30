// Global Variables
var game;



function main()
{
	// New game object
	game = new Game();
	game.gameLoop();
	window.addEventListener("keyup", game.keyInputUp);
	window.addEventListener("keydown", game.keyInputDown);
}
