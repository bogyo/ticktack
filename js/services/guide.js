define( [ "./validate" ], function ( Validate ) {
  return {
    player: null,
    setPlayer: function () {
      return this.player === 1 ? this.player = 2 : this.player = 1;
    },
    start: function ( board ) {
      return this.player = Math.floor( Math.random() * ( 2 - 1 + 1 ) ) + 1;
    },
    validateUserStep: function ( board, e ) {
      if ( this.player === 2 ) {
        return false;
      }
      return Validate.isItReserved( this.getCanvasMousePosition( board, e ), board );
    },
    getCanvasMousePosition: function ( board, event ) {
      var rect = board.getBoundingClientRect();
      console.log( 'getCanvasMousePosition...' );
      console.log( event.clientX - rect.left );
      console.log( event.clientY - rect.top )
      console.log( '---' );
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      }
    }
  }

} )
