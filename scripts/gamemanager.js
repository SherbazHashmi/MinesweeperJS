//require('scripts/Model/Minefield.js');

var image = new Image()
image.src = "img/blue.png"

var cvs = document.getElementById("canvas")
var ctx = cvs.getContext("2d")
let debug_text = document.getElementById("debug")


function init() {
	this.minefield = new Minefield(cvs.height/ 100, cvs.width /100, cvs, ctx, debug_text)
}

function draw() {
	
	minefield.draw()
	}

// Logs Error

function log(input) {
	debug_text.textContent = input
}

init()
draw()
requestAnimationFrame(draw)

