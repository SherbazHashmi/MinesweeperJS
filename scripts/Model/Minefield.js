class Minefield {
	
	
	constructor(rows, columns, canvas, context) {
		this.mines = generateMineField(rows, columns)	
		this.cvs = canvas
		this.ctx = context
	}
	
	
	function generateMineField(numberOfRows, numberOfColumns) {
		rows = new Array(numberOfRows)
		
		for (var i = 0; i < numberOfRows; i++) {
			rows[i] = generateMineRow(numberOfColumns, i)
		}
		return rows;
		
	}
	
	function generateMineRow(numberOfColumns, rowIndex) {
		row = new Array(numberOfColumns)
		for (var i = 0; i < numberOfColumns; i++) {
			row[i] = new Cell(i, rowIndex)
		}
		return row
	}
	
	function draw() {
	for(var r =0; r <= cvs.height; r++) {
			for(var c = 0; c <= c.height; c++)  {
				ctx.drawImage(mines[r][c].image, c*5, r*5 )
			}			 	
		}
	}
	
	// Accepts Following Operations : 
	// Mark : Marks cell
	// Mine : Turns cell into mine cell
	// Reveal : Reveals Cell 
	export function setCell(operation,x, y) {
		
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