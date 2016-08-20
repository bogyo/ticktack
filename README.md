#install

1. npm install
2. open index.html in a browser
3. play

#additional info:
in js/utils/constant file you have option to change properties
  - colors
  - boardSize
  - sictionsize (boardsize sectionsize should be well-proportioned)
  - app messages


#rules/features

1. random player start the Game
2. if ai player has two coherent sign on the board, ai will choose the third winner place,
if there is no ai sign on the board, ai will choose the first free place.
3. board state is saved automatically
4. first three coherent sign win the Game (horizontal, vertical, diagonal)
5. the game ends if no place on the board as well
6. if the game ends user can click a button to play a new game
7. if the game ends ends and user reload the page new game starts automatically
8. if user close the window before the game ends,
he/she can continue the game if open the browser again or start a new one by pressing the button
9. responsive layout
