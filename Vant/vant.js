/*
https://en.wikipedia.org/wiki/Langton%27s_ant
At a white square, turn 90° right, flip the color of the square, move forward one unit
At a black square, turn 90° left, flip the color of the square, move forward one unit
*/

function Vant(gridRows, gridCols, gridRef) {
  this.grid = gridRef;
  this.cols = gridCols;
  this.rows = gridRows;
  this.x = floor(gridCols / 2);
  this.y = floor(gridRows / 2);
  this.cellSize = 5;
  this.direction = 0;

  this.update = function() {
    var cell = grid.lookAtCell(this.x, this.y).t; // return type of cell
    var futureCell = 0;

    if (cell == 0) {
      futureCell = 1;
      // turn 90 degs right
      this.direction = (this.direction - 1) % 4;
      console.log(this.direction);
      if(this.direction < 0) { this.direction = 3; }


    } else if (cell == 1) {
      futureCell = 0;
      // turn 90 degs left
      this.direction = (this.direction + 1) % 4;
    }
    this.grid.setCell(this.x,this.y,futureCell);
  }
  this.move = function() {
    switch(this.direction) {
      case 0:
        this.x += 1;
        this.x = this.x % this.cols;
        break;
      case 1:
        this.y -= 1;
        if (this.y < 0) { this.y += this.rows;}
        break;
      case 2:
        this.x -= 1;
        if (this.x < 0) { this.x += this.cols;}
        break;
      case 3:
        this.y += 1;
        this.y = this.y % this.rows;
        break;
    }
  }
  this.draw = function() {
    fill(255,0,0);
    noStroke();
    rect(this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);
  }

  this.updateAndDraw = function() {
    this.update();
    this.move();
    this.draw();
  }
}
