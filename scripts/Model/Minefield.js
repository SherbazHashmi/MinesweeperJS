class Minefield {
	
	constructor(rows, columns, canvas, context, debug_text) {
		this.rows = rows;
		this.columns = columns;
		this.mines = this.generateMinefield()	
		this.cvs = canvas
		this.cxt = context
		this.debug_text = debug_text
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
			row[i] = new Cell(i, rowIndex)
			//debug_text.textContent = row[i].getImage.src
		}
		return row
	}
	
	draw() {
	for(var r =0; r <= this.rows; r++) {
			for(var c = 0; c <= this.columns ; c++)  {
 				setTimeout(this.do(r,c,this.cxt), 1000)
			}			 	
		}
	}
	
	do(r,c,cxt) {
	debug_text.textContent =  c + " " + r
 				this.cxt.drawImage(this.mines[r][c].getImage, r * this.rows * 10, c * this.columns * 10, this.columns* 10, this.rows * 10)
 	}
	
	// Accepts Following Operations : 
	// Mark : Marks cell
	// Mine : Turns cell into mine cell
	// Reveal : Reveals Cell 
	setCell(operation,x, y) {
		
		switch (operation) {
			case "Mark":
				mines[y][x].setMarked();
				break;
			case "Mine": 
				mines[y][x].setMine();
				break;
			case "Reveal":
				mines[y][x].setReveal();
		}
	}	
}