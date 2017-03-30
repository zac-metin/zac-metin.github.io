document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells: [{row: 0, col: 0, isMine: false, hidden: true, isMarked: false},{row: 0, col: 1, isMine: true, hidden: true, isMarked: false},{row: 0, col: 2, isMine: false, hidden: true, isMarked: false},{row: 1, col: 0, isMine: false, hidden: true, isMarked: false},{row: 1, col: 1, isMine: false, hidden: true, isMarked: false},{row: 1, col: 2, isMine: false, hidden: true, isMarked: false},{row: 2, col: 0, isMine: false, hidden: true, isMarked: false},{row: 2, col: 1, isMine: false, hidden: true, isMarked: false},{row: 2, col: 2, isMine: false, hidden: true, isMarked: false}]
}

function startGame () {
  for (var i=0; i<board.cells.length; i++)
  {
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i]);
    document.addEventListener ('click', checkForWin);
    document.addEventListener ('contextmenu', checkForWin);
  }


  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var counter = 0;
for (var i = 0; i<board.cells.length ; i++)
{
if (board.cells[i].isMine == true && board.cells[i].isMarked == false) //unmarked mines
{
  console.log("unmarked mine"+counter);
}
else if(board.cells[i].isMine == true && board.cells[i].isMarked == true)
{
  counter++;
}
else if(board.cells[i].isMine == false && board.cells[i].hidden == true)
{
  console.log("unhidden non-mine"+counter);
}
else if(board.cells[i].isMine == false && board.cells[i].hidden == false)
{
  counter++;
}
}
console.log("final counter:" +counter);
if (counter == 9)
{
lib.displayMessage('You win!');
}
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')



function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    var count = 0;
  for (var i=0; i<surrounding.length; i++)
  {
    if (surrounding[i].isMine == true)
    {
      count ++;
    }

  }
return count;

}

function Easy () {
  alert("You are already on Easy mode!");
}
function Moderate () {
  alert("Computer thinks you can't handle Moderate mode.\n\nMuch apologies.")
}

function Hard () {
  alert("Computer thinks you can't handle Hard mode\n\nMuch apologies.")
}
function Expert () {
  alert("You broke computer.")
}
