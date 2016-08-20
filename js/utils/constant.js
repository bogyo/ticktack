'use strict';
define( function () { ////refact!!!!
  var boardSize = 3;
  var canvasSize = 500;
  var sectionSize = canvasSize / boardSize;
  var boardColor = '#ccc';
  var Xcolor = '#f1be32';
  var Ocolor = '#01bBC2';
  var notMoreEmtyPlace = 'nincs tobb ures hely';
  var notEmtySection = 'nem ures valassz masikat';
  var OColor = '#01bBC2';
  var xColor = '#f1be32';

  return {
    boardSize: boardSize,
    canvasSize: canvasSize,
    sectionSize: sectionSize,
    boardColor: boardColor,
    notMoreEmtyPlace: notMoreEmtyPlace,
    notEmtySection: notEmtySection,
    oColor: OColor,
    xColor: Xcolor
  }
} );
