define( [ "./Board" ], function ( Board ) {
  var canvas = Board.board,
    context = canvas.getContext( '2d' ),
    sectionSize = canvas.width / 3;

  function addPlayingPiece( mouse, player ) {
    var xCordinate;
    var yCordinate;

    for ( var x = 0; x < 3; x++ ) {
      for ( var y = 0; y < 3; y++ ) {
        xCordinate = x * sectionSize;
        yCordinate = y * sectionSize;

        console.log( mouse.x )
          //    console.log( mouse.y )

        console.log( xCordinate )

        if (
          mouse.x >= xCordinate && mouse.x <= xCordinate + sectionSize &&
          mouse.y >= yCordinate && mouse.y <= yCordinate + sectionSize
        ) {

          //clearPlayingArea( xCordinate, yCordinate );
          if ( player === 1 ) {
            drawX( xCordinate, yCordinate );
            console.log( 'return' )
            return;
          } else {
            drawO( xCordinate, yCordinate );
            console.log( 'return' )
            return;
          }
        }
      }
    }
  };

  function clearPlayingArea( xCordinate, yCordinate ) {
    context.fillStyle = "#fff";
    context.fillRect(
      xCordinate,
      yCordinate,
      sectionSize,
      sectionSize
    );
  }

  function drawO( xCordinate, yCordinate ) {
    var halfSectionSize = ( 0.5 * sectionSize );
    var centerX = xCordinate + halfSectionSize;
    var centerY = yCordinate + halfSectionSize;
    var radius = ( sectionSize - 100 ) / 2 >= 10 ? ( sectionSize - 100 ) / 2 : 10;
    var startAngle = 0 * Math.PI;
    var endAngle = 2 * Math.PI;

    context.lineWidth = 10;
    context.strokeStyle = "#01bBC2";
    context.beginPath();
    context.arc( centerX, centerY, radius, startAngle, endAngle );
    context.stroke();
  }

  function drawX( xCordinate, yCordinate ) {
    context.strokeStyle = "#f1be32";

    context.beginPath();

    var offset = sectionSize < 5 ? 50 : 40;
    context.moveTo( xCordinate + offset, yCordinate + offset );
    context.lineTo( xCordinate + sectionSize - offset, yCordinate + sectionSize - offset );

    context.moveTo( xCordinate + offset, yCordinate + sectionSize - offset );
    context.lineTo( xCordinate + sectionSize - offset, yCordinate + offset );

    context.stroke();

    //    console.log( xCordinate + offset, yCordinate + offset )
    //  console.log( xCordinate + board.sectionSize - offset, yCordinate + board.sectionSize - offset )

    //console.log( xCordinate + offset, yCordinate + board.sectionSize - offset )
    //console.log( xCordinate + board.sectionSize - offset, yCordinate + offset )

  }

  return {
    addPlayingPiece: addPlayingPiece,
    drawX: drawX,
    drawO: drawO
  }
} );
