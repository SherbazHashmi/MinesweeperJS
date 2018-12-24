class Cell {
	
	  constructor(x, y) {
        this.isMine = null
        this.isMarked = false
        this.isRevealed = false
        this.numberOfNeighbouringMines = -1
        this.image = new Image()
        this.image.src = "img/blue.png"
        this.x = x
        this.y = y
    }
    
    setImage(src) {
    	this.image.src = src
    }
    
    setMine() {
    	this.isMine = true
    	this.setImage()
    }
    
    get getImage() {
    	return this.image
    }
    
    setMarked() {
    	this.isMarked = !isMarked
    }
    
    setRevealed() {
    	this.isRevealed = true;
    }
    
    
}																																																				