define( [ '../services/board', '../services/drawer', '../services/score' ], function ( Board, Drawer, Score ) {
  function AIPlayer( number, section ) {
    this.number = number;
    this.section = section;
  }

  AIPlayer.prototype.chooseStep = function ( currentTable ) {
    console.log( "CURRENTTABLE", currentTable );
    for ( var i = currentTable.length - 1; i >= 0; i-- ) {
      //      console.log( 'scoreTable IIII', i )
      for ( var j = currentTable[ i ].length - 1; j >= 0; j-- ) {
        if ( i === currentTable.length - 1 && currentTable[ i ][ j ] === this.number && currentTable[ i - 1 ][ j ] === this.number && currentTable[ i - 2 ][ j ] === '' ) {
          console.log( "VIZSZINTESEN 2" );
          return {
            x: ( i - 2 ) * this.section + 10,
            y: j * this.section + 10
          }
        } else if ( i === currentTable.length - 1 && j === currentTable.length - 1 && currentTable[ i ][ j ] === this.number && currentTable[ i - 1 ][ j - 1 ] === this.number && currentTable[ i - 2 ][ j - 2 ] === '' ) {
          console.log( "ATLOSAN 2" );
          return {
            x: ( i - 2 ) * this.section + 10,
            y: ( j - 2 ) * this.section + 10
          }
        } else if ( i === currentTable.length - 1 && j === 0 && currentTable[ i ][ j ] === this.number && currentTable[ i - 1 ][ j + 1 ] === this.number && currentTable[ i - 2 ][ j + 2 ] === '' ) {
          console.log( "ATLOSAN 2" );
          return {
            x: ( i - 2 ) * this.section + 10,
            y: ( j + 2 ) * this.section + 10
          }
        } else if ( currentTable[ i ][ j ] === this.number && currentTable[ i ][ j - 1 ] === this.number && currentTable[ i ][ j - 2 ] === '' ) {
          console.log( "FUGGOLEGESEN 2" );
          return {
            x: i * this.section + 10,
            y: ( j - 2 ) * this.section + 10
          }
        } else if ( i === currentTable.length - 1 && currentTable[ i ][ j ] === this.number && currentTable[ i - 1 ][ j ] === '' ) {
          console.log( "VIZSZINTESEN 1" );
          return {
            x: ( i - 1 ) * this.section + 10,
            y: j * this.section + 10
          }
        } else if ( currentTable[ i ][ j ] === this.number && currentTable[ i ][ j - 1 ] === '' ) {

          console.log( "FUGGOLEGESEN 1" );
          return {
            x: i * this.section + 10,
            y: ( j - 1 ) * this.section + 10
          }

        } else if ( currentTable[ i ][ j ] === '' ) {
          console.log( "LE VAN SZARVA URES" );
          return {
            x: i * this.section + 10,
            y: j * this.section + 10
          }
        }
      }
    }
  };
  /*
  AIPlayer.prototype.chooseStep = function ( currentTable ) {
    console.log( "CURRENTTABLE", currentTable );
    for ( var x = 0; x < this.section; x++ ) {
      for ( var y = 0; y < this.section; y++ ) {

        if ( currentTable[ x ][ y ] === '' ) {
          return {
            x: x * this.section + 10,
            y: y * this.section + 10
          }
        }
      }
    }
  };*/

  AIPlayer.prototype.step = function () {
    var coordinate = this.chooseStep( Score.getScoreTable() );
    Drawer.drawO( coordinate );
    Score.updateScoreTable( coordinate, this.number );
  };

  AIPlayer.prototype.prepareStart = function ( starter ) {
    if ( starter === this.number ) {
      Board.board.click();
    }
  }

  return AIPlayer;

} );
