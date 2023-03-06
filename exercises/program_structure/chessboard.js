/*
- Write a program that creates a string that represents am 8x8 grid, using
new-line characters to separate lines. At each position of the grid there is
either a space or a # character. The characters should form a chessboard.
  Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

let chessboard = '';

for (let i = 0; i < 8; i++) {
  for (let y = 0; y < 8; y++) {
    if (chessboard.length % 2 === 0) chessboard += ' ';
    else chessboard += '#';
  }

  chessboard += '\n';
}

console.log(chessboard);