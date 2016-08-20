define( [ './constant' ], function ( Constant ) {
  'use strict';

  var sectionSize = Constant.sectionSize;

  function CoordinateToTableData( coordinate ) {
    var data = {};
    data.x = Math.floor( coordinate.x / sectionSize ); // 0..1..2
    data.y = Math.floor( coordinate.y / sectionSize );

    return data;
  }

  function TableDataToCoordinate( data ) {
    var coordinate = {};
    coordinate.x = data.x * sectionSize; // 0..1..2
    coordinate.y = data.y * sectionSize;

    return coordinate;
  }

  function PlayerNumberToSign( player ) {
    return player === 2 ? 'O' : 'X';
  }

  return {
    CoordinateToTableData: CoordinateToTableData,
    TableDataToCoordinate: TableDataToCoordinate,
    PlayerNumberToSign: PlayerNumberToSign
  };
} );
