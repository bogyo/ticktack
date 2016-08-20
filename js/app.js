define( [ './services/board', './controllers/ai', './controllers/user', './controllers/player', './controllers/game' ],
  function ( Board, AIPlayer, UserPlayer, Player, Game ) {
    'use strict';

    var board = Board.board,
      user = new UserPlayer( 1 ),
      ai = new AIPlayer( 2 );

    //
    // ADD event listener to click on board
    //
    board.addEventListener( 'click', function ( e ) {
      Game.play( e, user, ai );
    }, false );

    //
    // ADD event listener to click button
    //

    document.getElementById( 'newGameButton' ).addEventListener( 'click', function () {
      Game.startNewGame( ai );
    }, false );

    //
    // Random start player
    //

    Player.addFirstPlayer( ai );

  } );
