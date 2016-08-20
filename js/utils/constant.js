'use strict';
define( function () { ////TODO: refact
  'use strict';

  var boardSize = 3,
    canvasSize = 500,
    sectionSize = canvasSize / boardSize,
    boardColor = '#ccc',
    notMoreEmtyPlace = 'nincs tobb ures hely',
    notEmtySection = 'nem ures valassz masikat',
    OColor = '#01bBC2',
    xColor = '#ff369b',
    winnerMessage = {
      vertical: 'A nyertes fuggolegesen: ',
      horizontal: 'A nyertes vizszintesen: ',
      diagonal: 'A nyertes atlosan: '
    },
    playerMessage = {
      firstPlayer: ' jatekos kezdheti a jatekot',
      nextPlayer: ' jatekos folytathatja a jatekot'
    };

  return {
    boardSize: boardSize,
    canvasSize: canvasSize,
    sectionSize: sectionSize,
    boardColor: boardColor,
    notMoreEmtyPlace: notMoreEmtyPlace,
    notEmtySection: notEmtySection,
    oColor: OColor,
    xColor: xColor,
    winnerMessage,
    playerMessage
  };
} );
