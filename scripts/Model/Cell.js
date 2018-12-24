class Cell {
	
	  constructor(x, y) {
        this.isMine = null
        this.isMarked = false
        this.isRevealed = false
        this.numberOfNeighbouringMines = -1;
        this.image = new Image()
        setImage("img/blue.png")
        
        this.x = x
        this.y = y
    }
    
    function setImage(src) {
    	this.image.src = src
    }
    
    function setMine() {
    	this.isMine = true
    	setImage()
    }
    
    function setMarked() {
    	this.isMarked = !isMarked
    }
    
    function setRevealed() {
    	this.isRevealed = true;
    }
    
    
}																																																				