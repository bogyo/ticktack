define( [ "../services/board", "../services/drawer", "../services/guide", "../services/validate", "../models/ai" ],
  function ( Board, Drawer, Guide, Validate, AI ) {
    var boardSize = 3;
    var board = Board.board;

    var sectionSize = board.width / boardSize;

    var scoreTable = Validate.initScoreTable( boardSize );
    var coord = {};

    function step( mouse, board ) {
      coord.x = Math.floor( mouse.x / sectionSize ) // 0..1..2
      coord.y = Math.floor( mouse.y / sectionSize ) // max-min?

      console.log( coord );

      //update
      Drawer.addPlayingPiece( mouse, Guide.player );
      Validate.updateScoreTable( coord, Guide.player );
      Guide.setPlayer();
    }

    var ai = new AI( Guide.player, sectionSize );
    Guide.start();

    console.log( Guide.player );

    if ( Guide.player === 2 ) {
      step( ai.chooseStep( scoreTable ) );
    }

    board.addEventListener( 'mouseup', function ( e ) {
      console.log( 'mouseup' )
      step( Guide.validateUserStep( board, e ), board );
      step( ai.chooseStep( scoreTable ) );
    }, true );

    /*      var canvasMousePosition = Guide.getCanvasMousePosition( board, event );

          Validate.isWinner( scoreTable );

          Validate.isItReserved( canvasMousePosition, board );

          Drawer.addPlayingPiece( canvasMousePosition, Guide.player );

          Validate.update( canvasMousePosition );

          Guide.setPlayer();

        } )*/
    /*    } )
      .catch( function ( err ) {
        console.log( 'someting went wrong:', err )
      } );
*/
  } );
