define( function () {
  /*  function transformMousePosition( mouse, board, sectionSize ) {
      //console.log( mouse.x );
      //console.log( board.width / mouse.x );
      //console.log( Math.ceil( board.width / mouse.x ) );
      return {
        x: Math.floor( board.width / mouse.x ), // 0..1..(sectionsize-1)
        y: Math.floor( board.width / mouse.y )
      }
    };
  */
  function IsWinner( Board ) {
    // todo: check winner
    // no more empty space
    if ( Board.indexOf( '' ) ) {
      return false;
    }
    console.log( 'endeendeluftspiele' )
    return true;
  }

  function isItReserved( mouse, canvas ) {
    console.log( 'isItReserved mouse', mouse )
    var sectionSize = canvas.width / this.scoreTable.length;
    //mouseCanvasX = Math.ceil( mouse.x / sectionSize ) - 1,
    //  mouseCanvasY = Math.ceil( mouse.y / sectionSize ) - 1;
    // if no "" on 'that' position it is empty-true
    //mouseCanvasX = Math.ceil( mouse.x / sectionSize ),
    //  mouseCanvasY = Math.ceil( mouse.y / sectionSize );
    mouseCanvasX = Math.floor( mouse.x / sectionSize ),
      mouseCanvasY = Math.floor( mouse.y / sectionSize );
    console.log( mouseCanvasX );
    console.log( mouseCanvasY );
    console.log( '---' );

    for ( var x = 0; x < this.scoreTable.length; x++ ) {
      for ( var y = 0; y < this.scoreTable.length; y++ ) {
        if ( this.scoreTable[ mouseCanvasX ][ mouseCanvasY ] !== '' ) {
          console.log( 'nem ures valassz masikat' );
          return false;
        }
      }
    }
    console.log( mouse.x );
    return {
      x: mouse.x,
      y: mouse.y
    };
  }

  return {
    scoreTable: null,
    initScoreTable: function ( rowNumber ) {
      return this.scoreTable = Array.apply( null, Array( rowNumber ) ).map( function ( v, i ) {
        return Array.apply( null, Array( rowNumber ) ).map( function ( v, i ) {
          return '';
        } )
      } );
    },
    isWinner: IsWinner,
    isItReserved: isItReserved,
    updateScoreTable: function ( position, player ) {
      this.scoreTable[ position.x ][ position.y ] = player;
      //this.scoreTable[ position.y ][ position.x ] = player;
      console.log( position );
      console.log( this.scoreTable );
      console.log( "scoreTable recorded" )
      localStorage.setItem( 'tickTackToeGame', JSON.stringify( this.scoreTable ) );
    }
  }

} );
