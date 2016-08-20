'use strict';
define( [ './constant' ], function ( Constant ) {
  var sectionSize = Constant.sectionSize;

  function CoordinateToTableData( coordinate ) {
    var data = {};
    data.x = Math.floor( coordinate.x / sectionSize ) // 0..1..2
    data.y = Math.floor( coordinate.y / sectionSize ) // max-min?

    return data;
  }

  function TableDataToCoordinate( data ) {
    var coordinate = {};
    coordinate.x = data.x * sectionSize; // 0..1..2
    coordinate.y = data.y * sectionSize; // max-min?

    return coordinate;
  }

  return {
    CoordinateToTableData: CoordinateToTableData,
    TableDataToCoordinate: TableDataToCoordinate,
  }
} );
