define( [ './board', './score', '../utils/index', '../controllers/message', '../controllers/player' ], function ( Board, Score, Utils, Message, PlayerCtrl ) {
  var board = Board.board;
  var scoreTable = Score.getScoreTable();
  var Constant = Utils.Constant;
  var Transform = Utils.Transform;
  var Message = Message;
  var sectionSize = Constant.sectionSize;

  function startNewGame( ai ) {
    Score.deleteScoreTable();
    Message.remove();
    Score.initScoreTable();
    Board.createBoard();
    PlayerCtrl.addFirst( ai );
    return scoreTable = Score.getScoreTable();
  };

  function isReserved( mouse ) {
    console.log( 'isItReserved mouse', mouse )
    console.log( 'scoreTable', scoreTable )
    var data = Transform.CoordinateToTableData( mouse ),
      coordinate;
    // if no "" on 'that' position it is empty-true

    console.log( data.x );
    console.log( data.y );
    console.log( '---' );

    for ( var x = 0; x < scoreTable.length; x++ ) {
      for ( var y = 0; y < scoreTable.length; y++ ) {
        if ( scoreTable[ data.x ][ data.y ] !== '' ) {
          Message.show( Constant.notEmtySection );
          return false;
        }
      }
    }

    coordinate = Transform.TableDataToCoordinate( data );

    return {
      x: coordinate.x,
      y: coordinate.y
    };
  };

  return {
    startNewGame: startNewGame,
    isReserved: isReserved,
    IsWinner: function ( Board ) {
      var message = null;
      // todo: check winner if n
      // no more empty space

      for ( var i = scoreTable.length - 1; i >= 0; i-- ) {
        //      console.log( 'scoreTable IIII', i )
        for ( var j = scoreTable[ i ].length - 1; j >= 0; j-- ) {
          //      console.log( 'scoreTable JJJJ', j )
          if ( scoreTable[ i ][ j ] !== "" ) {
            if ( scoreTable[ i ][ j ] === scoreTable[ i ][ j - 1 ] && scoreTable[ i ][ j ] === scoreTable[ i ][ j - 2 ] ) {
              console.log( 'van nyertes, aki a FUGGOLEGESEN jatekos:', scoreTable[ i ][ j ] );
              message = 'van nyertes, aki a FUGGOLEGESEN jatekos:' + scoreTable[ i ][ j ];
            } else if ( i === scoreTable.length - 1 && scoreTable[ i ][ j ] === scoreTable[ i - 1 ][ j ] && scoreTable[ i ][ j ] === scoreTable[ i - 2 ][ j ] ) {
              //            console.log( 'van nyertes, aki  VIZSZINTESEN jatekos:', scoreTable[ i ][ j ] );
              message = 'van nyertes, aki a VIZSZINTESEN jatekos:' + scoreTable[ i ][ j ];
            } else if ( i === scoreTable.length - 1 && j === scoreTable.length - 1 && scoreTable[ i ][ j ] === scoreTable[ i - 1 ][ j - 1 ] && scoreTable[ i ][ j ] === scoreTable[ i - 2 ][ j - 2 ] ) {
              //          console.log( 'van nyertes, aki  ATLOSAN jatekos:', scoreTable[ i ][ j ] );
              message = 'van nyertes, aki a ATLOSAN jatekos:' + scoreTable[ i ][ j ];
            } else if ( i === scoreTable.length - 1 && j === 0 && scoreTable[ i ][ j ] === scoreTable[ i - 1 ][ j + 1 ] && scoreTable[ i ][ j ] === scoreTable[ i - 2 ][ j + 2 ] ) {
              //        console.log( 'van nyertes, aki  ATLOSAN BALROL-JOBBRA jatekos:', scoreTable[ i ][ j ] );
              message = 'van nyertes, aki a ATLOSAN jatekos:' + scoreTable[ i ][ j ];
            }
          }
        }
      }

      if ( !message ) {
        for ( var i = 0; i < scoreTable.length; i++ ) {
          if ( scoreTable[ i ].indexOf( "" ) !== -1 ) { // sima aposztrof???
            return false;
          } else {
            message = Constant.notMoreEmtyPlace;
          }
        }
      }

      Score.deleteScoreTable();
      Message.show( message );
      return true;
    }
  }

} );
