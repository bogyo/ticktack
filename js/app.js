'use strict';

//TODO Ha mentes ures akkor sorsoljon uj jatekost, ne a stateet allitsa helyre :)

define( [ './services/index', './models/ai', './models/player', './utils/constant', './controllers/player' ], //use strict!!!!
  /// nem igazan kell az osszes service!!!!!!!!!!!
  function ( Services, AIPlayer, Player, Constant, PlayerCtrl ) {
    var board = Services.Board.board,
      Board = Services.Board,
      Guide = Services.Guide,
      player = new Player( 1, Constant.sectionSize ),
      aiPlayer = new AIPlayer( 2, Constant.sectionSize ),
      currentPlayer = PlayerCtrl.player;

    function playTheGame( e ) {
      if ( Guide.IsWinner() === false && PlayerCtrl.getPlayer() === player.number ) {
        var coordinate = Guide.isReserved( Board.getMousePositionOnBoard( e ) );
        player.step( coordinate );
        PlayerCtrl.changePlayer();
      }
      if ( Guide.IsWinner() === false && PlayerCtrl.getPlayer() === aiPlayer.number ) {
        aiPlayer.step();
        Guide.IsWinner();
        PlayerCtrl.changePlayer();

      }
    }

    //
    // ADD event listener to click on board
    //
    board.addEventListener( 'click', function ( e ) {
      playTheGame( e );
    }, false );

    //
    // Random start player
    //

    PlayerCtrl.addFirst( aiPlayer );

    //
    // ADD event listener to click button
    //

    document.getElementById( 'newGameButton' ).addEventListener( 'click', function () {
      Guide.startNewGame( aiPlayer );
    }, false );

  } );
