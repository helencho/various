// Make a visual chess board
function makeBoard(num) {
    var board = "";
    for (var row = 0; row < num; row++) {
      for (var column = 0; column < num; column++) {
        if ((column + row) % 2 === 0) {
          board += "#";
        } else {
          board += " ";
        } 
      }
      board += "\n";
    }
    return board;
  }
  console.log(makeBoard(9));