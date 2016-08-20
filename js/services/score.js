'use strict';

define( [ '../utils/constant', '../utils/transform', './board', './drawer' ], function ( Constant, Transform, Board, Drawer ) {
  var scoreTable;
  var boardSize = Constant.boardSize;

  function setScoreTable( value ) {
    scoreTable = value;
  };

  function getScoreTable() {
    return scoreTable;
  };

  function checkForSavedGame() {
    return JSON.parse( localStorage.getItem( "tickTackToeGame-Score" ) );
  };

  function initScoreTableFromSavedGame( savedScoreTable ) {
    var len = savedScoreTable.length,
      i, j, coordinate;

    for ( i = 0; i < len; i++ ) {
      for ( j = 0; j < savedScoreTable[ i ].length; j++ ) {
        if ( savedScoreTable[ i ][ j ] !== '' ) {
          coordinate = Transform.TableDataToCoordinate( {
            x: i,
            y: j
          } );

          if ( savedScoreTable[ i ][ j ] === 1 ) {
            Drawer.drawX( coordinate );
          } else {
            Drawer.drawO( coordinate );
          }
        }
      }
    }
  };

  function deleteScoreTable() {
    localStorage.removeItem( 'tickTackToeGame-Score' );
    localStorage.removeItem( 'tickTackToeGame-Player' );
    localStorage.removeItem( 'tickTackToeGame-Step' );
  }

  function initScoreTable() {
    var gameTable;

    gameTable = checkForSavedGame();

    if ( gameTable ) {
      initScoreTableFromSavedGame( gameTable );
    } else {
      var i, j;
      gameTable = [];

      for ( i = 0; i < boardSize; i++ ) {
        gameTable[ i ] = new Array( boardSize );
        for ( j = 0; j < boardSize; j++ ) {
          gameTable[ i ][ j ] = '';
        }
      }
    }

    return setScoreTable( gameTable );
  };

  function updateScoreTable( coordinate, player ) {
    var scoreTable = getScoreTable();
    var position = Transform.CoordinateToTableData( coordinate );
    var step = JSON.parse( localStorage.getItem( "tickTackToeGame-Step" ) ) || 0;

    scoreTable[ position.x ][ position.y ] = player;

    console.log( "STEP", step );
    console.log( scoreTable );
    console.log( "scoreTable recorded" )

    localStorage.setItem( 'tickTackToeGame-Step', JSON.stringify( step + 1 ) );

    localStorage.setItem( 'tickTackToeGame-Score', JSON.stringify( scoreTable ) );
  }

  initScoreTable();

  return {
    setScoreTable: setScoreTable,
    getScoreTable: getScoreTable,
    deleteScoreTable: deleteScoreTable,
    initScoreTable: initScoreTable,
    updateScoreTable: updateScoreTable
  }
} );
