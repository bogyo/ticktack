define( function () {
  function AI( number, section ) {
    this.number = number;
    this.section = section;
  }

  AI.prototype.chooseStep = function ( currentTable ) {
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
  };

  return AI;

} )
