//require('scripts/Model/Minefield.js');

var cvs = document.getElementById("canvas")
var cxt = cvs.getContext("2d")
var minefield = new Minefield(10,10,cvx,cxt)

function init() {
	//minefield = new Minefield(10,10, cvx, ctx)
}

function draw() {
	minefield.draw()
	cvx.drawImage(new Image().src = "img/blue.png", 0,0)
	requestAnimationFrame(draw);
}

alert("TEST")
init()
draw()
