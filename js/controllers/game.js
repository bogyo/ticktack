define( [ '../services/board', '../services/score', '../services/message', '../utils/index', '../controllers/player' ],
  function ( Board, Score, Message, Utils, Player ) {
    'user strict';

    var scoreTable = Score.getScoreTable(),
      Constant = Utils.Constant,
      Transform = Utils.Transform;
    //
    // tabla, storage torles, ujrainicializalas,
    // elso jatekost kisorsoljuk
    //

    function startNewGame( ai ) {
      clear();
      Player.addFirstPlayer( ai );
    }

    function clear() {
      Score.deleteScoreTable();
      Message.remove();
      Score.initScoreTable();
      Board.createBoard();
      return scoreTable = Score.getScoreTable();
    }

    // ha nincs nyertes, akkor lepjen a soron kovetkozo
    // ha a user lep, nezzuk meg, hogy foglalt-e a mezo
    // majd ha tovabbra sincs gyoztes, akkor valtsunk jatekost

    function play( e, userPlayer, aiPlayer ) {
      if ( IsWinner() === false && Player.getPlayer() === userPlayer.number ) {
        var coordinate = isReserved( Board.getMousePositionOnBoard( e ) );
        if ( coordinate ) {
          userPlayer.step( coordinate );
          Message.remove();
          Player.changePlayer();
        }
      }
      if ( IsWinner() === false && Player.getPlayer() === aiPlayer.number ) {
        aiPlayer.step();
        IsWinner();
        Player.changePlayer();
      }
    }

    // ures a mezo?

    function isReserved( mouse ) {
      var data = Transform.CoordinateToTableData( mouse ),
        coordinate;
      // if no '' on 'that' position it is empty-true

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
    }

    //
    // van nyertes? ha nincs, van ures hely?
    // ertesitsuk rola a usert
    //

    function IsWinner() {
      var message = null;

      for ( var i = scoreTable.length - 1; i >= 0; i-- ) {
        for ( var j = scoreTable[ i ].length - 1; j >= 0; j-- ) {
          if ( scoreTable[ i ][ j ] !== '' ) {
            if ( scoreTable[ i ][ j ] === scoreTable[ i ][ j - 1 ] && scoreTable[ i ][ j ] === scoreTable[ i ][ j - 2 ] ) {

              message = Constant.winnerMessage.vertical + Transform.PlayerNumberToSign( scoreTable[ i ][ j ] );

            } else if ( i === scoreTable.length - 1 && scoreTable[ i ][ j ] === scoreTable[ i - 1 ][ j ] && scoreTable[ i ][ j ] === scoreTable[ i - 2 ][ j ] ) {

              message = Constant.winnerMessage.horizontal + Transform.PlayerNumberToSign( scoreTable[ i ][ j ] );

            } else if ( i === scoreTable.length - 1 && j === scoreTable.length - 1 && scoreTable[ i ][ j ] === scoreTable[ i - 1 ][ j - 1 ] && scoreTable[ i ][ j ] === scoreTable[ i - 2 ][ j - 2 ] ) {

              message = Constant.winnerMessage.diagonal + Transform.PlayerNumberToSign( scoreTable[ i ][ j ] );

            } else if ( i === scoreTable.length - 1 && j === 0 && scoreTable[ i ][ j ] === scoreTable[ i - 1 ][ j + 1 ] && scoreTable[ i ][ j ] === scoreTable[ i - 2 ][ j + 2 ] ) {

              message = Constant.winnerMessage.diagonal + Transform.PlayerNumberToSign( scoreTable[ i ][ j ] );

            }
          }
        }
      }

      if ( !message ) {
        for ( i = 0; i < scoreTable.length; i++ ) {
          if ( scoreTable[ i ].indexOf( '' ) !== -1 ) {
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

    return {
      startNewGame: startNewGame,
      play: play,
      isReserved: isReserved,
      IsWinner: IsWinner
    };
  } );
