define( [ '../services/board', '../services/drawer', '../services/score', '../utils/constant' ], function ( Board, Drawer, Score, Constant ) {
  'use strict';

  function AIPlayer( number ) {
    this.number = number;
    this.section = Constant.sectionSize;
  }

  AIPlayer.prototype.chooseStep = function ( currentTable ) {
    // ha van valahol ketto egymas mellett, es a harmardik hely ures, akkor oda lepj
    //ha nincs ilyen, akkor az elso hely, amit talalsz

    for ( var i = currentTable.length - 1; i >= 0; i-- ) {
      for ( var j = currentTable[ i ].length - 1; j >= 0; j-- ) {
        if ( i === currentTable.length - 1 && currentTable[ i ][ j ] === this.number &&
          currentTable[ i - 1 ][ j ] === this.number && currentTable[ i - 2 ][ j ] === '' ) {
          return {
            x: ( i - 2 ) * this.section + 10,
            y: j * this.section + 10
          };
        } else if ( i === currentTable.length - 1 && j === currentTable.length - 1 &&
          currentTable[ i ][ j ] === this.number && currentTable[ i - 1 ][ j - 1 ] === this.number &&
          currentTable[ i - 2 ][ j - 2 ] === '' ) {
          return {
            x: ( i - 2 ) * this.section + 10,
            y: ( j - 2 ) * this.section + 10
          };
        } else if ( i === currentTable.length - 1 && j === 0 && currentTable[ i ][ j ] === this.number &&
          currentTable[ i - 1 ][ j + 1 ] === this.number &&
          currentTable[ i - 2 ][ j + 2 ] === '' ) {
          return {
            x: ( i - 2 ) * this.section + 10,
            y: ( j + 2 ) * this.section + 10
          };
        } else if ( currentTable[ i ][ j ] === this.number &&
          currentTable[ i ][ j - 1 ] === this.number &&
          currentTable[ i ][ j - 2 ] === '' ) {
          return {
            x: i * this.section + 10,
            y: ( j - 2 ) * this.section + 10
          };
        } else if ( i === currentTable.length - 1 && currentTable[ i ][ j ] === this.number && currentTable[ i - 1 ][ j ] === '' ) {
          return {
            x: ( i - 1 ) * this.section + 10,
            y: j * this.section + 10
          };
        } else if ( currentTable[ i ][ j ] === this.number && currentTable[ i ][ j - 1 ] === '' ) {
          return {
            x: i * this.section + 10,
            y: ( j - 1 ) * this.section + 10
          };

        } else if ( currentTable[ i ][ j ] === '' ) {
          return {
            x: i * this.section + 10,
            y: j * this.section + 10
          };
        }
      }
    }
  };

  AIPlayer.prototype.prepareStart = function ( starter ) {
    if ( starter === this.number ) {
      Board.board.click();
    }
  };

  AIPlayer.prototype.step = function () {
    var coordinate = this.chooseStep( Score.getScoreTable() );
    Drawer.drawO( coordinate );
    Score.updateScoreTable( coordinate, this.number );
  };

  return AIPlayer;

} );
