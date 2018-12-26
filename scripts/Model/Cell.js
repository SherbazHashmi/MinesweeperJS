class Cell {
	
	  constructor(x, y) {
        this.mine = false
        this.isMarked = false
        this.isRevealed = false
        this.mineNumber = -1
        this.image = new Image()
        this.image.src = "img/blue.png"
        this.x = x
        this.y = y
    }
    
    setImage(src) {
    	this.image.src = src
    }
    
    setMine() {
    	this.mine = true
    	this.setImage("img/purple.png")
    }
    
    get getImage() {
    	return this.image
    }
    
    mark() {
    	this.isMarked = !isMarked
    }
    
    reveal() {
    	this.isRevealed = true;
    	if(this.mine) {
    		setImage("img/purple.png")
    	}
    }
    
    setMineNumber(minefield, rowLength, columnLength) {
    	let x = this.x
    	let y = this.y
    	var mineNumber = 0;
    	var mfa = minefield.mines
    	// Celll Indices Encoded as [Row, Column] pairs
    	let cellIndices = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    	for(var i = 0; i < cellIndices.length; i++) {
    		let r = cellIndices[i][0] + y
    		let c = cellIndices[i][1] + x
    		
    		if(!(isNaN(r) || isNaN(c)) && (r >= 0 && c >= 0) && (r<= rowLength && c <= columnLength) && (minefield[r][c].isMine())){
    			mineNumber++;
    			}
    		}
    	this.mineNumber = mineNumber
    	//this.setImage("/img/1.pn");
    }
    
    getMineNumber() {
    	return this.mineNumber;
    }
    
    
    isMine() {
    	return this.mine
    }
    
   
    
     
    
}																																																				