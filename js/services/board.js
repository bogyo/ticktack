'use strict';
define( function () {
  var board = function createBoard() {
    var boardSize = 3,
      lineColor = '#ccc',
      canvasSize = 500,
      canvas, context, sectionSize, lineNumber;

    canvas = document.getElementById( 'board' );
    context = canvas.getContext( '2d' );

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

    return canvas;
  }();

  return {
    board: board
  }
} );
