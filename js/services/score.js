'use strict';
define( function () {
  ///not used file
  return {
    scoreTable = null,
    initScoreTable: function ( rowNumber ) {
      return this.scoreTable = Array.apply( null, Array( rowNumber ) ).map( function ( v, i ) {
        return Array.apply( null, Array( rowNumber ) ).map( function ( v, i ) {
          return '';
        } )
      } );
    }
  }
} );
