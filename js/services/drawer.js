define( [ '../utils/constant', './board' ], function ( Constant, Board ) {
  var canvas = Board.board,
    sectionSize = Constant.sectionSize,
    context = canvas.getContext( '2d' );

  function drawO( coordinate ) {
    var xCoordinate = coordinate.x,
      yCoordinate = coordinate.y,
      halfSectionSize = ( 0.5 * sectionSize ),
      centerX = xCoordinate + halfSectionSize,
      centerY = yCoordinate + halfSectionSize,
      radius = ( sectionSize - 100 ) / 2,
      startAngle = 0 * Math.PI,
      endAngle = 2 * Math.PI;

    context.lineWidth = 10;
    context.strokeStyle = Constant.oColor;
    context.beginPath();
    context.arc( centerX, centerY, radius, startAngle, endAngle );
    context.stroke();
  }

  function drawX( coordinate ) {
    var xCoordinate = coordinate.x,
      yCoordinate = coordinate.y,
      offset = 50;

    context.strokeStyle = Constant.xColor;

    context.beginPath();

    context.moveTo( xCoordinate + offset, yCoordinate + offset );
    context.lineTo( xCoordinate + sectionSize - offset, yCoordinate + sectionSize - offset );

    context.moveTo( xCoordinate + offset, yCoordinate + sectionSize - offset );
    context.lineTo( xCoordinate + sectionSize - offset, yCoordinate + offset );

    context.stroke();
  }

  return {
    drawX: drawX,
    drawO: drawO
  }
} );
