//Swap function used by shuffle() and by moveTile()
//given two cells change their position
function swapTiles(cell1,cell2) {
  //save the first cell
  var temp = document.getElementById(cell1).className;
  //put the second cell in the first cell
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  //put the first cell in the second cell
  document.getElementById(cell2).className = temp;
}

//Used at the start of the webpage being loaded to make the puzzle random
function shuffle() {
  //Nested for loops are needed to make sure
  //that each position has been changed
  //For each row of the 3x3 grid
  for (var row=1;row<=3;row++) {
    //For each column in the current row
    for (var column=1;column<=3;column++) {

      //Pick a random row from 1 to 3
      var row2=Math.floor(Math.random()*3 + 1);

      //Pick a random column from 1 to 3
      var column2=Math.floor(Math.random()*3 + 1);

      swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
    }
  }
}

//Used to move the tile where the white tile is currently, then calls
//swapTiles() with both the cliked cell and adjacent white cell.
//Doesn't swap is white cell is not adjacent.
function moveTile(row, column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;

  //From the cell you cliked where is the white cell
  if (tile!="tile9") {
       //Is the white cell in the right tile?
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //Is the white cell in the left tile?
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //Is the white cell in the upper tile?
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
      //Is the white cell in the bottom tile?
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       }
  }

}
