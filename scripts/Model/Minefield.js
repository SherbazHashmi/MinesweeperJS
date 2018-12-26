class Minefield {
	
	constructor(rows, columns, canvas, context, debug_text) {
		this.rows = rows;
		this.columns = columns;
		this.numberOfMines = (this.rows * this.columns) / 8;
		this.mines = this.generateMinefield()
		this.cvs = canvas
		this.cxt = context
		this.debug_text = debug_text
		this.cellSize = 50;
		this.assignMineNumbers()
		this.checkMineNumbers()
	}
	
	generateMinefield() {
		var rows = new Array(this.rows)
		for (var i = 0; i <= this.rows; i++) {
			rows[i] = this.generateMineRow(this.columns, i)
		}
		return rows;
	}
	
	generateMineRow(rowIndex) {
		var row = new Array(this.columns)
		for (var i = 0; i <= this.columns; i++) {
			// Mine factor decides if it's a mine node.
			let mineFactor = Math.floor((Math.random() * 3) +1)
			row[i] = new Cell(i, rowIndex)
			//console.log("Number of mines: "+this.numberOfMines)
			if(mineFactor == 1 ) {
				row[i].setMine()
				this.numberOfMines--;
			} 
		}
		return row
	}

	draw() {
	for(var r =0; r < this.rows; r++) {
			for(var c = 0; c < this.columns ; c++)  {
 				this.cxt.drawImage(this.mines[r][c].getImage, r * this.rows * 10, c * this.columns * 10, this.columns* 10, this.rows * 10)
			}			 	
		}
	}
	
	// Accepts Following Operations : 
	// Mark : Marks cell
	// Mine : Turns cell into mine cell
	// Reveal : Reveals Cell 
	setCell(operation,x, y) {
		switch (operation) {
			case "Mark":
				mines[y][x].marked();
				break;
			case "Mine": 
				mines[y][x].setMine();
				break;
			case "Reveal":
				mines[y][x].setReveal();
				break;
			case "SetNumber":
				mines[y][x].setNumber(this);
				break;
		}
	}	
	
	assignMineNumbers() {
		for(var r =0; r <= this.rows; r++) {
			for(var c = 0; c <= this.columns ; c++)  {
 					let minefield = this.mines;
 					minefield[r][c].setMineNumber(minefield, this.rows, this.columns)
 					//this.mines[r][c].setMineImage()	
 				}			 	
		}
	}
	
	getMines() {
		return this.mines;
	}
	
	getRows() {
		console.log("Failed Get Rows : " + this.rows)
	 return this.rows
	}
	
	getColumns() {
		return this.columns
	}
	
	checkMineNumbers() {
		for(var r =0; r <= this.rows; r++) {
				for(var c = 0; c <= this.columns ; c++)  {
				}			 	
		}
	}
	
			
}