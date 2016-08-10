'use strict';

var TICKTACKGAME = TICKTACKGAME || {};

TICKTACKGAME.Board = ( function () {

  var actualBoardSize = 3;

  function drawTheBoard( boardSize ) {
    var boardSize = boardSize || 3,
      lineColor, canvasSize, canvas, context, sectionSize, lineNumber;

    lineColor = "#ccc";
    canvasSize = 500;

    canvas = document.getElementById( 'board' );
    context = canvas.getContext( '2d' );

    canvasSize = 500;
    sectionSize = canvasSize / boardSize;
    lineNumber = boardSize - 1;

    canvas.width = canvasSize;
    canvas.height = canvasSize;
    context.translate( 0.5, 0.5 );

    var lineStart = 5;
    var lineLenght = canvasSize - 5;
    context.lineWidth = 10;
    context.lineCap = 'round';
    context.strokeStyle = lineColor;
    context.beginPath();

    // Horizontal lines

    for ( var y = 1; y <= lineNumber; y++ ) {
      context.moveTo( lineStart, y * sectionSize );
      context.lineTo( lineLenght, y * sectionSize );
    }

    // Vertical lines

    for ( var x = 1; x <= lineNumber; x++ ) {
      context.moveTo( x * sectionSize, lineStart );
      context.lineTo( x * sectionSize, lineLenght );
    }

    context.stroke();

  }

  function initEmpthyBoard( rowNumber ) {
    var board;

    board = Array.apply( null, Array( rowNumber ) ).map( function ( v, i ) {
      return Array.apply( null, Array( rowNumber ) ).map( function ( v, i ) {
        return '';
      } )
    } );

    return board;
  };

  function applySavedItemsToBoard( savedValue, rowNumber ) {
    var board;

    board = Array.apply( null, Array( rowNumber ) ).map( function ( v, i ) {
      return v = savedValue[ i ];
    } );

    return board;
  };

  drawTheBoard( 3 );

  var c = initEmpthyBoard( actualBoardSize );
  console.log( c );

  var b = applySavedItemsToBoard( [
    [ 1, 2, 3 ],
    [ 4, 3, 1 ],
    [ 1, 5, 4 ],
    [ 1, 5, '' ]
  ], actualBoardSize );
  console.log( b );

} )();
