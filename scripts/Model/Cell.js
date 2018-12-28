class Cell {
	
	  constructor(r, c) {
        this.mine = false;
        this.isMarked = false;
        this.isRevealed = false;
        this.mineNumber = -1;
        this.image = new Image();
        this.image.src = "img/blue.png";
        this.r = r;
        this.c = c
    }
    
    setImage(src) {
    	this.image.src = src
    }
    
    setMine() {
    	this.mine = true;
    	this.setImage("img/light-blue.png")
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
    		this.src= ""
    	}
    }


    
    setMineNumber(minefield, rowLength, columnLength) {
        let cellIndices = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        if (!this.mine) {
              var mineNumber = 0;
              // Celll Indices Encoded as [Row, Column] pairs
              for (var i = 0; i < cellIndices.length; i++) {
                  let r = cellIndices[i][0] + this.r;
                  let c = cellIndices[i][1] + this.c;
                  if ((!isNaN(r) && !isNaN(c)) && (r >= 0 && c >= 0) && (r <= rowLength && c <= columnLength ) && (minefield[r][c].isMine())) {
                      mineNumber++;
                  }
              }
            this.mineNumber = mineNumber;
        }
          if( isNaN(mineNumber)) {
              console.log("Undefined Mine Number on : " + this.r + ", " + this.c )
          }

    }
    
    getMineNumber() {
    	return this.mineNumber;
    }
    
    
    isMine() {
    	return this.mine
    }
    
   
    
     
    
}																																																				